import { Bot, Building2, Code2, Dumbbell, Paintbrush, Search, Sparkles, Store, Target, Users, Wrench } from 'lucide-react';

export const navItems = [
  ['Services', 'services'],
  ['Process', 'process'],
  ['Work', 'portfolio'],
  ['FAQ', 'faq'],
  ['Contact', 'contact'],
];

export const services = [
  {
    icon: Paintbrush,
    title: 'Custom Website Design',
    description: 'Premium websites built around your brand, customer journey, and revenue goals.',
    benefits: ['Credibility from the first click', 'Conversion-focused layouts', 'Distinctive visual identity'],
  },
  {
    icon: Code2,
    title: 'Website Redesigns',
    description: 'Turn an outdated site into a sharper sales asset that feels modern on every device.',
    benefits: ['Cleaner messaging', 'Faster pages', 'Higher trust and retention'],
  },
  {
    icon: Search,
    title: 'Local SEO Optimization',
    description: 'Help nearby customers find you when they are ready to call, book, visit, or buy.',
    benefits: ['Search-ready structure', 'Local intent keywords', 'Better visibility'],
  },
  {
    icon: Target,
    title: 'Landing Pages',
    description: 'Focused pages for offers, ads, campaigns, and service launches that need action.',
    benefits: ['Clear calls to action', 'Lead capture built in', 'Campaign-ready tracking'],
  },
  {
    icon: Bot,
    title: 'Business Automation',
    description: 'Connect forms, follow-ups, booking flows, and notifications so fewer leads slip away.',
    benefits: ['Faster responses', 'Cleaner workflows', 'Less manual admin'],
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: 'Keep your website updated, protected, and performing after launch.',
    benefits: ['Ongoing support', 'Content updates', 'Performance monitoring'],
  },
];

export const processSteps = [
  ['Discovery Call', 'We learn your business, customers, offers, and what growth needs to look like.'],
  ['Strategy & Planning', 'We map pages, messaging, conversion points, and search opportunities.'],
  ['Design & Development', 'We craft the visual system, build responsive pages, and refine the experience.'],
  ['Launch & Growth', 'We publish, test, track, and keep improving toward leads, calls, and revenue.'],
];

export const portfolio = [
  {
    icon: Store,
    title: 'Restaurant Website',
    industry: 'Hospitality',
    metrics: '+42% online reservations',
    features: ['Menu-first mobile layout', 'Google Maps integration', 'Private event inquiry flow'],
  },
  {
    icon: Dumbbell,
    title: 'Fitness Gym Website',
    industry: 'Health & Fitness',
    metrics: '+31% trial signups',
    features: ['Class schedule section', 'Lead magnet landing page', 'Trainer profile pages'],
  },
  {
    icon: Building2,
    title: 'Construction Company Website',
    industry: 'Home Services',
    metrics: '+57% quote requests',
    features: ['Project gallery', 'Service-area SEO pages', 'Estimate request form'],
  },
  {
    icon: Users,
    title: 'Barber Shop Website',
    industry: 'Local Retail',
    metrics: '+24% bookings',
    features: ['Booking CTA system', 'Service pricing', 'Review-driven trust section'],
  },
  {
    icon: Sparkles,
    title: 'Photography Business Website',
    industry: 'Creative Services',
    metrics: '+38% package inquiries',
    features: ['Portfolio galleries', 'Package comparison', 'Inquiry qualification form'],
  },
];

export const testimonials = [
  {
    quote:
      'We went from relying on word of mouth to getting quote requests every week. The site finally makes us look as established as we are.',
    name: 'Marcus Hill',
    role: 'Owner, Hillstone Renovations',
  },
  {
    quote:
      'Our old site was slow and confusing. Shadow Web Digital rebuilt it around bookings, and the difference showed up in the first month.',
    name: 'Alana Brooks',
    role: 'Founder, CoreLine Fitness',
  },
  {
    quote:
      'They made the process easy and focused on what mattered: trust, calls, and customers. The website feels premium without losing our personality.',
    name: 'Javier Morales',
    role: 'Owner, Morales Barber Studio',
  },
];

export const faqs = [
  ['How long does a website take?', 'Most small business websites take 2 to 5 weeks depending on page count, content readiness, and feature complexity.'],
  ['How much does a website cost?', 'Pricing depends on scope, but every proposal is clear, fixed around outcomes, and matched to the revenue opportunity of the project.'],
  ['Will my website work on mobile?', 'Yes. Every site is designed mobile-first so customers can call, book, buy, or request a quote from any device.'],
  ['Can you redesign an existing website?', 'Absolutely. We can improve your current site structure, copy, performance, design foundation, and conversion flow.'],
  ['Do you provide hosting?', 'We can help set up reliable hosting and ongoing maintenance so your site stays fast, secure, and easy to update.'],
];
