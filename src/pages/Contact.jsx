import Socialink from "../assets/components/Socialink.jsx";

export default function Contact() {
  return (
    <div
      className="
        min-h-screen w-full flex flex-col items-center justify-center 
        bg-[url('/concrete-texture.jpg')] bg-cover bg-center bg-no-repeat
        text-white overflow-hidden relative
      "
    >
      <h1
        className="font-blood text-[10vw] sm:text-[8vw] md:text-[6vw] bg-gradient-to-b from-[#4B0000] via-[#B10516] to-[#FF0000] bg-clip-text text-transparent drop-shadow-lg tracking-tight mb-10 mt-26 select-none"
        
      >
        CONTACT
      </h1>

      <div className="flex flex-wrap justify-center gap-12 sm:gap-20 z-10">
        <Socialink icon="/insta.png" text="Instagram" url="https://www.instagram.com/shreygawde/" />
        <Socialink icon="/gitt.png" text="GitHub" url="https://github.com/shreygawde" />
        <Socialink icon="/xp.png" text="Twitter" url="https://x.com/GawdeShrey" />
        <Socialink icon="/reddit.png" text="Reddit" url="https://www.reddit.com/user/Shreyaldo07/" />
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
