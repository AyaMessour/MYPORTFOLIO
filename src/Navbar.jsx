// Navbar.jsx
import { useState, useEffect } from "react";
import Logo from "./assets/logo-light.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={Logo} 
              alt="Your Logo" 
              className={`transition-all duration-300 ${isScrolled ? "h-20 w-auto" : "h-20 w-auto"}`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
          
            <a 
              href="#about" 
              className="text-slate-200 hover:text-cyan-400 font-medium transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#projects" 
              className="text-slate-200 hover:text-cyan-400 font-medium transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#skills" 
              className="text-slate-200 hover:text-cyan-400 font-medium transition-colors duration-300 relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#Contact" 
              className="text-slate-200 hover:text-cyan-400 font-medium transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a 
              href="#Contact" 
              className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/20 font-medium"
            >
              Let's Collaborate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md p-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          <a
            href="#home"
            className="block px-3 py-2 text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-md font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-md font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-md font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-md font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="#contact"
              className="block w-full text-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}