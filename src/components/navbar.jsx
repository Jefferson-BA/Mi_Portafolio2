import { useState, useEffect } from "react";
import { RocketIcon } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre Mí" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "w-[95%] max-w-5xl" : "w-[90%] max-w-6xl"
      }`}
    >
      {/* Capa espejo */}
      <div className="relative rounded-3xl overflow-hidden">
        {/* Glass */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl" />
        <div className="absolute inset-0 shadow-[0_8px_40px_rgba(0,0,0,0.35)] rounded-3xl" />

        {/* Contenido */}
        <div className="relative px-6 py-4 flex items-center justify-between gap-6 border border-white/10 rounded-3xl">
          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleScrollTo("home")}
          >
            <div className="relative w-11 h-11 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white/20 animate-spin-slow" />
              <div className="absolute inset-1 rounded-full border border-white/10 animate-spin-slower-reverse" />

              <div className="relative w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <RocketIcon className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-sm font-semibold tracking-widest text-white/90">
                JEFFERSON
              </h1>
              <p className="text-[10px] text-white/50 tracking-widest">
                DEV • DESIGNER
              </p>
            </div>
          </div>

          {/* NAV */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-2xl p-1 border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animaciones */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slower-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-spin-slower-reverse {
          animation: spin-slower-reverse 16s linear infinite;
        }
      `}</style>
    </nav>
  );
}
