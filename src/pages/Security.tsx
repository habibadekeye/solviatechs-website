import {
  ShieldCheck,
  KeyRound,
  Users,
  Database,
  Lock,
  ScrollText,
  HardDrive,
  UserCog,
} from 'lucide-react';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/ui/CTASection';

const practices = [
  {
    icon: KeyRound,
    title: 'Secure authentication',
    description:
      'Access to systems is authenticated. Credentials and sessions are managed through established, proven mechanisms rather than custom-built shortcuts.',
  },
  {
    icon: Users,
    title: 'Role-based access control',
    description:
      'Users see and do what their role requires. Permissions are structured around organizational roles — from field reporters to HSE managers to executives.',
  },
  {
    icon: Database,
    title: 'Data isolation',
    description:
      'Each organization\'s data is logically isolated, so information belonging to one customer is not visible to another.',
  },
  {
    icon: Lock,
    title: 'Encryption in transit and at rest',
    description:
      'Connections to our platforms are encrypted in transit using TLS, and underlying data stores are encrypted at rest on managed cloud infrastructure.',
  },
  {
    icon: ScrollText,
    title: 'Audit logging',
    description:
      'Significant actions are recorded, producing audit trails that support accountability, investigation and compliance reviews.',
  },
  {
    icon: HardDrive,
    title: 'Backup & recovery',
    description:
      'Data is backed up through managed infrastructure services, supporting recovery in the event of failure or loss.',
  },
  {
    icon: UserCog,
    title: 'Access management',
    description:
      'Access can be granted, adjusted and revoked as people join, move roles or leave — keeping permissions aligned with reality.',
  },
  {
    icon: ShieldCheck,
    title: 'Accountability by design',
    description:
      'Records carry ownership and history. Who raised it, who approved it, who closed it — traceability is built into workflows rather than added later.',
  },
];

export default function Security() {
  return (
    <>
      <Seo
        title="Security & Data Protection | Solvia Technologies"
        description="How Solvia Technologies approaches security and data protection: authentication, role-based access, data isolation, encryption, audit logging, backups and access management."
        path="/security"
      />

      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Security' }]}
        eyebrow="Security"
        title="Security & Data Protection"
        description="Solvia designs its software with security, access control, data protection and accountability in mind. This page describes the practices applied across the systems we build and operate."
      />

      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <ScrollReveal key={practice.title} delay={index * 60}>
                <div className="card-base card-hover p-6 h-full">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-blue-600 dark:text-[#3B82F6]" size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-2">{practice.title}</h3>
                  <p className="text-slate dark:text-gray-300 text-sm leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold gradient-text dark:text-white mb-4">
              Questions about security?
            </h2>
            <p className="text-slate dark:text-gray-300 leading-relaxed mb-6">
              If your organization has specific security requirements — hosting preferences, access models,
              data handling or review processes — we are happy to discuss them in detail during a demo or
              consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Discuss your security requirements."
        primaryLabel="Talk to Solvia"
        primaryTo="/contact"
        secondaryLabel="Request a Demo"
        secondaryTo="/contact"
      />
    </>
  );
}
