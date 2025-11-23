import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
  
    <nav className="relative w-full overflow-visible z-50 border-t-11 border-red-700 sm:border-t-0">
      {/* Blood Drip Image */}
      <img
        src="hoty.gif"
        alt="Blood Drip"
        className="absolute left-0 w-full h-auto z-10 pointer-events-none"
      />

      {/* Navigation Links */}
      <div className="mx-auto px-4 absolute md:top-[-14px] z-20 w-full top-[-34px] ">
        <ul className="
          flex flex-wrap justify-evenly items-center
          gap-1 md:gap-[80px] lg:gap-[120px]
          py-4 text-2xl
        ">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/music', label: 'Music' },
            { to: '/projects', label: 'Projects' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className="
                  text-xl md:text-4xl lg:text-5xl
                  text-white
                  font-slash
                  px-2 md:px-4 py-1 md:py-2
                  hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]
                "
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    

  );
}