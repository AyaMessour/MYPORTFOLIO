// AboutMe.jsx
import { FaCode, FaPalette, FaProjectDiagram, FaRocket, FaHeart, FaLightbulb } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import CV from "./assets/cv.pdf";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Building robust, scalable applications with modern technologies like React, Node.js, and cloud platforms.",
      gradient: "from-purple-500 to-cyan-500",
      bgGradient: "from-purple-50 to-cyan-50",
      delay: "0"
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive, accessible interfaces that prioritize user experience and visual storytelling.",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      delay: "200"
    },
    {
      icon: <FaProjectDiagram className="w-8 h-8" />,
      title: "Project Architecture",
      description: "Designing scalable systems and managing end-to-end project delivery with agile methodologies.",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      delay: "400"
    },
  ];

  const stats = [
   
    
    
    
    { number: "100%", label: "Client Satisfaction", icon: <FaHeart /> },
  ];

  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-24 overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/40 to-cyan-200/40 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float-slower"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-semibold text-sm">About Me & Services</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Creative
            </span>
            <br />
            <span className="text-slate-800">Developer</span>
          </h2>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I bridge the gap between <span className="font-semibold text-slate-800">design</span> and{' '}
            <span className="font-semibold text-slate-800">technology</span>, creating digital experiences 
            that are both beautiful and functional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Enhanced Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Main Content Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">My Philosophy</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    I believe that great digital products are born from the perfect harmony of{' '}
                    <span className="font-semibold text-purple-600">innovative design</span> and{' '}
                    <span className="font-semibold text-cyan-600">robust engineering</span>. 
                    Every project is an opportunity to solve complex problems with elegant solutions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">What Drives Me</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Passion for clean code, user-centered design, and continuous learning. 
                    I thrive on turning complex challenges into seamless digital experiences 
                    that make a real impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-2xl font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="relative z-10 transform group-hover:translate-x-1 transition-transform">
                  <FaRocket />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
          <a 
  href={CV}
  download="AyaMessour_CV.pdf"
  className="group px-8 py-4 border-2 border-slate-300 bg-white/80 backdrop-blur-sm text-slate-700 rounded-2xl font-semibold transition-all duration-500 hover:border-purple-400 hover:bg-purple-50 transform hover:-translate-y-1 flex items-center justify-center gap-3"
>
  <FaDownload className="text-purple-500 group-hover:scale-110 transition-transform duration-300" />
  Download CV
</a>
            </div>
          </div>

          {/* Right Column - Enhanced Services */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden ${
                  isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>

                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon Container */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}