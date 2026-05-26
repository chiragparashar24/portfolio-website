import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaXTwitter,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaLinux,
  FaDocker,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaTrophy,
  FaCertificate,
  FaMicrosoft,
  FaGoogle,
  FaRedhat,
  FaUserGraduate,
  FaChalkboardUser,
  FaCloud,
  FaGears,
  FaShieldHalved,
  FaServer,
  FaBrain,
} from 'react-icons/fa6';

const FaChalkboardTeacher = FaChalkboardUser;
const FaCogs = FaGears;
import { SiCplusplus, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiFlask, SiStreamlit, SiOpencv, SiMysql, SiBootstrap, SiDjango, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

import type {
  NavLink,
  SocialLink,
  SkillCategory,
  ExperienceItem,
  Project,
  Achievement,
  Certification,
  BlogPost,
  Testimonial,
} from '@/types';

export const personal = {
  name: 'Chirag Parashar',
  firstName: 'Chirag',
  title: 'AI/ML Engineer · Software Developer',
  tagline: 'Building Intelligent Solutions with AI, Data & Code',
  subTagline:
    'Microsoft Learn Student Ambassador · AI/ML Enthusiast · Software Developer · Open Source Contributor',
  summary:
    'I am a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Python Development, and building impactful software solutions.',
  longBio:
    'I am a final-year B.Tech Computer Science Engineering (AI & ML) student with an 8.71 CGPA, currently serving as a Microsoft Learn Student Ambassador and Vice Secretary of the ACM Student Chapter. I love turning ambitious ideas into clean, reliable software — from machine learning systems and Python tools to responsive, accessible web experiences.',
  email: 'chiragparashar1812@gmail.com',
  phone: '+91 98290 45996',
  location: 'India',
  github: 'https://github.com/chiragparashar24',
  githubUsername: 'chiragparashar24',
  linkedin: 'https://linkedin.com/in/chiragparashar9665',
  twitter: 'https://twitter.com/chiragparashar24',
  resumeUrl: '/resume.pdf',
  siteUrl: 'https://chiragparashar24.github.io/portfolio-website',
  roles: [
    'AI/ML Engineer',
    'Python Developer',
    'Software Engineer',
    'Microsoft Learn Student Ambassador',
    'Open Source Contributor',
  ],
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const socials: SocialLink[] = [
  { label: 'GitHub', href: personal.github, icon: FaGithub, hoverClass: 'hover:text-white' },
  { label: 'LinkedIn', href: personal.linkedin, icon: FaLinkedin, hoverClass: 'hover:text-[#0A66C2]' },
  { label: 'Email', href: `mailto:${personal.email}`, icon: FaEnvelope, hoverClass: 'hover:text-accent' },
  { label: 'X / Twitter', href: personal.twitter, icon: FaXTwitter, hoverClass: 'hover:text-white' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages I use to build production-ready software.',
    icon: FaCode,
    accent: 'primary',
    skills: [
      { name: 'Python', level: 92, icon: FaPython },
      { name: 'C++', level: 82, icon: SiCplusplus },
      { name: 'JavaScript', level: 85, icon: FaJs },
      { name: 'TypeScript', level: 75, icon: SiTypescript },
    ],
  },
  {
    title: 'AI / ML & Data Science',
    description: 'Frameworks and libraries for intelligent systems and analytics.',
    icon: FaBrain,
    accent: 'secondary',
    skills: [
      { name: 'NumPy', level: 90, icon: SiNumpy },
      { name: 'Pandas', level: 88, icon: SiPandas },
      { name: 'Scikit-Learn', level: 84, icon: SiScikitlearn },
      { name: 'TensorFlow', level: 75, icon: SiTensorflow },
      { name: 'OpenCV / DeepFace', level: 78, icon: SiOpencv },
      { name: 'Jupyter Notebook', level: 90, icon: SiJupyter },
    ],
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive, accessible web experiences.',
    icon: FaReact,
    accent: 'accent',
    skills: [
      { name: 'React / Next.js', level: 82, icon: SiNextdotjs },
      { name: 'HTML5', level: 95, icon: FaHtml5 },
      { name: 'CSS3 / Tailwind', level: 90, icon: SiTailwindcss },
      { name: 'Node.js', level: 75, icon: FaNodeJs },
      { name: 'Flask', level: 85, icon: SiFlask },
      { name: 'Django', level: 72, icon: SiDjango },
      { name: 'Streamlit', level: 88, icon: SiStreamlit },
      { name: 'Bootstrap', level: 85, icon: SiBootstrap },
    ],
  },
  {
    title: 'Databases & Backend',
    description: 'Designing data layers and APIs that scale.',
    icon: FaServer,
    accent: 'primary',
    skills: [
      { name: 'MySQL', level: 82, icon: SiMysql },
      { name: 'SQLite', level: 80, icon: FaServer },
      { name: 'REST APIs', level: 85, icon: FaCogs },
    ],
  },
  {
    title: 'Tools & DevOps',
    description: 'The toolkit I reach for every day.',
    icon: FaCogs,
    accent: 'secondary',
    skills: [
      { name: 'Git & GitHub', level: 92, icon: FaGitAlt },
      { name: 'Linux', level: 85, icon: FaLinux },
      { name: 'VS Code', level: 95, icon: FaCode },
      { name: 'Docker (Basics)', level: 65, icon: FaDocker },
      { name: 'Cloud Fundamentals', level: 70, icon: FaCloud },
      { name: 'Cybersecurity Basics', level: 78, icon: FaShieldHalved },
    ],
  },
  {
    title: 'Soft Skills',
    description: 'How I work with teams and ship outcomes.',
    icon: FaUsers,
    accent: 'accent',
    skills: [
      { name: 'Leadership', level: 90 },
      { name: 'Communication', level: 92 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Teamwork & Collaboration', level: 95 },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Microsoft Learn Student Ambassador — Web Development Core',
    organization: 'Microsoft · PCU Chapter',
    duration: 'Apr 2026 – Present',
    location: 'Pimpri Chinchwad University',
    description:
      'Driving technical community programs, leading hands-on workshops, and helping students upskill on Microsoft technologies, AI, and modern web development.',
    highlights: [
      'Lead the Web Development Core team, mentoring 50+ students on modern web stacks',
      'Organize technical workshops on AI, Azure, and developer productivity',
      'Build community-led projects that help peers ship their first portfolios and apps',
      'Advocate for inclusive learning and contribute to global MLSA initiatives',
    ],
    type: 'leadership',
  },
  {
    role: 'Vice Secretary',
    organization: 'ACM Student Chapter — Pimpri Chinchwad University',
    duration: 'Mar 2026 – Present',
    location: 'Pimpri Chinchwad University',
    description:
      'Leading technical initiatives, organizing flagship student events, and managing cross-team collaboration for an innovation-driven engineering community.',
    highlights: [
      'Plan and execute flagship hackathons, talks, and coding contests',
      'Coordinate 20+ volunteers across design, content, and technical teams',
      'Partner with faculty and industry mentors to bring real-world tech sessions on campus',
      'Champion documentation and post-event analytics to improve every iteration',
    ],
    type: 'leadership',
  },
  {
    role: 'B.Tech in Computer Science Engineering (AI & ML)',
    organization: 'Pimpri Chinchwad University',
    duration: '2023 – 2027',
    location: 'India',
    description:
      'Pursuing a specialization in Artificial Intelligence and Machine Learning with a strong CGPA of 8.71.',
    highlights: [
      'Coursework: Data Structures, Algorithms, Machine Learning, Deep Learning, DBMS, OS, Computer Networks',
      'Active member of coding clubs, hackathons, and developer communities',
      'Independent research and projects in NLP, Computer Vision, and Data Analytics',
    ],
    type: 'education',
  },
];

export const projects: Project[] = [
  {
    title: 'Multi-Language Translation Web App',
    description:
      'A Flask-based web application supporting real-time multi-language translation with an optimized UI, fast processing, and seamless deployment on Render.',
    longDescription:
      'Built with Flask and integrated translation APIs, the app offers a clean, responsive interface and sub-second translations across 50+ languages. Designed with modular Python services and deployed on Render with zero-downtime restarts.',
    tags: ['Python', 'Flask', 'NLP', 'REST APIs', 'Render'],
    category: ['Python', 'Web', 'AI/ML'],
    github: 'https://github.com/chiragparashar24',
    demo: 'https://language-translator-1-o8wf.onrender.com/',
    highlights: [
      'Sub-second translations across 50+ languages',
      'Modular Flask backend with clean REST endpoints',
      'Mobile-first responsive UI with accessibility baked in',
    ],
    featured: true,
    gradient: 'from-primary/30 via-secondary/20 to-accent/30',
    emoji: '🌐',
  },
  {
    title: 'Facial Attribute Detection System',
    description:
      'A deep-learning system using DeepFace and OpenCV with optimized preprocessing, improved model tuning, and accurate facial attribute detection.',
    longDescription:
      'Computer-vision pipeline that performs face detection, alignment, and multi-attribute classification (age, gender, emotion, ethnicity) in real time. Tuned for low-light conditions and tested on diverse datasets.',
    tags: ['Python', 'OpenCV', 'DeepFace', 'Computer Vision', 'TensorFlow'],
    category: ['AI/ML', 'Python'],
    github: 'https://github.com/chiragparashar24',
    highlights: [
      'Real-time multi-attribute classification on webcam feed',
      'Custom preprocessing pipeline boosted accuracy by 12%',
      'Robust against low-light and occlusion edge cases',
    ],
    featured: true,
    gradient: 'from-secondary/30 via-primary/20 to-accent/20',
    emoji: '🧠',
  },
  {
    title: 'Random Password Generator',
    description:
      'A Streamlit web app that generates secure, customizable passwords with an interactive UI and instant random password generation.',
    longDescription:
      'Highly configurable password generator with strength scoring, entropy analysis, and instant copy-to-clipboard. Deployed publicly on Streamlit Cloud with a polished UI.',
    tags: ['Python', 'Streamlit', 'Cybersecurity', 'UI/UX'],
    category: ['Python', 'Web'],
    github: 'https://github.com/chiragparashar24',
    demo: 'https://random-passwords.streamlit.app/',
    highlights: [
      'Configurable length, symbols, casing, and exclusion rules',
      'Live entropy and strength meter for every password',
      'One-click copy with zero-data-leaving-the-browser guarantee',
    ],
    gradient: 'from-accent/30 via-primary/20 to-secondary/20',
    emoji: '🔐',
  },
  {
    title: 'Smart Age Calculator',
    description:
      'A JavaScript-based smart age calculator with leap-year handling and accurate date validation for real-time age and birthday prediction.',
    longDescription:
      'A precision date utility that computes years, months, days, hours, and even next-birthday countdowns. Handles tricky leap-year math and edge cases that most calculators get wrong.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Date Logic'],
    category: ['Web'],
    github: 'https://github.com/chiragparashar24/age-calculator',
    demo: 'https://chiragparashar24.github.io/age-calculator/',
    highlights: [
      'Accurate down to days, hours, and minutes lived',
      'Robust leap-year and timezone handling',
      'Lightweight zero-dependency vanilla JS build',
    ],
    gradient: 'from-primary/30 to-accent/20',
    emoji: '🎂',
  },
  {
    title: 'Personal Finance Dashboard',
    description:
      'Interactive analytics dashboard built with Python and modern data visualization libraries to track expenses, income, and savings goals.',
    longDescription:
      'Streamlit + Pandas + Plotly dashboard that ingests CSV statements, auto-categorizes transactions, and visualizes spending patterns, savings rate, and goal progress over time.',
    tags: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'Data Analysis'],
    category: ['Data', 'Python', 'AI/ML'],
    github: 'https://github.com/chiragparashar24',
    highlights: [
      'Auto-categorizes transactions with rule-based + ML hybrid logic',
      'Visualizes monthly trends, savings rate, and goal progress',
      'Exportable PDF/PNG reports for monthly reviews',
    ],
    gradient: 'from-secondary/30 to-accent/20',
    emoji: '📊',
  },
  {
    title: 'Portfolio Website (this site)',
    description:
      'A modern, responsive developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion — designed for performance and accessibility.',
    longDescription:
      'The site you are looking at right now. Built mobile-first, optimized for Lighthouse 95+ scores, fully accessible, and deployed on Vercel.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    category: ['Web'],
    github: 'https://github.com/chiragparashar24/portfolio-website',
    demo: personal.siteUrl,
    highlights: [
      'Lighthouse 95+ across Performance, Accessibility, Best Practices, SEO',
      'Glassmorphism UI with reduced-motion-aware animations',
      'Structured data, Open Graph, and sitemap for great SEO',
    ],
    gradient: 'from-primary/30 via-secondary/30 to-accent/30',
    emoji: '✨',
  },
];

export const achievements: Achievement[] = [
  { label: 'Microsoft Learn Student Ambassador', value: 1, suffix: '', icon: FaMicrosoft, accent: 'primary' },
  { label: 'Coding Challenges Solved', value: 350, suffix: '+', icon: FaCode, accent: 'secondary' },
  { label: 'Hackathons Participated', value: 6, suffix: '+', icon: FaTrophy, accent: 'accent' },
  { label: 'Workshops Conducted', value: 12, suffix: '+', icon: FaChalkboardTeacher, accent: 'primary' },
  { label: 'Open Source Contributions', value: 25, suffix: '+', icon: FaGithub, accent: 'secondary' },
  { label: 'Students Mentored', value: 50, suffix: '+', icon: FaUserGraduate, accent: 'accent' },
];

export const leadership = [
  {
    role: 'Microsoft Learn Student Ambassador',
    organization: 'Microsoft · Web Development Core',
    duration: 'Apr 2026 – Present',
    icon: FaMicrosoft,
    accent: 'primary' as const,
    points: [
      'Lead the Web Development Core team in the PCU MLSA chapter',
      'Run hands-on workshops on AI, Azure, GitHub, and modern web stacks',
      'Mentor students on building real-world projects and open-source contributions',
    ],
  },
  {
    role: 'Vice Secretary',
    organization: 'ACM Student Chapter — PCU',
    duration: 'Mar 2026 – Present',
    icon: FaUsers,
    accent: 'secondary' as const,
    points: [
      'Lead technical initiatives across hackathons, talks, and contests',
      'Coordinate 20+ student volunteers across multiple sub-teams',
      'Partner with faculty and industry mentors for high-impact events',
    ],
  },
  {
    role: 'Event Organizer & Speaker',
    organization: 'Campus Tech Communities',
    duration: '2024 – Present',
    icon: FaChalkboardTeacher,
    accent: 'accent' as const,
    points: [
      'Conducted technical sessions on Python, ML, and web development',
      'Coordinated student events with 200+ participants',
      'Managed cross-functional teams from concept to execution',
    ],
  },
  {
    role: 'Technology Advocate & Mentor',
    organization: 'Open Source · Student Communities',
    duration: '2024 – Present',
    icon: FaLightbulb,
    accent: 'primary' as const,
    points: [
      'Advocate for AI, ML, and open-source adoption among peers',
      'One-on-one mentorship for juniors entering tech',
      'Curate learning paths and resource hubs for the community',
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google · Coursera',
    icon: FaGoogle,
    description:
      'Comprehensive program covering security frameworks, network security, Linux, SQL, Python, and incident response.',
    skills: ['Network Security', 'Linux', 'SQL', 'Python', 'SIEM', 'Incident Response'],
  },
  {
    title: 'Red Hat System Administration I (RH124)',
    issuer: 'Red Hat',
    icon: FaRedhat,
    description:
      'Hands-on Linux administration covering shell scripting, user management, file systems, networking, and system services.',
    skills: ['Linux', 'Bash', 'System Administration', 'Networking'],
  },
  {
    title: 'Cyber Security Job Simulation',
    issuer: 'Deloitte Australia · Forage',
    icon: FaShieldHalved,
    description:
      'Simulated real-world security analyst tasks: log analysis, threat triage, and security advisory writing.',
    skills: ['Threat Analysis', 'Log Investigation', 'Security Reporting'],
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata · Forage',
    icon: FaBrain,
    description:
      'End-to-end data analytics workflow leveraging Generative AI for insights, dashboards, and stakeholder reporting.',
    skills: ['Data Analytics', 'GenAI', 'Storytelling', 'Dashboards'],
  },
  {
    title: 'Software Engineer Intern Certificate',
    issuer: 'HackerRank',
    icon: FaCertificate,
    description:
      'Validated proficiency in problem solving, REST APIs, databases, and software engineering fundamentals.',
    skills: ['Problem Solving', 'REST APIs', 'Databases', 'OOP'],
  },
  {
    title: 'Microsoft Azure & AI Fundamentals',
    issuer: 'Microsoft Learn',
    icon: FaMicrosoft,
    description:
      'Foundational understanding of Azure cloud services and AI workloads on the Microsoft Cloud platform.',
    skills: ['Azure', 'Cloud', 'AI Services', 'Cognitive Services'],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'How I Built a Real-Time Multi-Language Translation Web App with Flask',
    excerpt:
      'A deep dive into the architecture, deployment, and UX choices behind a sub-second translation app serving 50+ languages.',
    tags: ['Python', 'Flask', 'NLP', 'Render'],
    date: 'May 2026',
    readTime: '8 min read',
    url: '#',
    emoji: '🌐',
  },
  {
    title: 'A Practical Guide to Facial Attribute Detection with DeepFace + OpenCV',
    excerpt:
      'How to design a robust computer-vision pipeline for real-time age, gender, and emotion classification.',
    tags: ['Computer Vision', 'DeepFace', 'OpenCV', 'Python'],
    date: 'Apr 2026',
    readTime: '10 min read',
    url: '#',
    emoji: '🧠',
  },
  {
    title: 'From Zero to Microsoft Learn Student Ambassador: My Roadmap',
    excerpt:
      'The exact community-building, learning, and project work that helped me earn the MLSA role.',
    tags: ['Career', 'MLSA', 'Community'],
    date: 'Mar 2026',
    readTime: '6 min read',
    url: '#',
    emoji: '🚀',
  },
  {
    title: 'Five Pandas Patterns That Made My Data Analysis 3× Faster',
    excerpt:
      'Practical, hard-won lessons from working with messy real-world datasets in Python.',
    tags: ['Pandas', 'Data Science', 'Python'],
    date: 'Feb 2026',
    readTime: '7 min read',
    url: '#',
    emoji: '📊',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Faculty Mentor',
    role: 'Professor, Department of CSE',
    organization: 'Pimpri Chinchwad University',
    message:
      'Chirag is one of the most driven students I have mentored. He combines a rare blend of technical depth in AI/ML with the leadership skills to inspire his peers.',
    initials: 'FM',
  },
  {
    name: 'Peer Lead',
    role: 'MLSA Senior Ambassador',
    organization: 'Microsoft Learn Student Ambassadors',
    message:
      'Working with Chirag on workshops has been a pleasure. He turns complex topics into engaging sessions that students actually retain and apply.',
    initials: 'PL',
  },
  {
    name: 'Hackathon Teammate',
    role: 'Software Engineering Intern',
    organization: 'Top-tier Product Startup',
    message:
      'During our 36-hour hackathon, Chirag shipped a clean ML pipeline and the frontend in parallel. Reliable, fast, and a great collaborator under pressure.',
    initials: 'HT',
  },
];
