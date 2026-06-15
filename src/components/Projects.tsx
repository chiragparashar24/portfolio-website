import { projects } from '@/data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-20 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className=" text-4xl md:text-5xl font-black text-white text-center mb-20">
          Featured Projects
        </h2>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className=" p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/10 hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 transform group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                {project.featured && (
                  <span className="inline-block px-4 py-1 mb-4 text-xs font-bold bg-gradient-to-r from-accent to-orange-500 text-white rounded-full uppercase tracking-wider animate-pulse">
                    ⭐ Featured
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-accent/80 font-semibold mb-4 group-hover:text-accent transition-colors">
                  {project.tech.join(' • ')}
                </p>

                <p className="text-white/70 mb-6 leading-relaxed group-hover:text-white/80 transition-colors">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 hover:scale-110 transition-all transform"
                >
                  {project.linkText} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
