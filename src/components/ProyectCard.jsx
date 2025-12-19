import { skills } from "../data/skills";

export default function ProjectCard() {
  return (
    <section className="relative py-10 overflow-hidden bg-slate-950">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center px-6">
        <p className="text-cyan-400 font-semibold tracking-widest mb-2">
          HERRAMIENTAS
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
          Tecnologías que eh utilizado
        </h2>
        <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-sm">
          Tecnologías y herramientas aplicadas durante mi formación y desarrollo
          de proyectos.(Este portafolio esta aun en desarrollo al igual que mi aprendizaje con las tecnologias)
        </p>
      </div>

      {/* Slider horizontal */}
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="mx-3 min-w-[220px] group relative rounded-xl px-5 py-4 
                         backdrop-blur-2xl bg-white/5 border border-white/10
                         transition-all duration-300 hover:border-cyan-400/40"
            >

              <div className="relative z-10 flex items-center gap-4">
                {/* Icono */}
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition"
                  />
                </div>

                {/* Texto */}
                <div className="text-left">
                  <h3 className="text-white font-semibold text-sm">
                    {skill.name}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-snug mt-0.5">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animación */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
