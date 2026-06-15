import { socialLinks } from '@/data/portfolio'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitted(true)
        e.currentTarget.reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="animate-slide-up text-4xl md:text-5xl font-black text-white text-center mb-20">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="animate-slide-up p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
          >
            <input type="hidden" name="access_key" value="d487ed1b-0ec8-4922-ab63-8bc6304dc1b9" />
            <input type="hidden" name="subject" value="New Portfolio Contact" />
            <input type="hidden" name="from_name" value="Chirag Portfolio" />

            <div className="space-y-4 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/50 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/50 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                required
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/50 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/50 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {submitted && (
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 text-green-300 rounded-lg text-center font-medium animate-fade-in">
                ✓ Message sent successfully!
              </div>
            )}
          </form>

          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('mailto') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all transform text-center font-bold text-white hover:text-accent hover:scale-105"
              >
                <span className="text-2xl mr-2">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
