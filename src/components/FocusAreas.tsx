import { BarChart3, Shield, LineChart, Code } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const focusAreas = [
  {
    icon: BarChart3,
    title: 'Performance Management Systems',
    description: 'Comprehensive platforms for tracking, analyzing, and optimizing operational performance across your organization.',
  },
  {
    icon: Shield,
    title: 'Compliance & Governance Platforms',
    description: 'Structured systems for managing regulatory requirements, audit trails, and governance workflows in regulated industries.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Decision Support',
    description: 'Data-driven tools that transform operational data into actionable insights for informed decision-making.',
  },
  {
    icon: Code,
    title: 'Custom Web & Mobile Software',
    description: 'Purpose-built applications tailored to your specific operational needs and business processes.',
  },
];

export default function FocusAreas() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-label mx-auto">
              <BarChart3 size={16} />
              What We Focus On
            </div>
            <h2 className="text-4xl font-bold gradient-text dark:text-white mb-4">Core Focus Areas</h2>
            <p className="text-lg text-slate dark:text-gray-300 max-w-2xl mx-auto">
              We build systems that address the critical challenges facing modern enterprises
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="card-base card-hover p-8 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#9CAF2E]/20 to-[#7D8F1E]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-lime-700 dark:text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{area.title}</h3>
                  <p className="text-slate dark:text-gray-300 leading-relaxed">{area.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
