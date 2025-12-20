// Hero.jsx
import Profile from "./assets/profile.jpeg";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden min-h-screen flex items-center">
      {/* Animated Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-fuchsia-900/30 to-cyan-900/20"></div>
        
        {/* Moving Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-orb-1"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-orb-2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-2xl animate-orb-3"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] animate-grid-move"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float-particle ${
              i % 4 === 0 ? 'bg-cyan-400/40' : 
              i % 4 === 1 ? 'bg-purple-400/40' : 
              i % 4 === 2 ? 'bg-pink-400/40' : 'bg-blue-400/40'
            }`}
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>

      {/* Mouse Trail Effect */}
      <div 
        className="absolute w-32 h-32 rounded-full opacity-30 blur-xl pointer-events-none transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(236,72,153,0.3) 30%, rgba(6,182,212,0.2) 60%, transparent 100%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Text Content - COMPLETELY REDESIGNED */}
        <div 
          ref={textRef}
          className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-white/80 font-medium">Available for new projects</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              AYA
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">MESSOUR</span>
          </h1>

          <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              Full-Stack <span className="font-semibold text-white">Developer</span>
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-12 backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
            Crafting <span className="text-cyan-300 font-semibold">digital experiences</span> that blend 
            innovative design with cutting-edge technology. Specializing in modern web applications 
            that deliver exceptional performance and user engagement.
          </p>

          {/* Stats */}
          {/* <div className="flex flex-wrap gap-8 mb-12 justify-center md:justify-start">
            {[
              { number: '', label: 'Projects' },
              { number: '1', label: 'Years Exp' },
              { number: '100%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* CTA Buttons - NEW DESIGN */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <button className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-1 hover:scale-105 overflow-hidden">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            <button className="group px-12 py-4 border-2 border-white/20 bg-black/30 backdrop-blur-md text-white rounded-2xl font-semibold text-lg transition-all duration-500 hover:border-cyan-400/60 hover:bg-cyan-500/10 transform hover:-translate-y-1">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent group-hover:text-white transition-all duration-300">
                Let's Talk
              </span>
            </button>
          </div>
        </div>

        {/* Profile Image - COMPLETELY REDESIGNED */}
        <div 
          ref={imageRef}
          className={`w-full md:w-1/2 mt-16 md:mt-0 flex justify-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}
        >
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden group">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500 animate-pulse"></div>
              
              {/* Image with Overlay */}
              <div className="absolute inset-2 rounded-2xl overflow-hidden bg-gray-900 z-10">
                <img 
                  src={Profile}
                  alt="MESSOUR Aya" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl rotate-12 animate-float-slow flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-sm">React</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl -rotate-12 animate-float-slower flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-xs">Node.js</span>
            </div>

            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl rotate-45 animate-float-slowest flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-xs">TS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes orb-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 40px) scale(0.9);
          }
        }

        @keyframes orb-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 30px) scale(1.2);
          }
          66% {
            transform: translate(30px, -20px) scale(0.8);
          }
        }

        @keyframes orb-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(1.15);
          }
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) translateX(20px) rotate(120deg);
          }
          66% {
            transform: translateY(20px) translateX(-15px) rotate(240deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(15deg);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-15px) rotate(-15deg);
          }
        }

        @keyframes float-slowest {
          0%, 100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-10px) rotate(48deg);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-orb-1 {
          animation: orb-1 8s ease-in-out infinite;
        }

        .animate-orb-2 {
          animation: orb-2 12s ease-in-out infinite;
        }

        .animate-orb-3 {
          animation: orb-3 10s ease-in-out infinite;
        }

        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }

        .animate-float-particle {
          animation: float-particle 20s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 8s ease-in-out infinite;
        }

        .animate-float-slowest {
          animation: float-slowest 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}