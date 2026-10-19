import { Link, Navigate, useParams } from 'react-router-dom';
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/ui/CTASection';
import { industryDetails } from '../content/industries';

export default function IndustryPage() {
  const { slug } = useParams();
  const industry = industryDetails.find((item) => item.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <>
      <Seo
        title={`${industry.name} | Solvia Technologies`}
        description={industry.heroDescription}
        path={`/industries/${industry.slug}`}
      />

      <PageHero
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Industries', to: '/industries' },
          { label: industry.name },
        ]}
        eyebrow="Industry"
        title={industry.name}
        description={industry.heroDescription}
      />

      {/* Challenges */}
      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="The operational reality"
            description={`Challenges we consistently see in ${industry.name.toLowerCase()} environments.`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, index) => (
              <ScrollReveal key={challenge.title} delay={index * 100}>
                <div className="card-base card-hover p-8 h-full">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle className="text-blue-600 dark:text-[#3B82F6]" size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{challenge.title}</h3>
                  <p className="text-slate dark:text-gray-300 leading-relaxed">{challenge.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="How Solvia helps" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.capabilities.map((capability, index) => (
              <ScrollReveal key={capability.title} delay={index * 100}>
                <div className="card-base card-hover p-8 h-full">
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{capability.title}</h3>
                  <p className="text-slate dark:text-gray-300 leading-relaxed">{capability.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SafeOps use cases */}
      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="mb-10">
              <img src="/Safeops_logo_light.svg" width={1000} height={1000} alt="SafeOps HSE" className="h-12 w-auto dark:hidden" />
              <img src="/SafeOps_logo_Dark.svg" width={1000} height={1000} alt="SafeOps HSE" className="h-12 w-auto hidden dark:block" />
            </div>
            <h2 className="text-3xl font-bold gradient-text dark:text-white mb-8">
              SafeOps HSE in {industry.name.toLowerCase()}
            </h2>
          </ScrollReveal>
          <ul className="space-y-4 mb-12">
            {industry.safeOpsUseCases.map((useCase, index) => (
              <ScrollReveal key={useCase} delay={index * 80}>
                <li className="flex items-start gap-4 card-base p-6">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-[#3B82F6] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-lg text-slate dark:text-gray-300 leading-relaxed">{useCase}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
          <ScrollReveal>
            <Link to="/products/safeops-hse" className="btn-secondary">
              Explore SafeOps HSE <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title={`Working in ${industry.name.toLowerCase()}?`}
        description="Tell us about your operations and reporting requirements. We'll discuss how SafeOps HSE or a purpose-built system could fit your environment."
        primaryLabel="Request a Demo"
        primaryTo="/contact"
        secondaryLabel="Talk to Solvia"
        secondaryTo="/contact"
      />
    </>
  );
}
