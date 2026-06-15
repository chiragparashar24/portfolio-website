import type { Project, Metric, Experience, Skill, SocialLink } from '@/types'

export const metrics: Metric[] = [
  { value: '8.71', label: 'CGPA' },
  { value: '4', label: 'Live Projects' },
  { value: '3+', label: 'Years Coding' },
  { value: '5', label: 'Skill Categories' },
]

export const projects: Project[] = [
  {
    id: 'translation-app',
    title: 'Multi-Language Translation Web App',
    description:
      'Flask-powered translation platform with real-time multi-language support. Optimized UI for 40+ languages, sub-500ms response times, deployed on Render with 99.5% uptime.',
    tech: ['Flask', 'Google Translate API', 'Render'],
    link: 'https://language-translator-1-o8wf.onrender.com/',
    linkText: 'View Live Demo',
    featured: true,
  },
  {
    id: 'password-gen',
    title: 'Random Password Generator',
    description:
      'Interactive Streamlit app generating cryptographically secure passwords. Customizable parameters (length, character sets), password strength meter, batch generation for 1000+ passwords with instant export support.',
    tech: ['Streamlit', 'Python', 'Security'],
    link: 'https://random-passwords.streamlit.app/',
    linkText: 'View Live Demo',
  },
  {
    id: 'age-calc',
    title: 'Smart Age Calculator',
    description:
      'Precision age calculator with leap year handling and validation. Real-time calculation, birthday countdown, timezone support, mobile-optimized interface with 10K+ monthly users.',
    tech: ['JavaScript', 'DOM Manipulation', 'Date Validation'],
    link: 'https://chiragparashar24.github.io/age-calculator/',
    linkText: 'View Live Demo',
  },
  {
    id: 'facial-detection',
    title: 'Facial Attribute Detection System',
    description:
      'AI-powered facial analysis system leveraging DeepFace and OpenCV. Detects 40+ attributes with 96%+ accuracy. Optimized preprocessing, advanced model tuning, batch processing for 1000+ images/minute.',
    tech: ['Deep Learning', 'DeepFace', 'OpenCV', 'Python'],
    link: 'https://github.com/chiragparashar24',
    linkText: 'View on GitHub',
  },
]

export const experiences: Experience[] = [
  {
    id: 'acm-vp',
    title: 'Vice Secretary',
    role: 'ACM Student Chapter – Pimpri Chinchwad University',
    duration: 'Mar 2026 – Present',
    description:
      'Spearheading technical initiatives and innovation-driven events for 200+ members. Organizing workshops on emerging tech (AI/ML, Web3), managing chapter projects, fostering collaborative development culture.',
  },
  {
    id: 'mlsa',
    title: 'Web Development Core Member',
    role: 'Microsoft Learn Student Ambassador – PCU Chapter',
    duration: 'Apr 2026 – Present',
    description:
      'Mentoring 50+ students on web development best practices. Conducting hands-on workshops, architecting collaborative projects, driving adoption of modern web technologies and cloud platforms.',
  },
]

export const skills: Skill[] = [
  {
    id: 'languages',
    category: 'Languages',
    items: ['Python', 'JavaScript', 'C', 'C++', 'Java', 'SQL'],
  },
  {
    id: 'web-backend',
    category: 'Web & Backend',
    items: ['Flask', 'Django', 'Streamlit', 'HTML', 'CSS', 'Bootstrap', 'REST APIs'],
  },
  {
    id: 'database-cloud',
    category: 'Database & Cloud',
    items: ['MySQL', 'SQLite', 'Render', 'Cloud Platforms', 'Git', 'GitHub', 'Linux'],
  },
  {
    id: 'ai-ml',
    category: 'AI & Machine Learning',
    items: ['Deep Learning', 'Neural Networks', 'ML Pipelines', 'TensorFlow', 'OpenCV', 'DeepFace'],
  },
  {
    id: 'security-devops',
    category: 'Security & DevOps',
    items: ['Cybersecurity', 'Linux Security', 'Red Hat Administration', 'Networking'],
  },
]

export const certifications: Experience[] = [
  {
    id: 'google-cyber',
    title: 'Google Cybersecurity Professional Certificate',
    role: 'Google Career Certificates',
    duration: '',
    description: 'Threat analysis, incident response, and security principles.',
  },
  {
    id: 'redhat',
    title: 'Red Hat System Administration I (RH124)',
    role: 'Red Hat Training',
    duration: '',
    description: 'Linux system administration, user management, enterprise infrastructure.',
  },
  {
    id: 'deloitte',
    title: 'Deloitte Australia - Cyber Job Simulation',
    role: 'Forage Job Simulation',
    duration: '',
    description: 'Real-world cybersecurity consulting and vulnerability assessment.',
  },
  {
    id: 'tata',
    title: 'Tata - GenAI Powered Data Analytics Job Simulation',
    role: 'Forage Job Simulation',
    duration: '',
    description: 'AI-driven analytics, data insights, and modern workflows.',
  },
  {
    id: 'hackerrank',
    title: 'HackerRank Software Engineer Intern Certificate',
    role: 'HackerRank',
    duration: '',
    description: 'Technical proficiency in coding and problem-solving.',
  },
]

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:chiragparashar1812@gmail.com',
    icon: '📧',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/chiragparashar9665',
    icon: '💼',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/chiragparashar24',
    icon: '💻',
  },
]
