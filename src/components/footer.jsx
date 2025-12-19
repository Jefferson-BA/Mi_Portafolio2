// src/components/footer.jsx
export default function Footer() {
  return (
    <footer className="text-center py-6 border-t border-white/10 mt-20">
      <p className="text-white/60">
        © {new Date().getFullYear()} Jefferson Bautista — Todos los derechos reservados.
      </p>
    </footer>
  )
}
