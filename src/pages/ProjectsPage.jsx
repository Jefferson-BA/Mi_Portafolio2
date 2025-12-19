import { useEffect, useState } from "react";
import {
  Code,
  Smartphone,
  Database,
  Rocket,
  X,
  Github,
} from "lucide-react";

// ===== ClassCraft =====
import classcraftVideo from "../assets/classcraft/preview.mp4";
import classcraftImg1 from "../assets/classcraft/img1.png";
import classcraftImg2 from "../assets/classcraft/img2.png";
import classcraftImg3 from "../assets/classcraft/img3.png";

// ===== TecUnify =====
import tecunifyVideo from "../assets/tecunify/preview.mp4";
import tecunifyImg1 from "../assets/tecunify/img1.png";
import tecunifyImg2 from "../assets/tecunify/img2.png";
import tecunifyImg3 from "../assets/tecunify/img3.png";
import tecunifyImg4 from "../assets/tecunify/img4.png";

// ===== MetroLima GO =====
import metrolimaVideo from "../assets/metrolima/preview.mp4";
import metrolimaImg1 from "../assets/metrolima/img1.png";
import metrolimaImg2 from "../assets/metrolima/img2.png";
import metrolimaImg3 from "../assets/metrolima/img3.png";

// ===== DigiRest =====
import digirestVideo from "../assets/digirest/preview.mp4";

export default function ProjectsPage() {
  const [visible, setVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeMedia, setActiveMedia] = useState(null);

  const projects = [
    {
      title: "TecUnify",
      subtitle: "Sistema de Gestión de Reservas",
      description:
        "Plataforma completa para la gestión de reservas de espacios en TECSUP.",
      tech: ["Spring Boot", "Django", "React", "PostgreSQL", "AWS", "Figma"],
      icon: <Rocket />,
      video: tecunifyVideo,
      images: [tecunifyImg1, tecunifyImg2, tecunifyImg3, tecunifyImg4],
      repo: "https://github.com/Jefferson-BA/TecUnify2", 
    },
    {
      title: "MetroLima GO",
      subtitle: "App móvil de rutas del Metro",
      description:
        "Aplicación Android para la planificación de rutas usando mapas interactivos.",
      tech: ["Kotlin", "Jetpack Compose", "Room", "Google Maps API", "Figma"],
      icon: <Smartphone />,
      video: metrolimaVideo,
      images: [metrolimaImg1, metrolimaImg2, metrolimaImg3],
      repo: "https://github.com/Jefferson-BA/MetroLimaGO1.2",
    },
    {
      title: "DigiRest",
      subtitle: "Sistema de Gestión para Restaurantes",
      description:
        "Sistema web para administrar pedidos, productos, categorías y usuarios.",
      tech: ["Laravel", "Livewire", "MySQL", "Vite", "Tailwind", "Figma"],
      icon: <Database />,
      video: digirestVideo,
      images: [],
      repo: "https://github.com/Jefferson-BA/DigiRest_v1",
    },
    {
      title: "ClassCraft",
      subtitle: "Plataforma educativa gamificada (En desarrollo)",
      description:
        "Aplicación web educativa inspirada en Canvas con enfoque gamificado.",
      tech: ["React", "Node.js", "MySQL", "Figma"],
      icon: <Code />,
      video: classcraftVideo,
      images: [classcraftImg1, classcraftImg2, classcraftImg3],
      repo: "https://github.com/Jefferson-BA/Classcraftv3",
    },
  ];

  useEffect(() => setVisible(true), []);

  const openModal = (project, media) => {
    setActiveProject(project);
    setActiveMedia(media);
  };

  const closeModal = () => {
    setActiveProject(null);
    setActiveMedia(null);
  };//comentario

  return (
    <>
      <section
        id="projects"
        className="relative py-32 px-6 md:px-12 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"
      >
        {/* ===== HEADER ===== */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-cyan-400 tracking-widest font-semibold mb-4">
            PORTAFOLIO
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Mis Proyectos
          </h2>
          <p className="mt-6 text-neutral-300 leading-relaxed">
            Proyectos desarrollados de manera{" "}
            <span className="text-cyan-400">grupal</span> junto a compañeros de
            TECSUP, enfocados en fortalecer mis habilidades técnicas, adaptarme
            a entornos colaborativos y potenciar mi interés por el{" "}
            <span className="text-cyan-400">diseño y la experiencia de usuario</span>.
          </p>
        </div>

        {/* ===== CARDS ===== */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => openModal(project, project.video)}
              className={`cursor-pointer relative rounded-2xl p-8 bg-slate-900/40 border border-white/10 overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
                visible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Video fondo */}
              {project.video && (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
              )}
              <div className="absolute inset-0 bg-slate-950/60" />

              <div className="relative z-10">
                {/* GitHub */}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-0 right-0 p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-cyan-400 hover:scale-110 transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}

                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-cyan-400 font-semibold mb-4">
                  {project.subtitle}
                </p>

                <p className="text-neutral-300 mb-6">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Thumbnails */}
                {project.images.length > 0 && (
                  <div className="flex gap-3 flex-wrap">
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project, img);
                        }}
                        className="w-14 h-14 rounded-lg object-cover border border-white/10 hover:scale-105 transition"
                        alt=""
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {activeProject && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full rounded-2xl bg-slate-950/80 border border-white/10 p-6"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <X />
            </button>

            {activeMedia?.endsWith(".mp4") ? (
              <video
                src={activeMedia}
                controls
                autoPlay
                className="w-full rounded-xl"
              />
            ) : (
              <img src={activeMedia} className="w-full rounded-xl" alt="" />
            )}
          </div>
        </div>
      )}
    </>
  );
}
