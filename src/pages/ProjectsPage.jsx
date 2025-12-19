import { useEffect, useState } from "react";
import { Code, Smartphone, Database, Rocket, X } from "lucide-react";

// ===== ClassCraft assets =====
import classcraftVideo from "../assets/classcraft/preview.mp4";
import classcraftImg1 from "../assets/classcraft/img1.png";
import classcraftImg2 from "../assets/classcraft/img2.png";
import classcraftImg3 from "../assets/classcraft/img3.png";

// ===== TecUnify assets =====
import tecunifyVideo from "../assets/tecunify/preview.mp4";
import tecunifyImg1 from "../assets/tecunify/img1.png";
import tecunifyImg2 from "../assets/tecunify/img2.png";
import tecunifyImg3 from "../assets/tecunify/img3.png";
import tecunifyImg4 from "../assets/tecunify/img4.png";

// ===== MetroLima GO assets =====
import metrolimaVideo from "../assets/metrolima/preview.mp4";
import metrolimaImg1 from "../assets/metrolima/img1.png";
import metrolimaImg2 from "../assets/metrolima/img2.png";
import metrolimaImg3 from "../assets/metrolima/img3.png";

// ===== DigiRest assets =====
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
        "Plataforma completa para la gestión de reservas de espacios en TECSUP. Incluye autenticación, panel administrativo, vista de usuarios y dashboards.",
      tech: ["Spring Boot", "Django", "React", "PostgreSQL", "AWS"],
      icon: <Rocket />,
      video: tecunifyVideo,
      images: [tecunifyImg1, tecunifyImg2, tecunifyImg3, tecunifyImg4],
    },
    {
      title: "MetroLima GO",
      subtitle: "App móvil de rutas del Metro",
      description:
        "Aplicación Android desarrollada con Kotlin y Jetpack Compose para la consulta de rutas del Metro de Lima, integración con Google Maps y funcionamiento offline.",
      tech: ["Kotlin", "Jetpack Compose", "Room", "Google Maps API"],
      icon: <Smartphone />,
      video: metrolimaVideo,
      images: [metrolimaImg1, metrolimaImg2, metrolimaImg3],
    },
    {
      title: "DigiRest",
      subtitle: "Sistema de Gestión para Restaurantes",
      description:
        "Sistema web para la gestión de restaurantes que permite administrar pedidos, productos, categorías y usuarios.",
      tech: ["Laravel", "Livewire", "MySQL", "Vite", "Tailwind CSS"],
      icon: <Database />,
      video: digirestVideo,
      images: [],
    },
    {
      title: "ClassCraft",
      subtitle: "Plataforma educativa gamificada",
      description:
        "Aplicación web educativa inspirada en Canvas, con sistema de perfiles académicos y gamificación.",
      tech: ["React", "Node.js", "MySQL"],
      icon: <Code />,
      video: classcraftVideo,
      images: [classcraftImg1, classcraftImg2, classcraftImg3],
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
  };

  return (
    <>
      <section
        id="projects"
        className="relative py-32 px-6 md:px-12 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => project.video && openModal(project, project.video)}
              className={`cursor-pointer relative rounded-2xl p-8 bg-slate-900/40 border border-white/10 overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
                visible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
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
                className="w-full rounded-xl mb-6"
              />
            ) : (
              <img src={activeMedia} className="w-full rounded-xl mb-6" alt="" />
            )}

            {activeProject.images.length > 0 && (
              <div className="flex gap-4 justify-center flex-wrap">
                {activeProject.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveMedia(img)}
                    className={`w-20 h-20 rounded-lg object-cover cursor-pointer transition ${
                      activeMedia === img ? "ring-2 ring-cyan-400" : ""
                    }`}
                    alt=""
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
