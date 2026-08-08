import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What types of organizations do you work with?',
    answer: 'We work with enterprises in regulated industries including energy, infrastructure, manufacturing, and industrial operations. Our clients typically manage complex operational environments and need purpose-built software solutions that align with their specific requirements.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A focused solution might take 2-3 months from initial consultation to deployment, while comprehensive enterprise systems can take 6-12 months. We provide realistic timelines during our initial assessment and maintain transparent communication throughout.',
  },
  {
    question: 'Do you provide ongoing support after deployment?',
    answer: 'Yes. We offer comprehensive support and maintenance packages to ensure your systems continue to perform optimally. This includes technical support, system updates, performance monitoring, and enhancements as your needs evolve.',
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Absolutely. Integration with existing systems is a core part of what we do. We work with various databases, APIs, and enterprise software platforms to ensure seamless data flow and operational continuity.',
  },
  {
    question: 'What is your approach to data security?',
    answer: 'Security is fundamental to everything we build. We follow industry best practices including encryption, secure authentication, role-based access controls, and comprehensive audit trails. We work within your existing security frameworks and can meet specific compliance requirements.',
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'We provide transparent, fixed-price quotes based on clearly defined scope and deliverables. After our initial consultation and requirements assessment, you will receive a detailed proposal outlining costs, timelines, and expected outcomes. No hidden fees or surprises.',
  },
  {
    question: 'What happens if our requirements change during development?',
    answer: 'We understand that requirements can evolve. Our development process includes regular check-ins and reviews, making it easier to adapt to changing needs. Significant scope changes are documented and priced separately to maintain project clarity and budget control.',
  },
  {
    question: 'Do you offer training for our team?',
    answer: 'Yes. We provide comprehensive training as part of every deployment. This includes user training, administrator training, and documentation tailored to your organization. We ensure your team is confident and capable before we consider a project complete.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate dark:text-gray-300 max-w-2xl mx-auto">
              Common questions about our services and approach
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="bg-soft-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white dark:hover:bg-gray-900 transition-colors"
                >
                  <span className="text-lg font-semibold text-primary dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-slate dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
