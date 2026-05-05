export const siteConfig = {
  name: "Ekai Global",
  legalName: "Ekai Global",
  siteUrl: "https://ekaiglobal.com",
  description:
    "Ekai Global builds AI-native solutions that turn complexity into clarity for under-served industries.",
  contactEmail: "hello@ekaiglobal.com",
  contactPhone: "+1 (000) 000-0000",
  address: "Remote-first",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    linkedin: "https://www.linkedin.com",
  },
  contactFormEndpoint: "https://formspree.io/f/example",
} as const;

export const services = [
  {
    title: "AI Product Advisory",
    description:
      "Translate business goals into practical AI roadmaps with measurable outcomes.",
  },
  {
    title: "Workflow Automation",
    description:
      "Replace repetitive operations with robust AI-assisted automations.",
  },
  {
    title: "Custom AI Solutions",
    description:
      "Design and launch tailored AI systems for your industry and constraints.",
  },
  {
    title: "Data Intelligence",
    description:
      "Create analytics and insight pipelines that support faster decisions.",
  },
] as const;
