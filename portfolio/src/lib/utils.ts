export function cn(...inputs: Array<string | undefined | null | false>): string {
  return inputs.filter(Boolean).join(' ');
}

export const accentMap = {
  primary: {
    text: 'text-primary',
    bg: 'bg-primary',
    bgSoft: 'bg-primary/10',
    border: 'border-primary/40',
    glow: 'shadow-glow',
    gradient: 'from-primary to-secondary',
    ring: 'ring-primary/30',
  },
  secondary: {
    text: 'text-secondary-300',
    bg: 'bg-secondary',
    bgSoft: 'bg-secondary/10',
    border: 'border-secondary/40',
    glow: 'shadow-glow-purple',
    gradient: 'from-secondary to-primary',
    ring: 'ring-secondary/30',
  },
  accent: {
    text: 'text-accent',
    bg: 'bg-accent',
    bgSoft: 'bg-accent/10',
    border: 'border-accent/40',
    glow: 'shadow-glow-accent',
    gradient: 'from-accent to-primary',
    ring: 'ring-accent/30',
  },
} as const;

export type AccentKey = keyof typeof accentMap;
