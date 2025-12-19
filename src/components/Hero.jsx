import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
      {/* Glow animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* FOTO FULL RIGHT */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
        <img
          src="/yo.jpg"
          alt="Jefferson Bautista"
          className="w-full h-full object-cover"
        />

        {/* Desvanecimiento izquierda → derecha */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-950" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12">
          {/* Texto */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p
              className={`text-cyan-400 font-semibold mb-4 transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
                }`}
            >
              ¡Bienvenido a mi portafolio!
            </p>

            <h1
              className={`text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent transition-all duration-700 delay-100 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
                }`}
            >
              Jefferson Bautista
            </h1>

            <p
              className={`text-xl md:text-2xl text-neutral-300 mb-8 transition-all duration-700 delay-200 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
                }`}
            >
              Desarrollador y diseñador de{" "}
              <span className="text-cyan-400 font-semibold relative">
                Páginas Web y Software
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 animate-pulse" />
              </span>
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
                }`}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-black font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition">
                Contáctame
              </button>

              <a
                href="/Jefferson_Bautista_Aguilera_CV.pdf"
                download="Jefferson_Bautista_Aguilera_CV.pdf"
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10
                           rounded-xl text-white font-semibold hover:border-cyan-400
                           hover:scale-105 transition text-center"
              >
                Descargar CV
              </a>
            </div>

            {/* Social */}
            <div
              className={`flex gap-4 mt-8 transition-all duration-700 delay-500 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
                }`}
            >
              {/* GitHub */}
              <a
                href="https://github.com/Jefferson-BA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-cyan-400 hover:scale-110 transition"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.38-3.88-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.17a10.9 10.9 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.63 1.59.23 2.77.11 3.06.74.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.65.42.36.8 1.08.8 2.18v3.24c0 .31.21.68.8.56 4.57-1.53 7.85-5.85 7.85-10.95C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jefferson-bautista-aguilera/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-cyan-400 hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 24h4.52V7.98H.22V24zM8.98 7.98H13.3v2.2h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V24h-4.52v-6.94c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V24H8.98V7.98z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jefferson1ba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-cyan-400 hover:scale-110 transition"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zm4.75-9.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Columna vacía para balance visual */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
