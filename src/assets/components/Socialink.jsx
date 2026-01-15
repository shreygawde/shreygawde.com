export default function Socialink({ icon, text, url, className = "" }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center relative ${className}`}
    >
      {/* BLOOD SPLATTER + ICON */}
      <div className="relative w-[60vw] max-w-[440px] aspect-square mb-6">
        <img
          src="/blood.png"
          alt="Blood splatter"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
        <img
          src={icon}
          alt={text}
          className="absolute left-1/2 top-1/2 w-[25%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* TEXT */}
      <span className="font-slash text-[8vw] sm:text-[4vw] md:text-[5vw] bg-gradient-to-b from-[#4B0000] via-[#B10516] to-[#FF0000] bg-clip-text text-transparent drop-shadow-lg tracking-tight mb-2">
        {text}
      </span>
    </a>
  );
}
