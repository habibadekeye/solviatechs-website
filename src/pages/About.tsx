import { Target, Layers, Cog, CheckCircle } from 'lucide-react';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/ui/CTASection';
import { site } from '../config/site';

const principles = [
  {
    icon: Target,
    title: 'Purpose-Driven Design',
    description:
      'Every system we build starts with a clear understanding of operational needs and desired outcomes.',
  },
  {
    icon: Layers,
    title: 'Structured Approach',
    description:
      'We apply systems thinking to break down complex problems into manageable, well-architected solutions.',
  },
  {
    icon: Cog,
    title: 'Built to Last',
    description:
      'Our solutions are designed for long-term sustainability, supporting growth without compromise.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About | Solvia Technologies"
        description="Solvia Systems & Innovations Company Limited is a Nigerian technology company operating under the Solvia Technologies brand, building software systems for performance, compliance and operational control."
        path="/about"
      />

      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        eyebrow="About Solvia"
        title="Technology built from operational experience."
        description="We combine software engineering with an understanding of operational and HSE environments to build systems that help organizations capture information, manage processes, identify trends and make better decisions."
      />

      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="space-y-5 text-lg text-slate dark:text-gray-300 leading-relaxed">
              <p>
                {site.legalName} is a Nigerian technology company operating under the Solvia Technologies
                brand.
              </p>
              <p>
                Solvia Technologies was established to solve a practical problem: organizations often have large
                amounts of operational data but limited visibility into what that information means for
                performance, compliance and decision-making.
              </p>
              <p>
                In regulated and high-risk industries, that gap is more than an inconvenience. Incidents,
                inspections, permits and compliance obligations all produce information — and when that
                information is fragmented across paper, spreadsheets and email, organizations lose both
                efficiency and assurance.
              </p>
              <p>
                Our focus is simple: build useful technology around real business problems. That focus produced
                SafeOps HSE, our integrated HSE performance management platform, and it shapes the custom
                systems we build for organizations whose requirements go further.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="How we work" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <ScrollReveal key={principle.title} delay={index * 100}>
                  <div className="card-base card-hover p-8 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-blue-600 dark:text-[#3B82F6]" size={28} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{principle.title}</h3>
                    <p className="text-slate dark:text-gray-300 leading-relaxed">{principle.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-bold gradient-text dark:text-white mb-6">What we build</h2>
              <p className="text-lg text-slate dark:text-gray-300 leading-relaxed mb-6">
                We are both a product company and a software engineering company. We develop and operate our
                own platforms — led by SafeOps HSE — and we build purpose-built software around client
                workflows, data and requirements.
              </p>
              <ul className="space-y-3">
                {[
                  'SafeOps HSE: integrated HSE performance management',
                  'Purpose-built platforms for key business functions',
                  'Custom software designed around specific workflows',
                  'Data, analytics and reporting systems',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-[#3B82F6] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="card-base p-8 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-gray-800 dark:to-gray-800">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Company structure</h3>
              <dl className="space-y-4 text-slate dark:text-gray-300">
                <div>
                  <dt className="text-sm font-semibold text-primary dark:text-white">Legal entity</dt>
                  <dd>{site.legalName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-primary dark:text-white">Technology brand</dt>
                  <dd>{site.brand}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-primary dark:text-white">Flagship product</dt>
                  <dd>{site.flagshipProduct}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-primary dark:text-white">Location</dt>
                  <dd>{site.location}</dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Let's discuss your requirements."
        description="Tell us what you are trying to improve, manage or digitize. We'll review your requirements and discuss the appropriate approach."
        primaryLabel="Talk to Solvia"
        primaryTo="/contact"
        secondaryLabel="Explore SafeOps"
        secondaryTo="/products/safeops-hse"
      />
    </>
  );
}
