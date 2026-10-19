import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ShieldAlert,
  ClipboardCheck,
  FileCheck,
  GraduationCap,
  HardHat,
  BarChart3,
  TrendingUp,
  Leaf,
  FolderCheck,
  Package,
  Code2,
  RefreshCw,
  Fuel,
  Zap,
  Factory,
  Mountain,
  Building2,
  Compass,
  Cog,
  ShieldCheck,
  Layers,
  Lock,
  CheckCircle,
} from 'lucide-react';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import CTAButton from '../components/ui/CTAButton';
import ScreenshotFrame from '../components/ui/ScreenshotFrame';
import { CapabilityCard, IndustryCard } from '../components/ui/Cards';
import ContactForm from '../components/ContactForm';
import { site } from '../config/site';

const industryStrip = [
  { icon: Fuel, label: 'Oil & Gas' },
  { icon: Zap, label: 'Energy' },
  { icon: HardHat, label: 'Construction' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: Mountain, label: 'Mining' },
];

const capabilities = [
  {
    icon: Package,
    title: 'Product Solutions',
    description: 'Purpose-built platforms for key business functions.',
    to: '/products',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Software designed around specific workflows and requirements.',
    to: '/solutions',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Turn operational data into insights and better decisions.',
    to: '/solutions',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    description: 'Modernize manual processes and disconnected information systems.',
    to: '/solutions',
  },
];

const safeOpsFunctions = [
  { icon: AlertTriangle, label: 'Incident Management' },
  { icon: ShieldAlert, label: 'Risk Assessment' },
  { icon: ClipboardCheck, label: 'Inspections & Audits' },
  { icon: FileCheck, label: 'Permit to Work' },
  { icon: GraduationCap, label: 'Training' },
  { icon: HardHat, label: 'PPE' },
  { icon: BarChart3, label: 'HSE Statistics' },
  { icon: TrendingUp, label: 'Analytics' },
  { icon: Leaf, label: 'ESG' },
  { icon: FolderCheck, label: 'Document Management' },
];

const differentiators = [
  {
    icon: Compass,
    title: 'Real Operational Experience',
    description: 'We understand the environments, workflows and reporting requirements behind the systems we build.',
  },
  {
    icon: Cog,
    title: 'Operational Understanding',
    description: 'We build around real processes rather than forcing organizations into generic workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulated Environments',
    description: 'Our solutions are designed with compliance, traceability and accountability in mind.',
  },
  {
    icon: Layers,
    title: 'Flexible & Scalable',
    description: 'Solutions can be configured around organizational requirements and evolving needs.',
  },
  {
    icon: TrendingUp,
    title: 'Data to Decisions',
    description: 'We turn operational information into dashboards, trends and actionable insights.',
  },
];

