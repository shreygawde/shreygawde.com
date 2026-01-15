import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="relative w-full z-50 border-t-4 border-red-700 sm:border-t-0">
      
      {/* Blood Drip */}
      <img
        src="hoty.gif"
        alt="Blood Drip"
        className="absolute left-0 w-full h-auto z-10 pointer-events-none"
      />

      {/* Links */}
      <div className="absolute top-[-28px] z-20 w-full">
        <ul
          className="
            flex items-center
            px-6 py-4
            gap-6

            overflow-x-auto
            justify-start

            md:overflow-visible
            md:justify-between

            text-xl sm:text-2xl md:text-4xl lg:text-5xl
          "
        >
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/music', label: 'Music' },
            { to: '/projects', label: 'Projects' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <li key={to} className="flex-shrink-0">
              <Link
                to={to}
                className="
                  text-white font-slash
                  px-2 py-1
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
