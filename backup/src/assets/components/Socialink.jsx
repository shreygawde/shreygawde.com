export default function Socialink({
  icon,
  text,
  url,
  reverse = false,
  className = "",
  textOffset = "0"
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative flex items-center 
        gap-2 sm:gap-4 md:gap-12 lg:gap-16
        my-6 px-1 
        ${reverse ? "flex-row-reverse" : ""}
        ${className}
      `}
    >
      {/* ICON + BLOOD SPLATTER */}
      <div
        className={`
          relative flex-shrink-0
          w-[62vw] max-w-[700px] min-w-[220px]
          aspect-square ${
    reverse ? "translate-x-6 md:translate-x-12" : "-translate-x-10 md:-translate-x-12 lg:-translate-x-20"}
        `}
      >
        <img
          src="/blood.png"
          alt="Blood splatter"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
        <img
          src={icon}
          alt={text}
          className="
            absolute left-1/2 top-1/2
            w-[20%] sm:w-[18%] md:w-[16%] lg:w-[14%]
            -translate-x-1/2 -translate-y-1/2
            hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]
          "
        />
      </div>

      {/* TEXT */}
      <span
        className="
          font-slash 
          text-[8vw] sm:text-[10vw] md:text-[4vw] lg:text-[140px]
          bg-gradient-to-b from-[#4B0000] via-[#B10516] to-[#FF0000]
          bg-clip-text text-transparent drop-shadow-lg
           
          leading-20 lg:leading:none
        "
        style={{
          [reverse ? "right" : "left"]: textOffset,
        }}
      >
        {text}
      </span>
    </a>
  );
}




