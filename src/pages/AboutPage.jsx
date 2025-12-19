import { useEffect, useState } from "react";
import { User, GraduationCap, Code2, Palette } from "lucide-react";

export default function AboutPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"
    >
      {/* Glow decorativo */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full -top-60 -left-60 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full -bottom-60 -right-60 animate-pulse" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <p className="text-cyan-400 font-semibold tracking-widest mb-4">
            SOBRE MÍ
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            ¿Quién soy?
          </h2>
          <p className="mt-6 text-neutral-300 max-w-3xl mx-auto">
            Estudiante de Diseño y Desarrollo de Software en TECSUP, actualmente
            en etapa de formación y aprendizaje práctico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-neutral-300 leading-relaxed">
              Actualmente me encuentro en proceso de formación profesional,
              desarrollando proyectos académicos y personales que me permiten
              aplicar los conocimientos adquiridos y adaptarme progresivamente
              al entorno real del desarrollo de software.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              A través de estos proyectos he trabajado con tecnologías como{" "}
              <span className="text-cyan-400">React</span>,{" "}
              <span className="text-cyan-400">Spring Boot</span>,{" "}
              <span className="text-cyan-400">Kotlin</span> y bases de datos
              relacionales, utilizándolas principalmente como herramientas de
              aprendizaje y práctica continua.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              Mi mayor interés se encuentra en el{" "}
              <span className="text-cyan-400 font-medium">
                diseño de interfaces y experiencia de usuario (UI/UX)
              </span>
              , enfocándome en crear soluciones visualmente claras, funcionales y
              centradas en el usuario, complementando este enfoque con bases
              sólidas de desarrollo.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              Me considero una persona que trabaja en equipo, adaptabilidad y comprometida con el
              aprendizaje continuo y motivada por seguir desarrollando mis
              habilidades para integrarme de manera efectiva al ámbito
              profesional.
            </p>
          </div>

          {/* Cards */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {[
              {
                icon: <GraduationCap />,
                title: "Formación",
                text: "TECSUP – Diseño y Desarrollo de Software",
              },
              {
                icon: <Code2 />,
                title: "Práctica",
                text: "Proyectos académicos y personales",
              },
              {
                icon: <Palette />,
                title: "Interés Principal",
                text: "Diseño UI/UX y experiencia de usuario",
              },
              {
                icon: <User />,
                title: "Perfil",
                text: "Responsable, autodidacta y en constante aprendizaje",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group rounded-2xl p-6 backdrop-blur-xl bg-slate-900/40 border border-white/10 shadow-2xl hover:border-cyan-400/40 transition"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/40">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-neutral-300 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
