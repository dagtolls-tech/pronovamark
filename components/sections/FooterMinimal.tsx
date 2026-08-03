export function FooterMinimal() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black border-t border-neutral-800 py-8" role="contentinfo">
      <p className="text-neutral-500 text-xs text-center">
        © {year} Pronovamark. Todos los derechos reservados.
      </p>
    </footer>
  )
}
