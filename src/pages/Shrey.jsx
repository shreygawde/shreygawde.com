import { useLocation } from "react-router-dom";
import Navigation from "../assets/components/Navigation.jsx";      // current one
import StyledNavigation from "../assets/components/StyledNavigation.jsx";  // new one
import Foot from "../assets/components/Foot.jsx";              // ✅ add this import

export default function Shrey({ children }) {
  const location = useLocation();
  const path = location.pathname;

  // Show blood navbar on /contact only
  const isContact = path === "/contact";

  return (
    <div className="min-h-screen flex flex-col font-display relative bg-black text-white">
      {/* ✅ Navbar */}
      {isContact ? <Navigation /> : <StyledNavigation />}

      {/* ✅ Page content */}
      <main className="flex-grow">{children}</main>

      {/* ✅ Global Footer */}
      <Foot />
    </div>
  );
}
