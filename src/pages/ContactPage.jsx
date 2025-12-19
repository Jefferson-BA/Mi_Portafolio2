import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      id="contact"
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
            CONTACTO
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Hablemos
          </h2>
          <p className="mt-6 text-neutral-300 max-w-2xl mx-auto">
            ¿Tienes una idea, proyecto o propuesta? Escríbeme y conversemos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/40">
                <Mail />
              </div>
              <div>
                <h3 className="text-white font-semibold">Correo</h3>
                <p className="text-neutral-300 text-sm">
                  jefferson.ig.ig@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/40">
                <Phone />
              </div>
              <div>
                <h3 className="text-white font-semibold">Teléfono</h3>
                <p className="text-neutral-300 text-sm">
                  +51 902 543 392
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/40">
                <MapPin />
              </div>
              <div>
                <h3 className="text-white font-semibold">Ubicación</h3>
                <p className="text-neutral-300 text-sm">
                  Lima, Perú
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            className={`relative group rounded-2xl p-8 backdrop-blur-xl bg-slate-900/40 border border-white/10 shadow-2xl transition-all duration-700 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Glow hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative z-10 space-y-6">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-400/50 transition"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-400/50 transition"
              />

              <textarea
                rows="5"
                placeholder="Mensaje"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-400/50 transition resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
              >
                Enviar mensaje
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
