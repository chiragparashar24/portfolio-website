'use client';

import { useEffect, useState } from 'react';
import { FaGithub, FaCodeBranch, FaUsers, FaStar, FaCode } from 'react-icons/fa6';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { personal } from '@/lib/data';

interface GithubStats {
  repos: number;
  followers: number;
  following: number;
  stars: number;
  loaded: boolean;
}

export function GithubStats() {
  const [stats, setStats] = useState<GithubStats>({
    repos: 30,
    followers: 50,
    following: 25,
    stars: 20,
    loaded: false,
  });

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const userRes = await fetch(
          `https://api.github.com/users/${personal.githubUsername}`,
          { cache: 'force-cache' }
        );
        if (!userRes.ok) throw new Error('user fetch failed');
        const user = (await userRes.json()) as {
          public_repos: number;
          followers: number;
          following: number;
        };

        const reposRes = await fetch(
          `https://api.github.com/users/${personal.githubUsername}/repos?per_page=100&sort=updated`,
          { cache: 'force-cache' }
        );
        const repos = reposRes.ok
          ? ((await reposRes.json()) as Array<{ stargazers_count: number }>)
          : [];
        const stars = repos.reduce((acc, r) => acc + (r.stargazers_count ?? 0), 0);

        if (!cancelled) {
          setStats({
            repos: user.public_repos ?? 0,
            followers: user.followers ?? 0,
            following: user.following ?? 0,
            stars,
            loaded: true,
          });
        }
      } catch {
        if (!cancelled) setStats((s) => ({ ...s, loaded: true }));
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const blocks = [
    { label: 'Public Repositories', value: stats.repos, icon: FaCodeBranch, accent: 'text-primary' },
    { label: 'Followers', value: stats.followers, icon: FaUsers, accent: 'text-secondary-300' },
    { label: 'Following', value: stats.following, icon: FaUsers, accent: 'text-accent' },
    { label: 'Stars Earned', value: stats.stars, icon: FaStar, accent: 'text-primary' },
  ];

  return (
    <Section id="github-stats">
      <SectionHeading
        eyebrow="Open Source"
        title="My GitHub at a glance"
        description="Live stats fetched directly from the GitHub API."
        id="github-heading"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <ScrollReveal>
          <GlassCard className="h-full">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-slate-100">
                <FaGithub aria-hidden className="text-2xl" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-slate-100">
                  @{personal.githubUsername}
                </p>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  github.com/{personal.githubUsername}
                </a>
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-4">
              {blocks.map((b) => {
                const Icon = b.icon;
                return (
                  <li
                    key={b.label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <Icon aria-hidden className={`text-lg ${b.accent}`} />
                    <p className={`mt-2 font-display text-2xl font-bold ${b.accent}`}>
                      <AnimatedCounter to={b.value} />+
                    </p>
                    <p className="mt-1 text-xs text-slate-400">{b.label}</p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="flex items-center gap-2 text-xs text-slate-400">
                <FaCode aria-hidden className="text-accent" />
                Most-used languages: Python, JavaScript, TypeScript, HTML/CSS
              </p>
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <GlassCard className="h-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Contribution graph
            </p>
            <div className="mt-3 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://ghchart.rshah.org/00D4FF/${personal.githubUsername}`}
                alt={`${personal.name} GitHub contribution graph`}
                loading="lazy"
                className="w-full"
              />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-slate-500">
              GitHub stats
            </p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${personal.githubUsername}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=11182700&title_color=00D4FF&icon_color=7C3AED&text_color=cbd5e1`}
                alt={`${personal.name} GitHub stats`}
                loading="lazy"
                className="w-full rounded-xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${personal.githubUsername}&layout=compact&theme=tokyonight&hide_border=true&bg_color=11182700&title_color=00D4FF&text_color=cbd5e1`}
                alt={`${personal.name} most-used languages`}
                loading="lazy"
                className="w-full rounded-xl"
              />
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </Section>
  );
}
