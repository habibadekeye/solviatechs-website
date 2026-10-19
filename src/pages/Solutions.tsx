import { Link } from 'react-router-dom';
import {
  Package,
  Code2,
  BarChart3,
  RefreshCw,
  CheckCircle,
} from 'lucide-react';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/ui/CTASection';

const solutions = [
  {
    icon: Package,
    title: 'Product Solutions',
    intro:
      'Purpose-built platforms for key business functions — designed, operated and continuously improved by Solvia.',
    points: [
      'SafeOps HSE: integrated HSE performance management for high-risk and regulated industries',
      'Structured workflows covering incidents, risk, audits, permits, training and analytics',
      'Configuration to match organizational structure, terminology and reporting requirements',
    ],
    link: '/products',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    intro:
      'Software designed around specific workflows and requirements, built to integrate with the tools and processes you already rely on.',
    points: [
      'Web platforms and internal operational tools',
      'System integration and replacement of spreadsheet-driven processes',
      'User-centered design, scalable architecture and ongoing support',
    ],
    link: '/contact',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    intro:
      'Turn operational data into insights and better decisions with consolidated dashboards, trends and reporting.',
    points: [
      'Multi-source data consolidation into unified dashboards',
      'KPI definition, trend analysis and automated reporting',
      'Drill-down from summary views to underlying records',
    ],
    link: '/contact',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    intro:
      'Modernize manual processes and disconnected information systems, step by step, without disrupting ongoing operations.',
    points: [
      'Digitization of paper forms, registers and approval chains',
      'Process-by-process rollout proven with the teams who use it',
      'Practical change management and training support',
    ],
    link: '/contact',
  },
];

export default function Solutions() {
  return (
    <>
      <Seo
        title="Solutions | Solvia Technologies"
        description="Product platforms, custom software development, data & analytics and digital transformation for organizations in complex and regulated industries."
        path="/solutions"
      />

      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Solutions' }]}
        eyebrow="Solutions"
        title="Practical technology for real operational problems."
        description="Solvia Technologies designs and builds digital platforms that help organizations manage complex operations, improve performance, control risk and meet compliance requirements."
      />

      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <ScrollReveal key={solution.title} delay={index * 100}>
                <div className="card-base card-hover p-8 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-blue-600 dark:text-[#3B82F6]" size={28} aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">{solution.title}</h2>
                  <p className="text-slate dark:text-gray-300 leading-relaxed mb-6">{solution.intro}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-[#3B82F6] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-slate dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link to={solution.link} className="text-accent font-medium hover:underline">
                      {solution.link === '/products' ? 'Explore our products' : 'Discuss your requirements'}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold gradient-text dark:text-white mb-6 text-center">
              Both a product company and a software engineering company
            </h2>
            <p className="text-lg text-slate dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              We develop and operate our own platforms — led by SafeOps HSE — and we build purpose-built
              software for organizations whose requirements extend beyond any single product. That combination
              keeps our engineering grounded in real operational use.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        primaryLabel="Discuss Your Project"
        primaryTo="/contact"
        secondaryLabel="Explore Products"
        secondaryTo="/products"
      />
    </>
  );
}
