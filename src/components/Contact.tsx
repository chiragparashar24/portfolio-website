import { socialLinks } from '@/data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="animate-slide-up text-4xl md:text-5xl font-black text-white mb-6">
          Get In Touch
        </h2>

        <p className="animate-slide-up text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Whether you have a project idea, a collaboration opportunity, or just want to chat about tech, I'm always eager to connect and explore possibilities.
        </p>

        <div className="animate-slide-up flex gap-6 justify-center flex-wrap">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 hover:border-white/40 hover:scale-110 transition-all transform backdrop-blur-sm"
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
