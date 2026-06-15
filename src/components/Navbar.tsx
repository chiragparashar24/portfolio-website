interface NavbarProps {
  onThemeToggle: () => void
  isDark: boolean
}

const navLinks = ['Home', 'Projects', 'Leadership', 'Skills', 'Contact']

export default function Navbar({ onThemeToggle, isDark }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10">
      <div className="bg-gradient-to-b from-white/5 to-white/0 dark:from-white/5 dark:to-transparent">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="font-black text-2xl text-accent hover:scale-110 transition-transform">
            CP
          </a>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={onThemeToggle}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}
