import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Music() {
  const mountRef = useRef(null);
  const [rotation, setRotation] = useState([]);
  const [activeTrack, setActiveTrack] = useState(null);

  
  useEffect(() => {
    fetch("/a.json")
      .then((res) => res.json())
      .then((data) => setRotation(data))
      .catch((err) => console.error("Error loading rotation:", err));
  }, []);

  
  useEffect(() => {
    if (!activeTrack) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    


    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(3, 6);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 7;

    const isMobile = window.innerWidth <= 768;
const scaleFactor = isMobile ? 0.6 : 1;

camera.position.z = isMobile ? 9 : 7;
mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
renderer.render(scene, camera);


    const listener = new THREE.AudioListener();
    camera.add(listener);
    const sound = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();

    loader.load(activeTrack.audio, (buffer) => {
      if (sound.isPlaying) sound.stop();
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.6);
      sound.play();
    });

    const analyser = new THREE.AudioAnalyser(sound, 256);
    const original = geometry.attributes.position.array.slice();
    const positions = geometry.attributes.position.array;
    let hueShift = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const data = analyser.getFrequencyData();
      const bass = data.slice(0, 32).reduce((a, b) => a + b, 0) / 32;
      const chaos = Math.pow(bass / 256, 2) * 4;

      for (let i = 0; i < positions.length; i += 3) {
        const ix = i, iy = i + 1, iz = i + 2;
        const ox = original[ix], oy = original[iy], oz = original[iz];
        const freq = data[Math.floor((i / positions.length) * data.length)] / 255;
        const t = performance.now() * 0.002;
        positions[ix] = ox + Math.sin(ox * 3 + t * 2) * chaos * freq;
        positions[iy] = oy + Math.cos(oy * 4 + t * 2) * chaos * freq;
        positions[iz] = oz + Math.sin(oz * 5 + t * 3) * chaos * freq;
      }

      geometry.attributes.position.needsUpdate = true;
      hueShift = (hueShift + delta * 30) % 360;
      material.color = new THREE.Color(`hsl(${hueShift}, 100%, 60%)`);
      mesh.rotation.x += 0.004 + chaos * 0.02;
      mesh.rotation.y += 0.006 + chaos * 0.025;

      renderer.render(scene, camera);
    };
    animate();

  const onResize = () => {
  const isMobile = window.innerWidth <= 768;
  const scaleFactor = isMobile ? 0.6 : 1;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
  camera.position.z = isMobile ? 9 : 7;
};

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (sound.isPlaying) sound.stop();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [activeTrack]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div ref={mountRef} className="fixed inset-0 z-0 opacity-90" style={{ filter: "blur(2px) brightness(0.8)" }}></div>

      <div className="relative z-10 px-6 md:px-16 py-20 md:py-32 space-y-40">
        <section className="text-center pt-10 md:pt-20">
          <h1
            className="font-art text-[12vw] md:text-[7vw] select-none"
            style={{
              background: "linear-gradient(45deg, #00f0ff, #ff00ff, #ff0000, #00ffd9)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              animation: "hueShift 6s linear infinite",
              textShadow:
                "0 0 30px rgba(255,0,255,0.5), 0 0 80px rgba(0,255,255,0.3)",
            }}
          >
            MUSIC
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-2xl opacity-80 mt-6">
            Stuff im currently listening to and some of my favs.
          </p>
           <p className="max-w-xl mx-auto text-lg md:text-2xl opacity-80 mt-6">
            (Click on one of the sogs in my current rotation and look at the background)
          </p>
        </section>

        
        <section className="text-center my-12">
          <h2 className="font-art text-[8vw] md:text-[4vw] mb-6 text-[--color-accent]">
            CURRENT ROTATION
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            {rotation.map((t, i) => (
              <div
                key={i}
                className="relative group w-[260px] h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,0,255,0.15)] hover:shadow-[0_0_40px_rgba(255,0,255,0.4)] transition-all duration-500 cursor-pointer"
                onClick={() => setActiveTrack(t)}
              >
                <img
                  src={t.image}
                  alt={t.track}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end text-center p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="text-xl font-semibold">{t.track}</p>
                  <p className="text-sm opacity-70 mb-4">{t.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
<section className="relative z-10 mt-40 px-6 md:px-16 pb-20">
  <h2 className="font-art text-[8vw] md:text-[4vw] mb-10 text-center text-[--color-accent]">
    RATE / SOUND THOUGHTS
  </h2>

  {[
    {
      title: "A Great Chaos",
      artist: "Ken Carson",
      image: "/Ken_Carson_-_A_Great_Chaos.jpg",
      review: [
        "Ken Carson's die lit imo really put him on the map",
        "He showcases his styles in a more poiloished way (ironically along with the distortion)",
        "This album is a great step up from whole lotta red in terms of going in full on distortion but still loghter than osamson and the underground.",
        "Top Song-Me n My Kup"
      ],
      rating: "8 / 10"
    },
    {
      title: "Whole Lotta Red",
      artist: "Playboi Carti",
      image: "/Playboi_Carti_-_Whole_Lotta_Red.png",
      review: [
        "Carti’s magnum opus the best album ",
        "Can't go into an important event without listening to stop breathing that shit will get you turnt for a hospital visit",
        "each track is perfect(i dont like m3tamorphosis.",
        "Top Song-Stop Breathing"
      ],
      rating: "10 / 10"
    }
  ].map((entry, i) => {
    const [open, setOpen] = React.useState(false);
    return (
      <div
        key={i}
        onClick={() => setOpen(!open)}
        className={`relative mx-auto my-6 max-w-2xl transition-all duration-500 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md cursor-pointer overflow-hidden ${
          open ? "p-6 scale-[1.02]" : "p-4 hover:scale-[1.01]"
        }`}
      >
        
        <div className="flex items-center gap-4">
          <img
            src={entry.image}
            alt={entry.title}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div className="text-left">
            <h3 className="text-xl font-bold text-white">{entry.title}</h3>
            <p className="text-sm opacity-70">{entry.artist}</p>
          </div>
          <span className="ml-auto text-[--color-accent] text-lg">
            {open ? "−" : "+"}
          </span>
        </div>

        
        {open && (
          <div className="mt-6 space-y-4">
            {entry.review.map((p, idx) => (
              <p key={idx} className="opacity-80 leading-relaxed">
                {p}
              </p>
            ))}
            <div className="flex justify-end items-center mt-4">
              <span className="text-lg font-semibold text-[--color-accent]">
                {entry.rating}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  })}
</section>

    </div>
  );
}
