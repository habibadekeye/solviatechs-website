import { Shield, TrendingUp, FileCheck, BarChart2, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  { icon: FileCheck, label: 'Incident Reporting' },
  { icon: Shield, label: 'Compliance Management' },
  { icon: TrendingUp, label: 'Trend Analysis' },
  { icon: BarChart2, label: 'Performance Analytics' },
];

export default function SafeOpsHighlight() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <div className="section-label">
                <Shield size={16} />
                Flagship Product
              </div>
              <h2 className="text-4xl font-bold gradient-text dark:text-white mb-6">SafeOps HSE</h2>
              <p className="text-lg text-slate dark:text-gray-300 mb-6 leading-relaxed">
                A comprehensive HSE performance management platform designed for organizations
                operating in regulated environments. SafeOps covers incident reporting, compliance
                tracking, analytics, trend analysis, and governance workflows.
              </p>
              <p className="text-slate dark:text-gray-300 mb-8 leading-relaxed">
                Built for energy, infrastructure, construction, and industrial operations where
                safety, compliance, and operational excellence are non-negotiable.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('products');
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-accent font-medium hover:gap-3 transition-all inline-flex items-center gap-2"
              >
                Learn more about SafeOps <ArrowRight size={18} />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="card-base card-hover p-6 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#9CAF2E]/20 to-[#7D8F1E]/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="text-lime-700 dark:text-accent" size={20} />
                    </div>
                    <p className="text-sm font-medium text-primary dark:text-white">{feature.label}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
