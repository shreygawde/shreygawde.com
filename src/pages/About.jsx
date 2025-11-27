export default function About() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
     
    >
     
      <div className="absolute inset-0 bg-black/50 z-0" />

     
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
          Shrey Gawde
          </p>
          <p className="max-w-2xl mx-auto mt-6 text-lg opacity-80 leading-relaxed">
          2nd Year Computer Engineering Learning developement and design. 
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