function HeroVisual() {
  return (
    <figure className="relative">
      <div
        className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#3B82F6]/20 to-transparent blur-2xl -z-10"
        aria-hidden="true"
      />
      <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-card-hover">
        <img
          src="/images/solvia-industrial-analytics-hero.jpg"
          width={1672}
          height={941}
          fetchPriority="high"
          decoding="async"
          className="w-full h-auto object-cover"
          alt="Operations professional monitoring industrial analytics dashboards in a control room overlooking a refinery — illustrative"
        />
      </div>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Solvia Technologies | Software Systems for Performance & Compliance"
        description="Solvia Technologies builds software platforms for HSE management, operational performance, compliance, analytics and digital transformation across regulated industries."
        path="/"
      />

      {/* SECTION 1 — HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-8 overflow-hidden bg-[#0B1F2A]">
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.06) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        {/* Radial glow */}
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.15) 0%,transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] mb-5 animate-fade-in-up">
              {site.brand.toUpperCase()}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] mb-6 animate-fade-in-up text-white">
              Technology that turns{' '}
              <span className="gradient-accent-text">complex challenges</span>
              {' '}into practical solutions.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl animate-fade-in-up">
              Solvia Systems &amp; Innovations builds intelligent software, digital platforms, and
              data-driven systems that help businesses improve operational performance, manage risk,
              and work smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <CTAButton to="/solutions" variant="accent" className="justify-center sm:justify-start">
                Explore Our Solutions
              </CTAButton>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/25 text-white px-8 py-4 rounded-xl font-semibold hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 transition-[color,background-color,border-color] duration-300 sm:justify-start"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
          <ScrollReveal delay={200}>
            <HeroVisual />
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2 — INDUSTRY STRIP */}
      <section className="py-10 px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-slate dark:text-gray-400 mb-8">
            Built for complex and regulated environments
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {industryStrip.map((industry) => {
              const Icon = industry.icon;
              return (
                <li key={industry.label} className="flex items-center gap-3 text-slate dark:text-gray-300">
                  <Icon size={22} className="text-blue-600 dark:text-[#3B82F6]" aria-hidden="true" />
                  <span className="font-medium">{industry.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* SECTION 3 — WHAT SOLVIA DOES */}
      <section className="py-24 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Technology built around real operational problems."
            description="We design and build practical software systems that solve real business challenges, from HSE and compliance to analytics and operational performance."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <CapabilityCard key={cap.title} {...cap} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FLAGSHIP PRODUCT: SAFEOPS HSE */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="section-label mb-6">Flagship Product</p>
              <div className="mb-4">
                <img src="/Safeops_logo_light.svg" width={1000} height={1000} alt="SafeOps HSE" className="h-14 w-auto dark:hidden" />
                <img src="/SafeOps_logo_Dark.svg" width={1000} height={1000} alt="SafeOps HSE" className="h-14 w-auto hidden dark:block" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text dark:text-white mb-4">
                Integrated HSE performance management for high-risk and regulated industries.
              </h2>
              <p className="text-lg text-slate dark:text-gray-300 leading-relaxed mb-8">
                SafeOps HSE brings incident management, risk assessment, inspections and audits, permit-to-work,
                PPE, training, HSE statistics, ESG, document management and performance analytics into one
                connected system.
              </p>
              <CTAButton to="/products/safeops-hse">Explore SafeOps</CTAButton>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <figure>
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-card">
                <img
                  src="/images/solvia-industrial-engineer.jpg"
                  width={1672}
                  height={941}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                  alt="Field engineer using a tablet at an industrial facility — illustrative"
                />
              </div>
              <figcaption className="mt-3 text-xs text-slate dark:text-gray-400 text-center">
                Illustrative image — digital HSE management in field operations
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={150}>
          <div className="mt-14 max-w-4xl mx-auto">
            <ScreenshotFrame
              label="SafeOps HSE — Platform hub"
              src="/safeops/hub-dark.png"
              width={1716}
              height={1313}
              cropTop="10.1%"
              alt="SafeOps HSE module hub: quick actions for observations, incidents, PPE requests, permits and audits, with module groups for monitoring, safety operations, compliance, people and ESG"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 5 — SAFEOPS CAPABILITY STRIP */}
      <section className="py-20 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="One platform. Multiple HSE functions." />
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {safeOpsFunctions.map((fn, index) => {
              const Icon = fn.icon;
              return (
                <li key={fn.label}>
                  <ScrollReveal delay={index * 50}>
                    <div className="card-base card-hover px-4 py-5 flex flex-col items-center text-center gap-3 h-full">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 flex items-center justify-center">
                        <Icon size={20} className="text-blue-600 dark:text-[#3B82F6]" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium text-primary dark:text-white">{fn.label}</span>
                    </div>
                  </ScrollReveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* SECTION 6 — CUSTOM SOFTWARE */}
      <section className="py-24 px-6 lg:px-8 bg-primary dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-dark opacity-30 pointer-events-none" />
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a problem that doesn't fit an off-the-shelf product?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              We design and build purpose-built software around your workflows, data and operational
              requirements — from internal tools to organization-wide platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton to="/contact" variant="accent">
                Discuss Your Project
              </CTAButton>
              <CTAButton to="/solutions" variant="secondary">
                Explore Solutions
              </CTAButton>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 7 — WHY SOLVIA */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Why Solvia"
            description="We are a focused technology company that builds around real operational needs — not generic templates."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <CapabilityCard key={item.title} {...item} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — INDUSTRIES */}
      <section className="py-24 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Industries we serve"
            description="We work with organizations where operational complexity and compliance are defining characteristics."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCard
              icon={Fuel}
              title="Oil & Gas & Energy"
              description="HSE, compliance, operational performance and field management systems for complex energy environments."
              to="/industries/oil-gas"
            />
            <IndustryCard
              icon={HardHat}
              title="Construction & Infrastructure"
              description="Safety management, inspections and multi-site compliance for construction and infrastructure projects."
              to="/industries/construction"
              delay={100}
            />
            <IndustryCard
              icon={Factory}
              title="Manufacturing"
              description="Integrated HSE, audit and performance management for plants, production lines and industrial facilities."
              to="/industries/manufacturing"
              delay={200}
            />
            <IndustryCard
              icon={Mountain}
              title="Mining & Extractive Industries"
              description="Incident, risk and permit-to-work management for remote, high-risk extractive operations."
              to="/industries/mining"
              delay={300}
            />
            <IndustryCard
              icon={Building2}
              title="Other Regulated Industries"
              description="Organizations under strict regulatory oversight needing auditable systems for compliance and governance."
              to="/solutions"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* SECTION 9 — SECURITY */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <p className="section-label mb-6">
                <Lock size={16} aria-hidden="true" />
                Security
              </p>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text dark:text-white mb-6">
                Security & Data Protection
              </h2>
              <p className="text-lg text-slate dark:text-gray-300 leading-relaxed mb-8">
                Solvia designs its software with security, access control, data protection and accountability
                in mind — from authenticated access and role-based permissions to encrypted connections and
                auditable records.
              </p>
              <CTAButton to="/security" variant="secondary">
                View Security
              </CTAButton>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="card-base p-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Secure authentication',
                  'Role-based access control',
                  'Data isolation',
                  'Encryption in transit and at rest',
                  'Audit logging',
                  'Backup & recovery',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-[#3B82F6] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 10 — ABOUT */}
      <section className="py-24 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <figure>
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-card">
                <img
                  src="/images/solvia-team-collaboration.jpg"
                  width={1672}
                  height={941}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                  alt="Technology professionals collaborating around a business analytics dashboard — illustrative"
                />
              </div>
              <figcaption className="mt-3 text-xs text-slate dark:text-gray-400 text-center">
                Illustrative image — analytics-driven product development
              </figcaption>
            </figure>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div>
              <p className="section-label mb-6">About Solvia</p>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text dark:text-white mb-8">
                Practical technology. Meaningful business impact.
              </h2>
              <div className="space-y-5 text-lg text-slate dark:text-gray-300 leading-relaxed mb-10">
                <p>
                  Solvia Technologies was established to solve a practical problem: organizations often
                  have large amounts of operational data but limited visibility into what that
                  information means for performance, compliance and decision-making.
                </p>
                <p>
                  We combine software engineering with an understanding of operational and HSE
                  environments to build systems that help organizations capture information, manage
                  processes, identify trends and make better decisions.
                </p>
                <p>Our focus is simple: build useful technology around real business problems.</p>
              </div>
              <CTAButton to="/about" variant="secondary">
                Learn More
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 11 — CONTACT */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <ScrollReveal>
            <div className="lg:col-span-2">
              <p className="section-label mb-6">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text dark:text-white mb-6">
                Let's discuss your requirements.
              </h2>
              <p className="text-lg text-slate dark:text-gray-300 leading-relaxed mb-8">
                Tell us what you are trying to improve, manage or digitize. We'll review your requirements and
                discuss the appropriate approach.
              </p>
              {site.contact.email && (
                <p className="text-slate dark:text-gray-300">
                  <span className="font-semibold text-primary dark:text-white">Email: </span>
                  <a href={`mailto:${site.contact.email}`} className="text-accent hover:underline">
                    {site.contact.email}
                  </a>
                </p>
              )}
              {site.contact.phone && (
                <p className="text-slate dark:text-gray-300 mt-2">
                  <span className="font-semibold text-primary dark:text-white">Phone: </span>
                  <a href={`tel:${site.contact.phone}`} className="text-accent hover:underline">
                    {site.contact.phoneDisplay ?? site.contact.phone}
                  </a>
                </p>
              )}
              <p className="text-slate dark:text-gray-300 mt-2">
                <span className="font-semibold text-primary dark:text-white">Location: </span>Nigeria
              </p>
              <p className="mt-8">
                <Link to="/contact" className="text-accent font-medium hover:underline">
                  Prefer to talk first? Visit our contact page
                </Link>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="lg:col-span-3 card-base p-6 sm:p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
