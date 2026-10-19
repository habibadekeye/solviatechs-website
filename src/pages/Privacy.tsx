import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import { site } from '../config/site';

const sections = [
  {
    heading: 'Introduction',
    paragraphs: [
      `${site.legalName}, operating under the Solvia Technologies brand ("Solvia", "we", "us"), respects the privacy of visitors to this website and of the organizations we work with. This policy explains what information we collect through this website, how we use it and the choices available to you.`,
    ],
  },
  {
    heading: 'Information we collect',
    paragraphs: [
      'When you use the contact or demo request forms on this website, we collect the information you provide: your name, work email address, organization, industry, area of interest and the content of your message.',
      'We do not use forms or tracking tools on this website to collect information beyond what you knowingly provide.',
    ],
  },
  {
    heading: 'How we use information',
    paragraphs: [
      'We use the information you provide to respond to your inquiry, understand your requirements and, where relevant, discuss our products and services with you. We do not sell your information to third parties.',
    ],
  },
  {
    heading: 'How information is stored',
    paragraphs: [
      'Form submissions are stored in a hosted database (Supabase) with access restricted to authorized Solvia personnel. Connections to this website and its underlying services are encrypted in transit.',
    ],
  },
  {
    heading: 'Retention',
    paragraphs: [
      'We retain inquiry records for as long as needed to manage the business relationship they relate to. You may ask us to delete your inquiry data at any time using the contact details below.',
    ],
  },
  {
    heading: 'Your rights',
    paragraphs: [
      'You may request access to, correction of or deletion of the personal information you have provided to us. To make a request, contact us through the channels listed on our Contact page.',
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      'If we change how we handle personal information, we will update this page. The current version is always the one published here.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      'For privacy-related questions or requests, please contact us via the contact form on this website.',
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Solvia Technologies"
        description="How Solvia Technologies collects, uses and protects information submitted through this website."
        path="/privacy"
      />
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
        eyebrow="Legal"
        title="Privacy Policy"
      />
      <div className="py-16 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          {sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-slate dark:text-gray-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
