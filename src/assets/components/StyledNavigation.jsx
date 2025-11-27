import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/music", label: "Music" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`
        w-full text-white fixed top-0 left-0 z-[1000] 
        bg-black border-b border-white/10 transition-all duration-300
        flex flex-col items-center py-3 md:flex-row md:justify-between md:px-12 md:py-5
      `}
    >
      {/* Logo / Title */}
      <div className="font-art text-4xl md:text-5xl select-none tracking-wide mb-2 md:mb-0 drop-shadow-[0_0_10px_rgba(255,0,80,0.4)]">
        SHREY
      </div>

      {/* Links */}
      <div
        className={`
          flex ${isMobile ? "flex-nowrap whitespace-nowrap overflow-x-auto justify-center gap-5" : "gap-10"}
          font-bold 
          text-lg md:text-xl
          tracking-wide
        `}
      >
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`
              relative transition-all duration-300 
              hover:text-[--color-accent] hover:scale-[1.1]
              ${
                location.pathname === link.to
                  ? "text-[--color-accent] font-bold"
                  : "opacity-90"
              }
            `}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
