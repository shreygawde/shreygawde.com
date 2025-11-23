import React, { useEffect, useState } from 'react';

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const formattedTime = time.toLocaleTimeString();

  let greeting = "Have A Good Night!";
  if (hours >= 5 && hours < 12) greeting = "Good Morning";
  else if (hours >= 12 && hours < 17) greeting = "Good Afternoon";
  else if (hours >= 17 && hours < 21) greeting = "Good Evening";

  return (
    <div className="w-full min-h-screen">
      {/* Hero section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Hero background image */}
        <img
          src="/placeholde.jpg"
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay for darkening the image */}
        <div
          className="
            absolute top-0 left-0 w-full h-full
            bg-gradient-to-b from-transparent to-black
          "
        ></div>
      </div>

      {/* Text block below hero */}
      <div className="bg-black w-full py-12 text-center overflow-hidden">
        <h1 className="font-blood text-5xl md:text-6xl lg:text-9xl bg-gradient-to-b from-[#4B0000] via-[#B10516] to-[#FF0000] bg-clip-text text-transparent leading-[1.4] py-8">
          {greeting}
        </h1>
        <p className="glitch font-zombies text-5xl md:text-7xl mt-4 bg-gradient-to-b from-[#4B0000] via-[#B10516] to-[#FF0000] bg-clip-text text-transparent" data-text={`It is ${formattedTime}`}>
          It is {formattedTime}
        </p>
      </div>
    </div>
  );
}
