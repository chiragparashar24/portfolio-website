'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FaArrowDown,
  FaDownload,
  FaEnvelope,
  FaCode,
  FaTerminal,
} from 'react-icons/fa6';
import { personal, socials } from '@/lib/data';
import { GradientMesh } from '@/components/effects/GradientMesh';
import { GradientLink } from '@/components/ui/GradientButton';

function useTyping(words: string[], typeSpeed = 70, pauseBetween = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? typeSpeed / 2 : typeSpeed;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), pauseBetween);
        return;
      }
      if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, pauseBetween]);

  return text;
}

export function Hero() {
  const typed = useTyping(personal.roles);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden"
    >
      <GradientMesh />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for internships
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.05] tracking-tight text-balance"
          >
            <span className="block text-slate-200">Hi, I'm </span>
            <span className="block gradient-text">{personal.name}.</span>
            <span className="mt-3 block text-slate-100">
              {personal.tagline}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 flex items-center gap-3 font-mono text-base sm:text-lg text-slate-300"
          >
            <span className="text-primary">
              <FaTerminal aria-hidden />
            </span>
            <span className="text-slate-400">role:</span>
            <span className="text-primary font-semibold">
              {typed}
              <span className="ml-0.5 inline-block w-[2px] h-5 align-middle bg-primary animate-blink" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-slate-400 text-pretty"
          >
            <span className="text-slate-200 font-semibold">{personal.subTagline}</span>
            <br />
            <span className="mt-2 block">{personal.summary}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <GradientLink href="#projects" icon={<FaCode />} size="lg">
              View Projects
            </GradientLink>
            <GradientLink
              href={personal.resumeUrl}
              variant="secondary"
              size="lg"
              icon={<FaDownload />}
              {...{ download: '' }}
            >
              Download Resume
            </GradientLink>
            <GradientLink href="#contact" variant="ghost" size="lg" icon={<FaEnvelope />}>
              Contact Me
            </GradientLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex items-center gap-4"
          >
            <span className="text-xs uppercase tracking-widest text-slate-500">
              Find me on
            </span>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-200 transition-all hover:border-primary/40 hover:text-primary hover:shadow-glow hover:-translate-y-0.5"
                  >
                    <Icon aria-hidden />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <HeroVisual />
      </div>

      <Link
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs uppercase tracking-[0.4em] text-slate-500 hover:text-primary transition-colors"
      >
        Scroll
        <FaArrowDown className="animate-bounce" aria-hidden />
      </Link>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-full max-w-md"
      aria-hidden
    >
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />

      <div className="glass-strong rounded-2xl p-5 shadow-glow border border-white/[0.08]">
        <div className="flex items-center gap-2 border-b border-white/5 pb-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">
            ~/chirag-parashar/intro.py
          </span>
        </div>

        <pre className="mt-4 overflow-x-auto font-mono text-[12.5px] leading-relaxed">
          <code>
            <span className="text-secondary-300">class</span>{' '}
            <span className="text-primary">Developer</span>:
            {'\n'}    <span className="text-secondary-300">def</span>{' '}
            <span className="text-accent">__init__</span>(<span className="text-slate-400">self</span>):
            {'\n'}        <span className="text-slate-400">self</span>.name ={' '}
            <span className="text-amber-300">"Chirag Parashar"</span>
            {'\n'}        <span className="text-slate-400">self</span>.role ={' '}
            <span className="text-amber-300">"AI/ML · Software"</span>
            {'\n'}        <span className="text-slate-400">self</span>.stack = [
            <span className="text-amber-300">"Python"</span>,{' '}
            <span className="text-amber-300">"TS"</span>,{' '}
            <span className="text-amber-300">"React"</span>]
            {'\n'}        <span className="text-slate-400">self</span>.fuel ={' '}
            <span className="text-amber-300">"☕ + curiosity"</span>
            {'\n'}
            {'\n'}    <span className="text-secondary-300">def</span>{' '}
            <span className="text-accent">build</span>(<span className="text-slate-400">self</span>, idea):
            {'\n'}        <span className="text-secondary-300">return</span>{' '}
            <span className="text-amber-300">f"</span>{`{idea}`}
            <span className="text-amber-300">  shipped"</span>
            {'\n'}
          </code>
        </pre>

        <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-3 text-xs text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span>build OK · 0 errors · 0 warnings</span>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-4 -top-6 hidden sm:flex items-center gap-2 glass rounded-2xl px-4 py-2 text-xs"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/20 text-primary">
          <FaCode aria-hidden />
        </span>
        <div>
          <p className="font-semibold text-slate-200">8.71 CGPA</p>
          <p className="text-[10px] text-slate-500">B.Tech CSE (AI & ML)</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 -bottom-6 hidden sm:flex items-center gap-2 glass rounded-2xl px-4 py-2 text-xs"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent/20 text-accent">
          <FaTerminal aria-hidden />
        </span>
        <div>
          <p className="font-semibold text-slate-200">Microsoft</p>
          <p className="text-[10px] text-slate-500">Learn Student Ambassador</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
