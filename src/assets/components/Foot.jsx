import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md text-center text-white">
      {/* Gradient divider line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00f0ff] via-[#ff00ff] to-[#00ffd9]" />

      <div className="px-6 py-10 flex flex-col items-center justify-center gap-6 max-w-5xl mx-auto text-center">
        {/* Brand / Title */}
        <div className="font-art text-3xl hue-shift select-none">Distort.</div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest opacity-80">
          {["Home", "About", "Music", "Projects", "Contact"].map((name) => (
            <Link
              key={name}
              to={`/${name.toLowerCase() === "home" ? "" : name.toLowerCase()}`}
              className="transition-all duration-300 hover:text-[#00ffd9] hover:opacity-100"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mt-2">
          <a
            href="https://www.instagram.com/shreygawde/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img
              src="/insta.png"
              alt="Instagram"
              className="w-7 h-7 opacity-80 hover:opacity-100"
            />
          </a>

          <a
            href="https://github.com/shreygawde"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img
              src="/gitt.png"
              alt="GitHub"
              className="w-7 h-7 opacity-80 hover:opacity-100"
            />
          </a>

          <a
            href="https://x.com/GawdeShrey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img
              src="/xp.png"
              alt="X (Twitter)"
              className="w-7 h-7 opacity-80 hover:opacity-100"
            />
          </a>

          <a
            href="https://www.reddit.com/user/Shreyaldo07/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img
              src="/reddit.png"
              alt="Reddit"
              className="w-7 h-7 opacity-80 hover:opacity-100"
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs opacity-60 tracking-wider mt-4">
          © {new Date().getFullYear()} Shrey Gawde — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
