import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/ui/CTASection';
import { insights } from '../content/insights';

export default function Resources() {
  return (
    <>
      <Seo
        title="Resources & Insights | Solvia Technologies"
        description="Practical insights from Solvia Technologies on HSE digitalization, safety performance management, leading indicators, permit-to-work, ESG data and multi-site compliance."
        path="/resources"
      />

      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Resources' }]}
        eyebrow="Resources"
        title="Insights from Solvia"
        description="Practical perspectives on HSE management, compliance and operational performance — drawn from how we think about the systems we build."
      />

      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <ScrollReveal key={insight.slug} delay={index * 60}>
              <Link to={`/resources/${insight.slug}`} className="card-base card-hover p-8 block group h-full">
                <div className="w-11 h-11 bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BookOpen className="text-blue-600 dark:text-[#3B82F6]" size={22} aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-primary dark:text-white mb-3 leading-snug">
                  {insight.title}
                </h2>
                <p className="text-slate dark:text-gray-300 leading-relaxed mb-5">{insight.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-[gap] duration-200">
                  Read insight <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Prefer to talk it through?"
        description="We're glad to discuss any of these topics in the context of your own operations and requirements."
        primaryLabel="Talk to Solvia"
        primaryTo="/contact"
        secondaryLabel=""
        secondaryTo="/contact"
      />
    </>
  );
}
