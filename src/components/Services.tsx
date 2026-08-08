import { useState } from 'react';
import { Code2, Activity, ShieldCheck, Database, FileSpreadsheet, ArrowRight } from 'lucide-react';
import Modal from './Modal';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Code2,
    title: 'Software Systems Design & Development',
    problem: 'Organizations struggle with disconnected tools, manual processes, and systems that don\'t align with operational reality.',
    audience: 'Enterprises seeking integrated, purpose-built software solutions',
    outcome: 'Cohesive systems that streamline operations, reduce manual effort, and provide a single source of truth.',
    details: 'Our software design process begins with understanding your operational challenges and workflows. We build custom solutions that integrate seamlessly with your existing systems, eliminate manual processes, and provide intuitive interfaces for your teams. From initial consultation to deployment and ongoing support, we ensure your software investment delivers measurable value.',
    features: ['Custom software architecture', 'System integration', 'User-centered design', 'Scalable infrastructure', 'Ongoing maintenance and support'],
  },
  {
    icon: Activity,
    title: 'Performance and Analytics Platforms',
    problem: 'Operational data exists across multiple systems, making it difficult to track performance trends and identify improvement opportunities.',
    audience: 'Organizations managing complex operations across multiple sites or business units',
    outcome: 'Clear visibility into performance metrics, trend identification, and data-driven insights that support continuous improvement.',
    details: 'Transform your operational data into actionable insights with our advanced analytics platforms. We consolidate data from multiple sources into unified dashboards that reveal trends, anomalies, and opportunities for optimization. Real-time monitoring and automated alerts ensure you stay informed about critical metrics.',
    features: ['Multi-source data integration', 'Real-time dashboards', 'Predictive analytics', 'Automated reporting', 'Custom KPI tracking'],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance, Risk, and Governance Systems',
    problem: 'Managing regulatory requirements manually creates risk exposure, audit challenges, and compliance gaps.',
    audience: 'Regulated enterprises in energy, infrastructure, and industrial sectors',
    outcome: 'Structured compliance workflows, complete audit trails, and confidence in meeting regulatory obligations.',
    details: 'Stay ahead of regulatory requirements with purpose-built compliance management systems. Our solutions automate compliance workflows, maintain comprehensive audit trails, and provide real-time visibility into your compliance status. Reduce risk exposure and prepare for audits with confidence.',
    features: ['Automated compliance workflows', 'Complete audit trails', 'Regulatory update tracking', 'Risk assessment tools', 'Document management'],
  },
  {
    icon: Database,
    title: 'HSE and Operational Management Solutions',
    problem: 'Safety and operational management often rely on spreadsheets, paper forms, and fragmented systems.',
    audience: 'Organizations where HSE performance is a critical business function',
    outcome: 'Integrated HSE management systems that improve safety outcomes, streamline reporting, and support governance.',
    details: 'Enhance workplace safety and operational efficiency with integrated HSE management systems. Our platforms streamline incident reporting, risk assessments, and safety audits while providing real-time visibility into safety metrics. Mobile-friendly interfaces enable field teams to report and access information anywhere.',
    features: ['Incident management', 'Risk assessments', 'Safety audits', 'Mobile accessibility', 'Real-time reporting'],
  },
  {
    icon: FileSpreadsheet,
    title: 'Data-Driven Dashboards and Reporting',
    problem: 'Decision-makers lack real-time access to operational data and rely on static reports that quickly become outdated.',
    audience: 'Executive teams and operational leaders needing actionable insights',
    outcome: 'Live dashboards and automated reporting that enable faster, more informed decision-making.',
    details: 'Empower decision-makers with live dashboards that provide instant access to critical operational data. Our reporting solutions automate data collection and visualization, ensuring stakeholders always have current information. Customizable views and scheduled reports keep everyone aligned on performance and priorities.',
    features: ['Live data visualization', 'Automated report generation', 'Customizable dashboards', 'Mobile access', 'Scheduled distribution'],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-label mx-auto">
              <Code2 size={16} />
              Our Services
            </div>
            <h2 className="text-4xl font-bold gradient-text dark:text-white mb-4">What We Do</h2>
            <p className="text-lg text-slate dark:text-gray-300 max-w-2xl mx-auto">
              We design and build systems that solve real operational challenges
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="card-base card-hover p-8 cursor-pointer group">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#9CAF2E]/20 to-[#7D8F1E]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-lime-700 dark:text-accent" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">{service.title}</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-slate dark:text-gray-300">The Problem: </span>
                          <span className="text-slate dark:text-gray-300">{service.problem}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-slate dark:text-gray-300">Who It's For: </span>
                          <span className="text-slate dark:text-gray-300">{service.audience}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-slate dark:text-gray-300">The Outcome: </span>
                          <span className="text-slate dark:text-gray-300">{service.outcome}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedService(service)}
                        className="mt-6 flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium"
                      >
                        Learn More <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ''}
      >
        {selectedService && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent bg-opacity-10 dark:bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                <selectedService.icon className="text-lime-700 dark:text-accent" size={24} />
              </div>
              <p className="text-slate dark:text-gray-300 flex-1">{selectedService.details}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-primary dark:text-white mb-3">Key Features</h4>
              <ul className="space-y-2">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate dark:text-gray-300">
                    <span className="text-accent mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-soft-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-slate dark:text-gray-300">
                <span className="font-semibold">Target Audience: </span>
                {selectedService.audience}
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedService(null);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-primary dark:bg-accent text-white dark:text-gray-900 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Get Started
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}
