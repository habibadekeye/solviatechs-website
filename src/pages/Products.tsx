import {
  AlertTriangle,
  ShieldAlert,
  ClipboardCheck,
  FileCheck,
  GraduationCap,
  HardHat,
  BarChart3,
  Leaf,
  FolderCheck,
  ArrowRight,
  Fuel,
  Factory,
  Mountain,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/ui/CTASection';
import ScreenshotFrame from '../components/ui/ScreenshotFrame';

const safeOpsHighlights = [
  { icon: AlertTriangle, label: 'Incident Management' },
  { icon: ShieldAlert, label: 'Risk Assessment' },
  { icon: ClipboardCheck, label: 'Inspections & Audits' },
  { icon: FileCheck, label: 'Permit to Work' },
  { icon: HardHat, label: 'PPE Management' },
  { icon: GraduationCap, label: 'Training' },
  { icon: BarChart3, label: 'HSE Statistics & Analytics' },
  { icon: Leaf, label: 'ESG & Sustainability' },
  { icon: FolderCheck, label: 'Document Management' },
];

const fits = [
  { icon: Fuel, label: 'Oil & Gas and energy operations' },
  { icon: HardHat, label: 'Construction and infrastructure projects' },
  { icon: Factory, label: 'Manufacturing and industrial facilities' },
  { icon: Mountain, label: 'Mining and extractive operations' },
];

export default function Products() {
  return (
    <>
      <Seo
        title="Products | Solvia Technologies"
        description="SafeOps HSE — Solvia Technologies' integrated HSE performance management platform for organizations operating in high-risk and regulated environments."
        path="/products"
      />

      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
        eyebrow="Products"
        title="Software products built and operated by Solvia."
        description="Our product portfolio is led by SafeOps HSE, our flagship platform for HSE performance management in high-risk and regulated environments."
      />

      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <ScrollReveal>
              <div>
                <div className="mb-4">
                  <img src="/Safeops_logo_light.svg" width={1000} height={1000} alt="SafeOps HSE" className="h-16 w-auto dark:hidden" />
                  <img src="/SafeOps_logo_Dark.svg" width={1000} height={1000} alt="SafeOps HSE" className="h-16 w-auto hidden dark:block" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text dark:text-white mb-4">
                  SafeOps HSE
                </h2>
                <p className="text-lg text-slate dark:text-gray-300 leading-relaxed mb-6">
                  An integrated HSE performance management platform designed for organizations operating in
                  high-risk and regulated environments. SafeOps HSE brings incident management, risk
                  assessment, inspections and audits, permit-to-work, PPE, training, HSE statistics, ESG,
                  document management and performance analytics into one connected system.
                </p>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {fits.map((fit) => {
                    const Icon = fit.icon;
                    return (
                      <li
                        key={fit.label}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 text-sm text-primary dark:text-gray-200"
                      >
                        <Icon size={14} className="text-blue-600 dark:text-[#3B82F6]" aria-hidden="true" />
                        {fit.label}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/products/safeops-hse" className="btn-primary justify-center sm:justify-start">
                    Explore SafeOps <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link to="/contact" className="btn-secondary justify-center sm:justify-start">
                    Request a SafeOps Demo
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ScreenshotFrame
                label="SafeOps HSE — Dashboard"
                src="/safeops/dashboard-light.png"
                width={1063}
                height={889}
                cropTop="11.3%"
                alt="SafeOps HSE performance dashboard with date-range filters, report and incident totals, compliance score and status breakdowns"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-8 text-center">
              Key capabilities
            </h3>
          </ScrollReveal>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {safeOpsHighlights.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <li key={cap.label}>
                  <ScrollReveal delay={index * 50}>
                    <div className="card-base card-hover px-5 py-5 flex items-center gap-4 h-full">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-blue-600 dark:text-[#3B82F6]" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium text-primary dark:text-white">{cap.label}</span>
                    </div>
                  </ScrollReveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Wrench className="text-blue-600 dark:text-[#3B82F6]" size={28} aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold gradient-text dark:text-white mb-6">Purpose-built systems</h2>
            <p className="text-lg text-slate dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Beyond SafeOps HSE, Solvia designs and builds custom platforms around specific workflows and
              requirements — from compliance registers and analytics dashboards to organization-wide
              operational systems.
            </p>
            <Link to="/contact" className="btn-accent justify-center">
              Discuss Your Project <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="See SafeOps HSE in action."
        description="Request a demo and we'll walk through the platform against your operational context and reporting requirements."
        primaryLabel="Request a SafeOps Demo"
        primaryTo="/contact"
        secondaryLabel="Explore SafeOps"
        secondaryTo="/products/safeops-hse"
      />
    </>
  );
}
