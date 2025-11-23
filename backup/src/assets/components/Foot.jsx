export default function Foot() {
  return (
    <footer className="bg-black text-white py-6 mt-10 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Left Section */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Shrey Gawde. All rights reserved.
        </p>

        {/* Center Section */}
        <div className="flex space-x-6 my-4 md:my-0">
          <a href="/about" className="hover:text-red-500 transition">About</a>
          <a href="/projects" className="hover:text-red-500 transition">Projects</a>
          <a href="/contact" className="hover:text-red-500 transition">Contact</a>
        </div>

        {/* Right Section (Socials) */}
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="/gitt.png" alt="GitHub" className="w-6 h-6 hover:opacity-80"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/xp.png" alt="Twitter" className="w-6 h-6 hover:opacity-80"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
