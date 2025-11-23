import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ThemeSelect() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <div className="flex gap-10">
        {/* Grunge Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="p-10 bg-red-800 rounded-lg cursor-pointer text-3xl font-slash"
          onClick={() => navigate("src\pages\Home.jsx")}
        >
          Shrey
        </motion.div>

        {/* Minimal Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          className="p-10 bg-blue-500 rounded-lg cursor-pointer text-3xl font-bold"
          onClick={() => navigate("src\pages\side\Home2.jsx")}
        >
          Shrey
        </motion.div>
      </div>
    </div>
  );
}
