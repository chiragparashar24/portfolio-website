import { skills } from '@/data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="animate-slide-up text-4xl md:text-5xl font-black text-white text-center mb-20">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.id}
              className="animate-slide-up p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/10 hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 transform group"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-white mb-6 group-hover:text-accent transition-colors">{skill.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white/5 text-white/80 rounded-full text-sm font-medium border border-white/10 hover:border-accent hover:bg-accent/20 hover:text-accent hover:scale-110 transition-all duration-200 transform"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
