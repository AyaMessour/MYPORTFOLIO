import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaUser, FaComment } from "react-icons/fa";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvgblzqv");
  const [showNotification, setShowNotification] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isFormInteracted, setIsFormInteracted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  //   return () => setIsMounted(false);
  // }, []);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   handleSubmit(e).then(() => {
  //     if (state.succeeded) {
  //       setShowNotification(true);
  //       setTimeout(() => {
  //         if (isMounted) setShowNotification(false);
  //       }, 4000);
  //     }
  //   });
  // };
  const onSubmit = (e) => {
  e.preventDefault();
  handleSubmit(e); // don't check state here
};

useEffect(() => {
  if (state.succeeded && isMounted) {
    setShowNotification(true);
    setTimeout(() => {
      if (isMounted) setShowNotification(false);
    }, 4000);
  }
}, [state.succeeded, isMounted]);


  const handleFormInteraction = () => {
    if (!isFormInteracted) {
      setIsFormInteracted(true);
    }
  };

  return (
    <div id="Contact" className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 px-4 py-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl w-full relative z-10">
        {/* Contact Info Panel */}
        <div className={`w-full md:w-2/5 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl space-y-8 border border-blue-100/30 transform transition-all duration-500 ${isFormInteracted ? 'md:-translate-x-4' : ''}`}>
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 mb-2">
              Get In Touch
            </h2>
            <p className="text-blue-600 font-medium">Let's create something amazing together</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 transition-all duration-300 hover:shadow-md border border-blue-100/50 group">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-lg" />
              </div>
              <div>
                <p className="text-blue-800 font-medium">Email</p>
                <a href="mailto:ayamessour35@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">ayamessour35@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 transition-all duration-300 hover:shadow-md border border-blue-100/50 group">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <div>
                <p className="text-blue-800 font-medium">Location</p>
                <p className="text-blue-600">Morocco, Casablanca</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-blue-800 font-bold mb-5 text-lg text-center">Connect with me</h3>
            <div className="flex gap-5 justify-center">
              <a 
                href="mailto:ayamessour35@gmail.com" 
                className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-blue-200/50"
              >
                <FaEnvelope className="text-blue-700 text-xl" />
              </a>
              <a 
                href="https://github.com/AyaMessour" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-blue-200/50"
              >
                <FaGithub className="text-blue-700 text-xl" />
              </a>
              <a 
                href="https://linkedin.com/in/aya-messour-45b933341" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-blue-200/50"
              >
                <FaLinkedin className="text-blue-700 text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Panel */}
        <div className="w-full md:w-3/5 relative">
          {showNotification && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-center animate-fade-in-down z-10 flex items-center gap-2">
              <FaPaperPlane className="animate-bounce" />
              Your message was sent successfully!
            </div>
          )}

          <form
            onSubmit={onSubmit}
            onClick={handleFormInteraction}
            onFocus={handleFormInteraction}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl space-y-6 border border-blue-100/30 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-blue-200/30"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-cyan-200/30"></div>
            <div className="absolute top-1/2 right-1/2 w-16 h-16 rounded-full bg-indigo-200/20 animate-pulse"></div>
            
            <div className="text-center mb-4 relative z-10">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 mb-2">
                Send a Message
              </h2>
              <p className="text-blue-600 font-medium">
                Have a question or want to work together?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="relative">
                <label className="block text-blue-700 font-medium mb-2 flex items-center gap-2">
                  <FaUser className="text-blue-500" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 pl-11 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                />
                <FaUser className="absolute left-3 top-11 transform -translate-y-1/2 text-blue-400" />
              </div>

              <div className="relative">
                <label className="block text-blue-700 font-medium mb-2 flex items-center gap-2">
                  <FaEnvelope className="text-blue-500" />
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 pl-11 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                />
                <FaEnvelope className="absolute left-3 top-11 transform -translate-y-1/2 text-blue-400" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div className="relative z-10">
              <label className="block text-blue-700 font-medium mb-2 flex items-center gap-2">
                <FaComment className="text-blue-500" />
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message..."
                required
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-white/80"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-4 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden group shadow-lg hover:shadow-cyan-500/20"
            >
              <span className="relative z-10">
                {state.submitting ? "Sending..." : "Send Message"}
              </span>
              <FaPaperPlane className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.5s ease-out;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;