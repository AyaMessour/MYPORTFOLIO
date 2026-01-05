import { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaPlayCircle, FaVideo, FaStar, FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Emcboost from "./assets/emc.jpg";
import Law from "./assets/Law.jpg";
import Shop from "./assets/Shop.jpg";
import Restaurant from "./assets/Restaurant.jpg";
import List from "./assets/todolist.jpg";



export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A sophisticated full-stack e-commerce solution with advanced features like real-time inventory, AI-powered recommendations, and secure payment processing.",
      image: Shop,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redis"],
      githubUrl: "https://github.com",
      hasLiveDemo: false,
      videoUrl: 'https://drive.google.com/file/d/1k2qasByymhbmINALoK6deR5Ae_5xHyFQ/view?usp=drive_link' ,
      category: "fullstack",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Construction Company ",
      description: "An intelligent task management ecosystem scheduling, team collaboration, and advanced analytics dashboard.",
      image: Emcboost,
      technologies: ["React", "Firebase", "Tailwind CSS", "AI Integration", "WebSockets"],
      githubUrl: "https://github.com",
      hasLiveDemo: true,
      liveUrl: "https://emc-boost.netlify.app/",
      category: "frontend",
      featured: true,
      year: "2025"
    },
    {
      id: 3,
      title: " Restaurant Management ",
      description: "A comprehensive restaurant management platform with real-time ordering, table management, and customer analytics.",
      image: Restaurant,
      technologies: ["React", "Inertia.JS", "Laravel", "Chart.js", "Tailwindcss", "WebRTC"],
      githubUrl: "https://github.com",
      hasLiveDemo: false,
      videoUrl: "https://drive.google.com/file/d/1Bz04t2N8qYLgoDPXQirl4df7X0AaTFMS/view?usp=drive_link",
      category: "fullstack",
      featured: false,
      year: "2025"
    },
    {
      id: 4,
      title: "Task Management web site ",
      description: "Enterprise-grade REST API with microservices architecture, advanced security, and comprehensive monitoring.",
      image: List,
      technologies: ["Node.js", "Express", "JWT", "MongoDB", "Docker", "Kubernetes"],
      githubUrl: "https://github.com",
      hasLiveDemo: true,
      liveUrl: "https://ayaslistodo.netlify.app/",
      category: "frontend",
      featured: false,
      year: "2025"
    },
    {
      id: 5,
      title: "Law firm",
      description: "Next-generation fitness app with AI coaching, social features, and advanced health analytics.",
      image: Law,
      technologies: ["React Native", "Redux", "Firebase", "AI", "HealthKit"],
      githubUrl: "https://github.com",
      hasLiveDemo: true,
      liveUrl: "https://justice-law-partner.netlify.app/",
      category: "frontend",
      featured: true,
      year: "2024"
    },
  ];

  const filters = [
    { id: "all", name: "All Projects", icon: <FaCode />, count: projects.length },
    { id: "frontend", name: "Frontend", icon: <FaLaptopCode />, count: projects.filter(p => p.category === "frontend").length },
    { id: "backend", name: "Backend", icon: <FaServer />, count: projects.filter(p => p.category === "backend").length },
    { id: "fullstack", name: "Full Stack", icon: <FaCode />, count: projects.filter(p => p.category === "fullstack").length },
    { id: "mobile", name: "Mobile", icon: <FaMobileAlt />, count: projects.filter(p => p.category === "mobile").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openVideoModal = (project) => {
    setSelectedProject(project);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedProject(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-8">
            <FaRocket className="text-cyan-400 text-lg" />
            <span className="text-cyan-300 font-semibold text-sm">Featured Projects</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              My
            </span>
            <br />
            <span className="text-white">Portfolio</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Explore my journey through <span className="font-semibold text-cyan-300">innovative projects</span> that showcase 
            my passion for creating <span className="font-semibold text-purple-300">exceptional digital experiences</span>
          </p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border-cyan-400/50 text-white shadow-2xl shadow-cyan-500/20"
                  : "bg-white/5 border-white/10 text-blue-200 hover:border-cyan-400/30"
              }`}
            >
              <div className={`transition-transform duration-300 ${activeFilter === filter.id ? 'scale-110' : ''}`}>
                {filter.icon}
              </div>
              <span className="font-semibold">{filter.name}</span>
              <span className={`px-2 py-1 text-xs rounded-full transition-colors ${
                activeFilter === filter.id ? 'bg-cyan-500 text-white' : 'bg-white/10 text-blue-300'
              }`}>
                {filter.count}
              </span>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-3xl overflow-hidden border-2 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 ${
                  project.featured 
                    ? 'border-cyan-500/30 hover:border-cyan-400/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-slate-700/50 hover:border-slate-600/70'
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-white text-xs font-bold shadow-lg">
                    <FaStar className="text-yellow-300" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Year Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm rounded-full text-cyan-300 text-xs font-semibold border border-cyan-500/30">
                  {project.year}
                </div>

                {/* Project Image with Enhanced Overlay */}
                <div className="relative overflow-hidden h-56">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm rounded-full text-cyan-300 text-xs font-semibold border border-cyan-500/30 capitalize">
                      {project.category}
                    </span>
                  </div>

                  {/* Video Demo Indicator */}
                  {!project.hasLiveDemo && (
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1.5 bg-purple-600/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold flex items-center gap-1 border border-purple-400/30">
                        <FaVideo className="text-xs" />
                        <span>Video Demo</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-blue-200 mb-5 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="px-3 py-1.5 bg-slate-700/50 text-cyan-300 text-xs rounded-full border border-slate-600/50 hover:border-cyan-500/50 transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex justify-between items-center pt-5 border-t border-slate-700/50">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-200 hover:text-cyan-400 transition-colors duration-300 group/code"
                    >
                      <FaGithub className="text-lg group-hover/code:scale-110 transition-transform duration-300" />
                      <span>Source Code</span>
                    </motion.a>
                    
                    {project.hasLiveDemo ? (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-white hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 group/live"
                      >
                        <FaExternalLinkAlt className="text-sm group-hover/live:scale-110 transition-transform duration-300" />
                        <span>Live Demo</span>
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openVideoModal(project)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 group/video"
                      >
                        <FaPlayCircle className="text-sm group-hover/video:scale-110 transition-transform duration-300" />
                        <span>View Demo</span>
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="w-full h-full bg-slate-900 rounded-3xl m-0.5"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 rounded-2xl bg-slate-800/50 backdrop-blur-sm hover:bg-cyan-500/10 transition-all duration-500 group/view-more"
          >
            <span className="font-semibold">Explore More on GitHub</span>
            <FaGithub className="group-hover/view-more:scale-110 group-hover/view-more:rotate-12 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>

      {/* Enhanced Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {selectedProject?.title}
                    </h3>
                    <p className="text-blue-200">{selectedProject?.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeVideoModal}
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors shadow-lg"
                  >
                    &times;
                  </motion.button>
                </div>
              </div>
              
              {/* Video Content */}
              <div className="aspect-video bg-black flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <FaPlayCircle className="text-3xl text-white" />
                  </div>
                  <p className="text-white font-semibold text-xl mb-2">Project Demonstration</p>
                  <p className="text-blue-300 mb-6">
                    Watch the full walkthrough of this project
                  </p>
                  <motion.a 
                    href={selectedProject?.videoUrl} 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPlayCircle />
                    <span>Watch Video Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}