function Navbar() {
  const links = [
    { href: '#home', label: 'A Solução' },
    { href: '#publico-alvo', label: 'Público-Alvo' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#equipe', label: 'Nossa Equipe' },
    { href: '#contatos', label: 'Contato' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex flex-col items-center gap-3 border-b border-[#f0f0f0] bg-white px-5 py-3.5 sm:flex-row sm:justify-between sm:px-8 sm:py-4 lg:px-[60px] lg:py-5">
      <span className="text-[1.4rem] font-extrabold text-[#1a1a2e]">TechForge</span>

      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[0.8rem] font-medium text-[#1a1a2e] transition-opacity hover:opacity-60 sm:text-[0.9rem]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar