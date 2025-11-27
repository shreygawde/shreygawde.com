import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const wrapperRef = useRef(null);
  const rafRef = useRef(null);
  const pointer = useRef({ x: 0.5, y: 0.5 });
  const smooth = useRef({ x: 0.5, y: 0.5 });
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );
    
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    if (!motionEnabled && window.DeviceOrientationEvent?.requestPermission) {
      const handler = () => {
        window.DeviceOrientationEvent.requestPermission().catch(console.warn);
        setMotionEnabled(true);
        window.removeEventListener("click", handler);
      };
      
      window.addEventListener("click", handler, { once: true });
      return () => window.removeEventListener("click", handler);
    }
  }, [motionEnabled]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const layers = Array.from(wrapper.querySelectorAll(".par-layer"));
    const ease = 0.08;
    const strength = isMobile ? 54 : 45;

    const move = (x, y) => {
      pointer.current.x = x;
      pointer.current.y = y;
    };

    const onMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      move(x, y);
    };

    const onTilt = (e) => {
      
      const x = (e.gamma + 90) / 180; 
      const y = (e.beta + 90) / 180;
      x = Math.max(0, Math.min(1, x));
      y = Math.max(0, Math.min(1, y));
      move(x, y);
    };

    if (isMobile && window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", onTilt, true);
    } else {
      wrapper.addEventListener("mousemove", onMouseMove);
    }

    const animate = () => {
      smooth.current.x += (pointer.current.x - smooth.current.x) * ease;
      smooth.current.y += (pointer.current.y - smooth.current.y) * ease;
      const nx = (smooth.current.x - 0.5) * 2;
      const ny = (smooth.current.y - 0.5) * 2;

      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth);
        const tx = -nx * strength * depth;
        const ty = -ny * strength * depth;
        const scale = 1 + depth * 0.12;
        layer.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      wrapper.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("deviceorientation", onTilt);
    };
  }, [isMobile]);

  return (
    <div ref={wrapperRef} className="relative w-full min-h-screen overflow-hidden bg-black">
      
      <img src="/Ascend.jpg" className="par-layer absolute inset-0 w-full h-full object-cover" data-depth="0.05" alt="bg" />
      <img src="/Ascend2.png" className="par-layer absolute inset-0 w-full h-full object-cover opacity-90" data-depth="0.15" alt="layer" />
      <div className="absolute inset-0 flex justify-center items-center z-[5] pointer-events-none">
        <h1
  className="font-art hue-shift text-[clamp(3rem,18vw,10rem)]"
  style={{
    background: "linear-gradient(45deg,#00f0ff,#ff00ff,#ff0000,#00ffd9)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    WebkitTextStroke: "1px rgba(255,255,255,0.1)",
    textShadow: `0 0 30px rgba(255,0,255,.5),
      0 0 60px rgba(0,255,255,.3),
      0 0 100px rgba(255,255,255,.2)`
  }}
>
  Ascend.
</h1>

      </div>
      <img src="/Ascend3.png" className="par-layer absolute inset-0 w-full h-full object-cover opacity-85" data-depth="0.3" alt="" />
      <img src="/Ascend4.png" className="par-layer absolute inset-0 w-full h-full object-cover opacity-75" data-depth="0.5" alt="" />
      <img src="/Ascend5.png" className="par-layer absolute inset-0 w-full h-full object-cover opacity-75" data-depth="0.8" alt="" />
    </div>
  );
}
