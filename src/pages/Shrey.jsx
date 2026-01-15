import { useLocation } from "react-router-dom";
import Navigation from "../assets/components/Navigation.jsx";      
import StyledNavigation from "../assets/components/StyledNavigation.jsx";  
import Foot from "../assets/components/Foot.jsx";             

export default function Shrey({ children }) {
  const location = useLocation();
  const path = location.pathname;

 
  const isContact = path === "/contact";

  return (
    <div className="min-h-screen flex flex-col font-display relative bg-black text-white">
     
      {isContact ? <Navigation /> : <StyledNavigation />}

      
      <main className="flex-grow">{children}</main>

      
      <Foot />
    </div>
  );
}
