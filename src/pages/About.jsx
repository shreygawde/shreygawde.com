export default function About() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden pt-24">
      
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* content */}
      <div className="relative z-10 px-6 md:px-12 max-w-4xl">
        <h1
          className="font-art text-[10vw] sm:text-[8vw] md:text-[5vw] select-none"
          style={{
            background:
              "linear-gradient(45deg, #00f0ff, #ff00ff, #ff0000, #00ffd9)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            animation: "hueShift 8s linear infinite",
          }}
        >
          ABOUT ME
        </h1>

        <p className="mt-6 text-lg opacity-80 leading-relaxed">
          Shrey Gawde
        </p>

        <p className="mt-2 text-lg opacity-80 leading-relaxed">
          2nd Year Computer Engineering — learning development and design.
        </p>
        <p className="mt-2 text-lg opacity-80 leading-relaxed">React · Vite · Tailwind · FL Studio · UI Design · Sound Design · Branding
</p>
<p className="mt-2 text-lg opacity-80 leading-relaxed">1 deployed site 4 active projects</p>
      </div>

      <style>{`
        @keyframes hueShift {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

