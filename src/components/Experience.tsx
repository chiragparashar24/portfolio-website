import { experiences, certifications } from '@/data/portfolio'

export default function Experience() {
  return (
    <>
      <section id="leadership" className="py-24 px-4 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-20" />
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className=" text-4xl md:text-5xl font-black text-white text-center mb-20">
            Leadership & Community
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className=" p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/10 hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 transform group relative overflow-hidden"
                >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-semibold mb-2 group-hover:translate-x-2 transition-transform duration-300">{exp.role}</p>
                  {exp.duration && <p className="text-white/60 text-sm mb-3 font-medium">{exp.duration}</p>}
                  <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-24 px-4 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl opacity-20" />
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className=" text-4xl md:text-5xl font-black text-white text-center mb-20">
            Professional Certifications
          </h2>

          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <div
                key={cert.id}
                className=" p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/10 hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 transform group relative overflow-hidden"
                style={{ animationDelay: `${0.15 + idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-accent font-semibold mb-3 group-hover:translate-x-2 transition-transform duration-300">{cert.role}</p>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
