import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  ClipboardCheck,
  FileCheck,
  GraduationCap,
  HardHat,
  BarChart3,
  TrendingUp,
  Leaf,
  FolderCheck,
  Users,
  HeartPulse,
  Lock,
  CheckCircle,
  Fuel,
  Factory,
  Mountain,
} from 'lucide-react';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/ui/CTASection';
import ScreenshotFrame from '../components/ui/ScreenshotFrame';
import { site } from '../config/site';

const coreCapabilities = [
  {
    icon: AlertTriangle,
    title: 'Incident Management',
    description:
      'Report incidents and near misses with structured forms, manage investigations and track corrective actions to closure.',
  },
  {
    icon: ShieldAlert,
    title: 'Risk Assessment',
    description:
      'Document hazards and controls, assign responsibilities and keep risk registers current and reviewable.',
  },
  {
    icon: ClipboardCheck,
    title: 'Inspections & Audits',
    description:
      'Schedule inspections and audits, capture findings digitally and follow actions through to verification.',
  },
  {
    icon: FileCheck,
    title: 'Permit to Work',
    description:
      'Controlled authorization for high-risk activities with approval chains, validity windows and live permit registers.',
  },
  {
    icon: HardHat,
    title: 'PPE Management',
    description:
      'Manage PPE issuance, compliance and replacement across the workforce.',
  },
  {
    icon: GraduationCap,
    title: 'Training',
    description:
      'Track inductions, certifications and competency requirements with expiry visibility for employees and contractors.',
  },
  {
    icon: BarChart3,
    title: 'HSE Statistics',
    description:
      'Consolidated leading and lagging indicators across sites and business units, ready for management and regulatory reporting.',
  },
  {
    icon: HeartPulse,
    title: 'Safety Culture Maturity',
    description:
      'Visibility into participation and reporting activity that reflects the health of the safety system, not just its outcomes.',
  },
  {
    icon: Leaf,
    title: 'ESG & Sustainability',
    description:
      'Structured collection of environmental and social data with consistent definitions and traceable records.',
  },
  {
    icon: FolderCheck,
    title: 'Documents',
    description:
      'Controlled management of procedures, risk assessments, permits and evidence with clear ownership.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics, Trends & Reports',
    description:
      'Dashboards and reports generated from live data — drill from summary views into the records behind them.',
  },
  {
    icon: Users,
    title: 'User Management',
    description:
      'Role-based access that reflects organizational structure, from field teams to group leadership.',
  },
];

const pillars = [
  {
    title: 'HSE Operations',
    description:
      'Incident reporting, hazard capture, inspections and day-to-day safety work move from paper and spreadsheets into structured digital workflows that field and site teams can actually use.',
  },
  {
    title: 'Compliance',
    description:
      'Obligations, scheduled activities and evidence are tracked in one place with audit trails, so the organization can demonstrate compliance rather than reconstruct it.',
  },
  {
    title: 'Risk Management',
    description:
      'Risk assessments, controls and follow-up actions stay connected and current, giving management a live view of exposure rather than a periodic snapshot.',
  },
  {
    title: 'Performance Analytics',
    description:
      'Leading and lagging indicators, trends and cross-site comparisons turn operational data into management information — current, consistent and drillable.',
  },
  {
    title: 'ESG',
    description:
      'Environmental and social metrics are collected with the same discipline as safety data, building a traceable foundation for ESG reporting.',
  },
];

const industriesServed = [
  { icon: Fuel, label: 'Oil & Gas & Energy' },
  { icon: HardHat, label: 'Construction & Infrastructure' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: Mountain, label: 'Mining & Extractive Industries' },
];

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SafeOps HSE',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'HSE performance management',
  operatingSystem: 'Web',
  description:
    'SafeOps HSE is an integrated HSE performance management platform covering incident management, risk assessment, inspections and audits, permit-to-work, PPE, training, HSE statistics, ESG, document management and performance analytics.',
  provider: {
    '@type': 'Organization',
    name: site.brand,
    url: site.url,
  },
  url: `${site.url}/products/safeops-hse`,
};

