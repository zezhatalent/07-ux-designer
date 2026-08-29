import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Ines Rocha',
  role: 'UX / Product Designer',
  tagline: 'Designing experiences people love',
  photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  email: 'ines@designatelier.co',
  phone: '+55 11 99887 6543',
  location: 'São Paulo, Brazil',
  languages: ['Portuguese', 'English', 'Spanish'],
  socials: [
    { label: 'Dribbble', href: 'https://dribbble.com' },
    { label: 'Behance', href: 'https://behance.net' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
  about: [
    'I am a product designer who crafts digital experiences that feel effortless. Over 6 years I have shipped design for web and mobile products used by millions, always grounding aesthetics in research and usability.',
    'My process moves from wireframe to polished interface in one continuous thread — validating decisions with users and refining details until the whole thing just clicks. User research is my compass and accessibility my baseline, so every design works for the people it is made for.',
  ],
  services: [
    { title: 'UX Research', desc: 'User interviews, usability testing and journey mapping that uncover what people actually need.', icon: '🔍' },
    { title: 'Wireframing', desc: 'Low to high-fidelity wireframes that map flows and information architecture before pixels get involved.', icon: '📐' },
    { title: 'Prototyping', desc: 'Interactive, clickable prototypes that let teams and users feel the product before it is built.', icon: '🖱️' },
    { title: 'UI Design', desc: 'Polished, on-brand interfaces crafted with attention to spacing, type and tonal consistency.', icon: '🎨' },
    { title: 'Design Systems', desc: 'Token-driven component libraries that keep product teams fast, consistent and scalable.', icon: '🧩' },
    { title: 'Usability Testing', desc: 'Moderated and unmoderated tests that validate flows and surface friction before launch.', icon: '🧪' },
  ],
  skills: [
    { name: 'User Research', level: 94, note: 'Interviews & testing' },
    { name: 'Wireframing', level: 96, note: 'Flows & IA' },
    { name: 'Prototyping', level: 95, note: 'Interactive flows' },
    { name: 'UI Design', level: 93, note: 'Visual craft' },
    { name: 'Design Systems', level: 92, note: 'Tokens & docs' },
  ],
  skillsIcons: [
    { name: 'Figma', note: 'Design systems & prototypes' },
    { name: 'User Research', note: 'Interviews, testing' },
    { name: 'Prototyping', note: 'Interactive flows' },
    { name: 'Design Systems', note: 'Tokens & components' },
    { name: 'Interaction Design', note: 'Motion & micro-interactions' },
    { name: 'Accessibility', note: 'Inclusive by default' },
  ],
  stats: [
    { label: 'Products designed', value: 25, suffix: '+' },
    { label: 'Design systems built', value: 6, suffix: '' },
    { label: 'Usability tests', value: 150, suffix: '+' },
    { label: 'Conversion improvement', value: 30, suffix: '%' },
  ],
  experience: [
    {
      role: 'Senior Product Designer',
      company: 'Momento',
      period: '2021 — Present',
      desc: 'Lead design for a B2B SaaS platform. Rebuilt the design system, cutting design-to-dev time 40% and lifting onboarding conversion 22%.',
    },
    {
      role: 'Product Designer',
      company: 'Flowly',
      period: '2019 — 2021',
      desc: 'Owned end-to-end design for a mobile wellness app, growing it to 1M downloads with a 4.7-star rating.',
    },
    {
      role: 'UI Designer',
      company: 'PixelHaus',
      period: '2018 — 2019',
      desc: 'Delivered responsive web designs for e-commerce and marketing sites for a diverse client roster.',
    },
  ],
  education: [
    {
      degree: 'B.Des – Communication Design',
      school: 'Instituto Europeo di Design, São Paulo',
      period: '2014 — 2018',
      desc: 'Focused on interaction design, visual systems and user-centred methodology.',
    },
    {
      degree: 'UX Design Specialisation',
      school: 'California Institute of the Arts (online)',
      period: '2019 — 2020',
      desc: 'Formal grounding in research, prototyping and usability evaluation.',
    },
  ],
  certificates: [
    'Google UX Design Professional',
    'Interaction Design Foundation Certificate',
    'Figma Certified Professional',
    'Nielsen Norman Group UX Certificate',
  ],
  awards: [
    { title: 'Awwwards — Site of the Day', detail: 'Honoured work for a flagship redesign judged on craft, interaction and motion.', year: '2023' },
    { title: 'IF Design Talent', detail: 'Recognised for an innovative approach to inclusive, accessible product design.', year: '2022' },
    { title: 'UXPA Design Award', detail: 'Awarded for a mobile fintech app with outstanding on-boarding experience.', year: '2021' },
  ],
  cards: [
    {
      title: 'SaaS Onboarding Redesign',
      desc: 'Transformed a confusing onboarding into a guided flow. Activation rose 22% and support tickets dropped 30%.',
      stack: 'Figma, Research, Testing',
      metric: '+22% activation',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    },
    {
      title: 'Fintech App',
      desc: 'Designed a mobile banking experience that passed WCAG AA while staying delightful and on-brand.',
      stack: 'Design System, iOS, Android',
      metric: '4.7 rating',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    },
    {
      title: 'Design System',
      desc: 'Crafted a token-driven design system with 120+ components, powering 12 product teams.',
      stack: 'Tokens, Docs, Figma',
      metric: '12 teams',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'Momento Onboarding Flows',
      desc: 'A guided, step-by-step onboarding that cut time-to-value and lifted activation 22%.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop',
      tags: ['SaaS', 'Onboarding'],
    },
    {
      title: 'Bloom Fintech App',
      desc: 'An accessible mobile banking app with a delightful, on-brand visual system.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=500&fit=crop',
      tags: ['Mobile', 'Fintech'],
    },
    {
      title: 'Atlas Design System',
      desc: 'A token-driven component library with 120+ building blocks and full documentation.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop',
      tags: ['Design System', 'Docs'],
    },
  ],
  hobbies: [
    { name: 'Sketching', note: 'Product doodles & illustration', icon: '✏️' },
    { name: 'Photography', note: 'Street & portrait work', icon: '📷' },
    { name: 'Typography', note: 'Type specimen collecting', icon: '🔤' },
    { name: 'Ceramics', note: 'Hands-on craft on weekends', icon: '🏺' },
  ],
  testimonials: [
    {
      quote:
        'Ines designs with intent. Every pixel has a reason, and her prototypes are so clear our engineers build them without questions.',
      author: 'Felipe Costa',
      role: 'Head of Product, Momento',
    },
    {
      quote:
        'She turns abstract feedback into something you immediately love. A designer who truly listens.',
      author: 'Marta Duarte',
      role: 'CEO, Flowly',
    },
  ],
  footnote: '© Ines Rocha · React, TypeScript & Framer Motion',
  ticker: ['UX Research', 'Wireframing', 'Prototyping', 'UI Design', 'Design Systems', 'Usability Testing'],

  blogPosts: [
    { title: 'Design Systems: Building for Scale', excerpt: 'Creating consistent, reusable design components that grow with your product.', date: '2024-01-09', tags: ['Design Systems', 'UI'], readTime: '11 min' },
    { title: 'Accessibility in Modern UI Design', excerpt: 'How to design inclusive interfaces that work for everyone.', date: '2023-12-25', tags: ['Accessibility', 'Inclusive Design'], readTime: '8 min' },
  ],

  faqItems: [
    { question: 'What design tools do you use?', answer: 'I primarily use Figma for UI design, along with Adobe Creative Suite for graphics and Principle for prototyping interactions.' },
    { question: 'How do you approach user research?', answer: 'I conduct user interviews, surveys, usability testing, and analyze behavioral data to inform design decisions.' },
    { question: 'What is your design process?', answer: 'I follow a human-centered design approach: empathize, define, ideate, prototype, and test iteratively.' },
    { question: 'How do you measure design success?', answer: 'I track metrics like task completion rates, user satisfaction scores, time-on-task, and conversion rates.' },
  ],

  skillsDetailed: [
    { category: 'Design Tools', items: [
      { name: 'Figma', level: 95, note: 'Expert' },
      { name: 'Adobe XD', level: 88 },
      { name: 'Sketch', level: 82 },
    ]},
    { category: 'UX Skills', items: [
      { name: 'User Research', level: 90 },
      { name: 'Prototyping', level: 92 },
      { name: 'Interaction Design', level: 88 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'ux.designer@email.com', icon: '📧', href: 'mailto:ux.designer@email.com' },
    { type: 'Dribbble', value: 'dribbble.com/uxdesigner', icon: '🎨', href: 'https://dribbble.com' },
  ],
};
