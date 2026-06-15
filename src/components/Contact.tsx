import { useState } from 'react'
import { socialLinks } from '@/data/portfolio'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      const mailtoLink = `mailto:chiragparashar1812@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
      window.location.href = mailtoLink
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-center">
          Get In Touch
        </h2>

        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 text-center">
          Whether you have a project idea, a collaboration opportunity, or just want to chat about tech, I'm always eager to connect and explore possibilities.
        </p>

        {/* Contact Form */}
        <div className="mb-16 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 focus:border-accent focus:bg-white/15 text-white placeholder-white/50 font-medium transition-all outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 focus:border-accent focus:bg-white/15 text-white placeholder-white/50 font-medium transition-all outline-none"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 focus:border-accent focus:bg-white/15 text-white placeholder-white/50 font-medium transition-all outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all transform"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-center text-accent font-medium">
                ✅ Message sent! Opening email client...
              </p>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center flex-wrap">
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