export default function SafeOps() {
  return (
    <>
      <Seo
        title="SafeOps HSE | HSE Management & Performance Platform"
        description="SafeOps HSE is Solvia Technologies' integrated HSE platform: incident management, risk assessment, inspections and audits, permit-to-work, PPE, training, HSE statistics, ESG and analytics in one connected system."
        path="/products/safeops-hse"
        jsonLd={softwareAppJsonLd}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-[#0B1F2A]">
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
          className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.13) 0%,transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
              <ol className="flex items-center gap-1">
                <li>
                  <Link to="/products" className="hover:text-[#3B82F6] transition-colors">
                    Products
                  </Link>
                </li>
                <li aria-hidden="true" className="mx-1">/</li>
                <li aria-current="page" className="text-white font-medium">
                  SafeOps HSE
                </li>
              </ol>
            </nav>
            <div className="mb-6">
              <img src="/SafeOps_logo_Dark.svg" width={1000} height={1000} alt="SafeOps HSE" className="h-14 w-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Integrated HSE performance management.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
              SafeOps HSE brings incident management, risk assessment, inspections and audits, permit-to-work,
              PPE, training, HSE statistics, ESG, document management and performance analytics into one
              connected system — designed for organizations operating in high-risk and regulated environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-accent justify-center sm:justify-start">
                Request a SafeOps Demo <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ScrollReveal delay={200}>
            <ScreenshotFrame
              label="SafeOps HSE — Platform hub"
              src="/safeops/hub-dark.png"
              width={1716}
              height={1313}
              cropTop="10.1%"
              alt="SafeOps HSE module hub with quick actions and module groups for monitoring, safety operations, compliance, people and ESG"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Product overview */}
      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text dark:text-white mb-8">
              One connected system for HSE work
            </h2>
            <div className="space-y-5 text-lg text-slate dark:text-gray-300 leading-relaxed">
              <p>
                In most organizations, HSE work is spread across paper forms, spreadsheets, email and shared
                drives. Incidents are investigated in one place, permits tracked in another, training records in
                a third — and management reporting is assembled manually at the end of each month.
              </p>
              <p>
                SafeOps HSE replaces that fragmentation with a single platform where each HSE function feeds the
                next. An inspection finding becomes a corrective action. A risk assessment connects to the
                permits it governs. Monthly statistics are generated from live data rather than compiled by hand.
              </p>
              <p>
                The result is less administrative effort for HSE teams, faster and better information for
                leadership, and records that stand up to audits, investigations and client reviews.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="py-20 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Core capabilities"
            description="Each capability is part of the same platform — not a bolt-on module with separate data."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={cap.title} delay={index * 50}>
                  <div className="card-base card-hover p-6 h-full">
                    <div className="w-11 h-11 bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-blue-600 dark:text-[#3B82F6]" size={22} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-primary dark:text-white mb-2">{cap.title}</h3>
                    <p className="text-slate dark:text-gray-300 text-sm leading-relaxed">{cap.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screenshots row */}
      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Inside the platform"
            description="A look at SafeOps HSE in use: the performance dashboard and the platform hub."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScreenshotFrame
              label="SafeOps HSE — Performance dashboard"
              src="/safeops/dashboard-light.png"
              width={1063}
              height={889}
              cropTop="11.3%"
              alt="SafeOps HSE performance dashboard with report and incident totals, compliance score and status breakdowns"
            />
            <ScreenshotFrame
              label="SafeOps HSE — Platform walkthrough"
              videoSrc="/safeops/dashboard-dark.mp4"
              poster="/safeops/hub-dark.png"
              alt="Walkthrough of the SafeOps HSE dashboard and module hub"
            />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Built for the whole HSE function" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 100}>
                <div className="card-base card-hover p-8 h-full">
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{pillar.title}</h3>
                  <p className="text-slate dark:text-gray-300 leading-relaxed">{pillar.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading
            title="Designed for high-risk and regulated industries"
            description="SafeOps HSE serves organizations where safety, compliance and operational control are defining requirements."
          />
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {industriesServed.map((industry) => {
              const Icon = industry.icon;
              return (
                <li
                  key={industry.label}
                  className="flex items-center gap-3 px-5 py-3 card-base"
                >
                  <Icon size={20} className="text-blue-600 dark:text-[#3B82F6]" aria-hidden="true" />
                  <span className="font-medium text-primary dark:text-white">{industry.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 rounded-xl flex items-center justify-center">
                <Lock className="text-blue-600 dark:text-[#3B82F6]" size={24} aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-bold gradient-text dark:text-white">Built with security in mind</h2>
            </div>
            <p className="text-lg text-slate dark:text-gray-300 leading-relaxed mb-6">
              SafeOps HSE is designed around authenticated access, role-based permissions and auditable
              records, with data transmitted over encrypted connections.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Secure authentication',
                'Role-based access control',
                'Encryption in transit',
                'Audit logging',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-[#3B82F6] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="See how SafeOps HSE fits your operations."
        description="Request a demo and we'll walk through the platform against your industry, sites and reporting requirements."
        primaryLabel="Request a SafeOps Demo"
        primaryTo="/contact"
        secondaryLabel="Talk to Solvia"
        secondaryTo="/contact"
      />
    </>
  );
}
