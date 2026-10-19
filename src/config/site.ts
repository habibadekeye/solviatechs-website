export interface SocialLink {
  label: string;
  href: string;
}

export const site = {
  brand: 'Solvia Technologies',
  legalName: 'Solvia Systems & Innovations Company Limited',
  location: 'Nigeria',
  url: 'https://www.solviatechs.com',
  tagline: 'Software systems for performance, compliance and operational control.',
  positioning:
    'Solvia Technologies builds software systems that help organizations in complex and regulated industries manage performance, compliance, risk and operational data.',
  flagshipProduct: 'SafeOps HSE',
  contact: {
    email: 'info@solviatechs.com',
    phone: '+234915378455',
    phoneDisplay: '+234 915 378 455',
  },
  // Only actual Solvia social accounts belong here. Empty until provided.
  socials: [] as SocialLink[],
  nav: [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Products', path: '/products' },
    { label: 'Industries', path: '/industries' },
    { label: 'About', path: '/about' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' },
  ],
};

export const industries = [
  {
    slug: 'oil-gas',
    name: 'Oil & Gas & Energy',
    shortDescription:
      'HSE, compliance, operational performance and field management systems for complex energy environments.',
  },
  {
    slug: 'construction',
    name: 'Construction & Infrastructure',
    shortDescription:
      'Safety management, inspections and multi-site compliance for construction and infrastructure projects.',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    shortDescription:
      'Integrated HSE, audit and performance management for plants, production lines and industrial facilities.',
  },
  {
    slug: 'mining',
    name: 'Mining & Extractive Industries',
    shortDescription:
      'Incident, risk and permit-to-work management for remote, high-risk extractive operations.',
  },
];

export const interests = [
  'SafeOps HSE',
  'Custom Software',
  'Performance Analytics',
  'Compliance & Governance',
  'Other',
] as const;
