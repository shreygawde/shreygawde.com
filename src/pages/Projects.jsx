import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const canvasRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;
    let t = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
     h = canvas.height = document.body.scrollHeight;

    };
    resize();
    new ResizeObserver(resize).observe(document.body);

    window.addEventListener("resize", resize);

    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, w, h);

      const hue = (t * 240) % 360;
      ctx.strokeStyle = `hsla(${hue}, 100%, 60%, 0.8)`;
      ctx.lineWidth = 2.2;

      const gridSize = 80;
      const offset = (Math.sin(t) * gridSize) / 2;

      ctx.beginPath();
      for (let x = -offset; x < w; x += gridSize) {
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, h);
      }
      for (let y = -offset; y < h; y += gridSize) {
        ctx.moveTo(0, y + offset);
        ctx.lineTo(w, y + offset);
      }
      ctx.stroke();

      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "black" }}
      />

      <div className="relative z-10 px-10 pt-28  py-20">
        <h1 className="font-art text-[8vw] text-[--color-accent] mb-10">
          PROJECTS
        </h1>
        <p className="opacity-70 max-w-2xl mb-16">
          Experiments, builds, and ideas — structured chaos.  
          This section will grow as new projects drop.
        </p>

        
        <div
          onClick={() => setOpen(!open)}
          className={`border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md cursor-pointer transition-all duration-500 overflow-hidden ${
            open ? "p-6 scale-[1.02]" : "p-4 hover:scale-[1.01]"
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold">Personal Website</h3>
            <span className="text-[--color-accent] text-xl">
              {open ? "−" : "+"}
            </span>
          </div>

          {open && (
            <div className="mt-6 space-y-6">
              <img
                src="/wiwb.png"
                alt="Website Preview"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="opacity-80 leading-relaxed">
                A psychedelic-themed portfolio built with React, Vite, Tailwind, and Three.js.
                Features parallax animations, audio-reactive visualizers, and responsive design.
                The page has evolved over time by learning more concepts react had to offer.
                Fun fact- The contact page has a different aesthetic as it uses the first prototype style the whole site had just a reminder to where I started
                it uses a wvery whole lotta red inspired pallate with slash signature font and a blood drippin navbar with uv cursor and a gorey way to click on link.
                Obviously there were many changes made later as visible.
                 
              </p>
              <div className="flex justify-end items-center mt-4">
                <span className="text-lg font-semibold text-[--color-accent]">
                  Status: Completed (v1.0)
                </span>
              </div>
            </div>
          )}
        </div>

        
        <h2 className="font-art text-[6vw] md:text-[3vw] mt-24 mb-10 text-[--color-accent]">
          IN DEVELOPMENT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Quadfeed",
              desc: "A university-focused Reddit-style community platform for students to share insights and connect."
            },
            {
              title: "Anabolick",
              desc: "A high-protein food brand + app concept blending nutrition, design, and performance tracking."
            },
            {
              title: "Maid It",
              desc: "A smart maid services booking platform designed for local reliability and verified workers."
            }
          ].map((proj, i) => (
            <div
              key={i}
              className="border border-white/10 p-6 rounded-2xl bg-black/40 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="opacity-70 text-sm">{proj.desc}</p>
              <p className="mt-3 text-[--color-accent] text-xs">Coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
