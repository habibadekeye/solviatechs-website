import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import { site } from '../config/site';

const sections = [
  {
    heading: 'About these terms',
    paragraphs: [
      `These terms govern the use of this website, operated by ${site.legalName} under the Solvia Technologies brand ("Solvia", "we", "us"). By using this website you accept these terms. They apply to the website only — the use of Solvia products and services is governed by separate agreements.`,
    ],
  },
  {
    heading: 'Information on this website',
    paragraphs: [
      'Content on this website is provided for general information about Solvia, its products and its services. It does not constitute professional advice, an offer or a commitment. Product capabilities, scope and commercial terms are defined in the specific agreements between Solvia and its customers.',
    ],
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      'The Solvia Technologies and SafeOps names and logos, and the content of this website, are the property of Solvia. You may not reproduce or use them without our written permission.',
    ],
  },
  {
    heading: 'Acceptable use',
    paragraphs: [
      'You agree not to misuse this website — including attempting to gain unauthorized access to it or its underlying systems, interfering with its operation, or submitting unlawful or malicious content through its forms.',
    ],
  },
  {
    heading: 'Third-party services',
    paragraphs: [
      'This website is hosted on third-party infrastructure and uses a hosted database service to process form submissions. Your use of those services through this website is subject to their respective availability and terms.',
    ],
  },
  {
    heading: 'Liability',
    paragraphs: [
      'We take reasonable care to keep the information on this website accurate and the website available, but we provide it "as is" without warranties of any kind. To the extent permitted by law, we are not liable for losses arising from the use of, or inability to use, this website.',
    ],
  },
  {
    heading: 'Governing law',
    paragraphs: [
      'These terms are governed by the laws of the Federal Republic of Nigeria.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      'Questions about these terms can be raised through the contact form on this website.',
    ],
  },
];

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service | Solvia Technologies"
        description="Terms governing the use of the Solvia Technologies website."
        path="/terms"
      />
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Terms of Service' }]}
        eyebrow="Legal"
        title="Terms of Service"
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
