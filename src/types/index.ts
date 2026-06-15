export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  link: string
  linkText: string
  featured?: boolean
}

export interface Metric {
  value: string
  label: string
}

export interface Experience {
  id: string
  title: string
  role: string
  duration: string
  description: string
}

export interface Skill {
  id: string
  category: string
  items: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
