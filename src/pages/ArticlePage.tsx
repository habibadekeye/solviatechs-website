import { Navigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/ui/CTASection';
import { insights } from '../content/insights';
import { site } from '../config/site';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Organization',
      name: site.brand,
      url: site.url,
    },
    publisher: {
      '@type': 'Organization',
      name: site.brand,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/resources/${article.slug}`,
  };

  return (
    <>
      <Seo
        title={`${article.title} | Solvia Technologies`}
        description={article.excerpt}
        path={`/resources/${article.slug}`}
        jsonLd={articleJsonLd}
      />

      <PageHero
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Resources', to: '/resources' },
          { label: article.title },
        ]}
        eyebrow="Insight"
        title={article.title}
        description={article.excerpt}
      />

      <article className="py-16 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          {article.sections.map((section) => (
            <ScrollReveal key={section.heading}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-slate dark:text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </section>
            </ScrollReveal>
          ))}

          <div className="mt-12">
            <Link to="/resources" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
              <ArrowLeft size={16} aria-hidden="true" />
              All insights
            </Link>
          </div>
        </div>
      </article>

      <CTASection
        title="Want to discuss this in your context?"
        description="Tell us about your operations and reporting requirements — we'll talk through what a practical approach could look like."
        primaryLabel="Talk to Solvia"
        primaryTo="/contact"
        secondaryLabel=""
        secondaryTo="/contact"
      />
    </>
  );
}
