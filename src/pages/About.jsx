export default function About() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        background: "url('/raindow-3351.gif') center/cover no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6">
        <h1
          className="font-art text-[10vw] sm:text-[8vw] md:text-[6vw] select-none"
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
        <p className="max-w-2xl mx-auto mt-6 text-lg opacity-80 leading-relaxed">
          I'm Shrey Gawde, a creator who alternates between design, sound, and code.  From web projects that bend visuals to tracks that twist frequencies, what began as a curiosity about how things work evolved into creating things that feel alive.  Every experiment, concept, and distortion comes together on this site.
        </p>
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
