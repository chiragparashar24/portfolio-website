import { metrics } from '@/data/portfolio'
import { useState, useEffect } from 'react'

interface HeroProps {
  onThemeToggle: () => void
  isDark: boolean
}

const floatingRoles = [
  'AI/ML Engineer',
  'Python Developer',
  'Full-Stack Developer',
  'Deep Learning Expert',
  'Web Developer',
  'Tech Leader',
]

export default function Hero({ onThemeToggle, isDark }: HeroProps) {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % floatingRoles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="max-w-4xl w-full text-center">
        <div className="mb-8 inline-block">
          <span className="px-6 py-3 rounded-full text-sm font-bold bg-white/10 text-white backdrop-blur-xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all">
            🚀 {floatingRoles[currentRole]}
          </span>
        </div>

        <h1
          className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
        >
          Chirag Parashar
        </h1>

        <p
          className="text-xl md:text-2xl font-bold text-accent mb-4"
        >
          Building AI & Full-Stack Solutions
        </p>

        <p
          className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-12"
        >
          AI/ML Developer | Full-Stack Engineer | Tech Leader | Building scalable systems with Python, JavaScript & Deep Learning
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16">
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/10 hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="text-3xl md:text-4xl font-black text-accent mb-2 group-hover:scale-125 transition-transform duration-300">{metric.value}</div>
              <div className="text-xs md:text-sm font-semibold text-white/60 uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all transform backdrop-blur-sm"
          >
            View My Work
          </a>
          <a
            href="/portfolio-website/resume.pdf"
            download
            className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all transform backdrop-blur-sm"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
