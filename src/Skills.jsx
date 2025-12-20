"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaReact,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaRocket,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiPython,
  SiMongodb,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const skillCategories = [
    { id: "all", name: "All Skills", icon: <FaCode />, count: 11 },
    { id: "frontend", name: "Frontend", icon: <FaLayerGroup />, count: 5 },
    { id: "backend", name: "Backend", icon: <FaDatabase />, count: 4 },
    { id: "tools", name: "Tools", icon: <FaGitAlt />, count: 2 },
  ];

  const skills = [
    {
      name: "React",
      icon: <FaReact size={40} />,
      level: 90,
      category: "frontend",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      experience: "3+ years",
      description: "Building dynamic SPAs and reusable components",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={40} />,
      level: 95,
      category: "frontend",
      color: "from-yellow-400 to-yellow-300",
      bgColor: "bg-yellow-500/10",
      experience: "4+ years",
      description: "Modern ES6+ and advanced logic",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} />,
      level: 92,
      category: "frontend",
      color: "from-cyan-400 to-teal-400",
      bgColor: "bg-cyan-500/10",
      experience: "3+ years",
      description: "Utility-first responsive UI",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 size={40} />,
      level: 98,
      category: "frontend",
      color: "from-orange-500 to-orange-400",
      bgColor: "bg-orange-500/10",
      experience: "5+ years",
      description: "Semantic & accessible markup",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={40} />,
      level: 92,
      category: "frontend",
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-500/10",
      experience: "5+ years",
      description: "Animations, layouts & responsiveness",
    },

    {
      name: "Laravel",
      icon: <FaLaravel size={40} />,
      level: 78,
      category: "backend",
      color: "from-red-500 to-red-400",
      bgColor: "bg-red-500/10",
      experience: "2+ years",
      description: "Elegant backend applications",
    },
    {
      name: "PHP",
      icon: <FaPhp size={40} />,
      level: 80,
      category: "backend",
      color: "from-indigo-600 to-purple-500",
      bgColor: "bg-indigo-500/10",
      experience: "3+ years",
      description: "Server-side web development",
    },
    {
      name: "Python",
      icon: <SiPython size={40} />,
      level: 75,
      category: "backend",
      color: "from-yellow-500 to-blue-500",
      bgColor: "bg-yellow-500/10",
      experience: "2+ years",
      description: "Automation & backend scripting",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={40} />,
      level: 75,
      category: "backend",
      color: "from-green-500 to-green-400",
      bgColor: "bg-green-500/10",
      experience: "2+ years",
      description: "NoSQL document databases",
    },
    {
      name: "MySQL",
      icon: <SiMysql size={40} />,
      level: 80,
      category: "backend",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      experience: "3+ years",
      description: "Relational databases & optimization",
    },

    {
      name: "Git",
      icon: <FaGitAlt size={40} />,
      level: 88,
      category: "tools",
      color: "from-orange-600 to-orange-500",
      bgColor: "bg-orange-500/10",
      experience: "4+ years",
      description: "Version control & collaboration",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible && { opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 mb-6">
            <FaRocket className="text-cyan-400" />
            <span className="text-cyan-300 font-semibold">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-5xl font-black text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Tools and technologies I use to build modern applications.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition ${
                activeCategory === cat.id
                  ? "bg-cyan-600/20 border-cyan-400 text-white"
                  : "bg-white/5 border-white/10 text-blue-200"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-slate-800/60 rounded-3xl p-6 border border-slate-700 hover:border-cyan-400 transition"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-4 ${skill.bgColor}`}
                >
                  <div className="text-white">{skill.icon}</div>
                </div>

                <h3 className="text-white font-bold mb-2">{skill.name}</h3>
                <p className="text-sm text-blue-300 mb-3">
                  {skill.experience}
                </p>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
