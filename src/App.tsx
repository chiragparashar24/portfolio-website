import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light'
    setIsDark(theme === 'dark')
    applyTheme(theme === 'dark')
  }, [])

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleThemeToggle = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
    applyTheme(newIsDark)
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div
        className="transition-colors min-h-screen"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)'
            : 'linear-gradient(to bottom right, #ffffff, #f1f5f9, #ffffff)',
          color: isDark ? '#ffffff' : '#0f172a'
        }}
      >
        <Navbar onThemeToggle={handleThemeToggle} isDark={isDark} />
        <main className="pt-16">
          <Hero onThemeToggle={handleThemeToggle} isDark={isDark} />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <footer
          className="py-8 px-4 text-center font-medium transition-colors"
          style={{
            borderTop: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(15,23,42,0.1)',
            color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.6)'
          }}
        >
          <p>Made with 🫶🏻 by Chirag Parashar</p>
        </footer>
      </div>
    </div>
  )
}
