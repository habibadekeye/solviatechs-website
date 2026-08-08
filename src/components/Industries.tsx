import { Fuel, HardHat, Factory, Building2 } from 'lucide-react';

const industries = [
  {
    icon: Fuel,
    title: 'Energy and Oil & Gas',
    description: 'Organizations managing complex upstream, midstream, and downstream operations with stringent safety and environmental requirements. Systems built to support operational excellence, regulatory compliance, and real-time performance monitoring across distributed assets.',
  },
  {
    icon: HardHat,
    title: 'Infrastructure and Construction',
    description: 'Construction firms, engineering companies, and infrastructure operators managing project execution, safety protocols, and quality assurance. Solutions that support multi-site coordination, incident management, and compliance documentation.',
  },
  {
    icon: Factory,
    title: 'Industrial Operations',
    description: 'Manufacturing, processing, and industrial facilities requiring integrated systems for operational control, safety management, and performance tracking. Platforms designed to handle complex workflows, shift operations, and continuous improvement initiatives.',
  },
  {
    icon: Building2,
    title: 'Regulated Enterprises',
    description: 'Organizations across sectors facing strict regulatory oversight, audit requirements, and governance standards. Systems architected to maintain comprehensive audit trails, support compliance reporting, and facilitate regulatory submissions.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">
            <Building2 size={16} />
            Who We Serve
          </div>
          <h2 className="text-4xl font-bold gradient-text dark:text-white mb-4">Industries We Serve</h2>
          <p className="text-lg text-slate dark:text-gray-300 max-w-2xl mx-auto">
            We work with organizations where operational complexity and compliance are defining characteristics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="card-base card-hover p-8 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#9CAF2E]/20 to-[#7D8F1E]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-lime-700 dark:text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">{industry.title}</h3>
                <p className="text-slate dark:text-gray-300 leading-relaxed">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
