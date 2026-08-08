import { Target, Layers, Cog } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const principles = [
  {
    icon: Target,
    title: 'Purpose-Driven Design',
    description: 'Every system we build starts with a clear understanding of operational needs and desired outcomes.',
  },
  {
    icon: Layers,
    title: 'Structured Approach',
    description: 'We apply systems thinking to break down complex problems into manageable, well-architected solutions.',
  },
  {
    icon: Cog,
    title: 'Built to Scale',
    description: 'Our solutions are designed for long-term sustainability, supporting growth without compromise.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <div className="section-label">
              <Target size={16} />
              Who We Are
            </div>
            <h2 className="text-4xl font-bold gradient-text dark:text-white mb-6">About Solvia</h2>
            <div className="space-y-4 text-lg text-slate dark:text-gray-300 leading-relaxed max-w-4xl">
              <p>
                Solvia Systems & Innovations Ltd. is a software development company focused on building intelligent
                systems for organizations operating in complex, regulated environments. We work with
                enterprises across energy, infrastructure, construction, and industrial operations.
              </p>
              <p>
                Our work centers on three critical areas: operational performance management, compliance
                and governance systems, and analytics platforms that support informed decision-making.
                We understand that in regulated industries, software must be more than functional—it must
                be reliable, auditable, and built to support long-term organizational objectives.
              </p>
              <p>
                We approach system design with clarity and precision. Rather than applying generic solutions,
                we take time to understand the operational context, compliance requirements, and performance
                goals unique to each organization we work with.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="card-base card-hover p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9CAF2E]/20 to-[#7D8F1E]/10 dark:from-[#9CAF2E]/20 dark:to-[#7D8F1E]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-lime-700 dark:text-accent" size={28} />
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
  );
}
