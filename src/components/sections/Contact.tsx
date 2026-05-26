'use client';

import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaLocationDot,
  FaPaperPlane,
  FaCircleCheck,
  FaCircleExclamation,
} from 'react-icons/fa6';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { personal } from '@/lib/data';
import { cn } from '@/lib/utils';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialState: FormState = { name: '', email: '', subject: '', message: '' };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function validate(values: FormState): FormErrors {
    const errs: FormErrors = {};
    if (!values.name.trim() || values.name.trim().length < 2)
      errs.name = 'Please enter your full name.';
    if (!values.email.trim() || !emailRe.test(values.email.trim()))
      errs.email = 'Please enter a valid email address.';
    if (!values.subject.trim() || values.subject.trim().length < 3)
      errs.subject = 'Subject must be at least 3 characters.';
    if (!values.message.trim() || values.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters.';
    return errs;
  }

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    try {
      // Compose mailto fallback so the form always succeeds without backend.
      const subject = encodeURIComponent(`[Portfolio] ${form.subject}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Recruiting, collaborating, or just want to chat about AI and software? My inbox is always open."
        id="contact-heading"
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ScrollReveal>
          <GlassCard hover={false}>
            <form onSubmit={handleSubmit} noValidate className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  id="name"
                  value={form.name}
                  onChange={(v) => handleChange('name', v)}
                  error={errors.name}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => handleChange('email', v)}
                  error={errors.email}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <Field
                label="Subject"
                id="subject"
                value={form.subject}
                onChange={(v) => handleChange('subject', v)}
                error={errors.subject}
                placeholder="What is this about?"
                required
              />

              <div>
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell me a bit about what you have in mind…"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={cn(
                    'mt-2 w-full resize-none rounded-xl border bg-white/[0.03] p-4 text-sm text-slate-200 placeholder:text-slate-500 transition-colors',
                    errors.message
                      ? 'border-red-500/60 focus:border-red-400'
                      : 'border-white/10 focus:border-primary/50'
                  )}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 flex items-center gap-1 text-xs text-red-400">
                    <FaCircleExclamation aria-hidden /> {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition-shadow hover:shadow-glow-lg disabled:opacity-60"
                >
                  <FaPaperPlane aria-hidden /> {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.span
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2 text-xs text-accent"
                    >
                      <FaCircleCheck aria-hidden /> Your email client just opened — thanks!
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2 text-xs text-red-400"
                    >
                      <FaCircleExclamation aria-hidden /> Something went wrong. Try again.
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <GlassCard className="h-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Or reach me directly
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <ContactRow
                icon={<FaEnvelope aria-hidden />}
                label="Email"
                value={personal.email}
                href={`mailto:${personal.email}`}
              />
              <ContactRow
                icon={<FaLinkedin aria-hidden />}
                label="LinkedIn"
                value="linkedin.com/in/chiragparashar9665"
                href={personal.linkedin}
              />
              <ContactRow
                icon={<FaGithub aria-hidden />}
                label="GitHub"
                value={`github.com/${personal.githubUsername}`}
                href={personal.github}
              />
              <ContactRow
                icon={<FaLocationDot aria-hidden />}
                label="Location"
                value={personal.location}
              />
            </ul>

            <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-4">
              <p className="text-xs uppercase tracking-widest text-accent">
                Currently
              </p>
              <p className="mt-1 text-sm text-slate-200">
                Open to <span className="font-semibold">SDE / AI-ML / Data Science internships</span> and
                summer 2027 full-time roles.
              </p>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <span className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors hover:border-primary/40">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-[11px] uppercase tracking-widest text-slate-500">
          {label}
        </span>
        <span className="text-sm text-slate-200">{value}</span>
      </span>
    </span>
  );
  return (
    <li>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

interface FieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
  autoComplete,
  required,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-widest text-slate-400">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'mt-2 h-11 w-full rounded-xl border bg-white/[0.03] px-4 text-sm text-slate-200 placeholder:text-slate-500 transition-colors',
          error
            ? 'border-red-500/60 focus:border-red-400'
            : 'border-white/10 focus:border-primary/50'
        )}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 flex items-center gap-1 text-xs text-red-400">
          <FaCircleExclamation aria-hidden /> {error}
        </p>
      )}
    </div>
  );
}
