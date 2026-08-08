import { Shield, Package, CheckCircle, Star, ArrowRight, Users, BarChart3, Lock, Smartphone, Bell, FileCheck, Zap, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Products() {
  const keyFeatures = [
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      description: 'Instant notifications for critical incidents and compliance deadlines'
    },
    {
      icon: FileCheck,
      title: 'Audit Management',
      description: 'Streamlined audit trails and documentation for regulatory compliance'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Powerful dashboards and reporting for data-driven decisions'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Native iOS and Android apps for field teams on the go'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with industry standards'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless workflows and communication across departments'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="products" className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-label mx-auto">
              <Shield size={16} />
              Our Products
            </div>
            <h2 className="text-4xl font-bold gradient-text dark:text-white mb-4">Products</h2>
            <p className="text-lg text-slate dark:text-gray-300 max-w-2xl mx-auto">
              Enterprise-grade systems built for operational excellence
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/20 p-8 rounded-2xl border-2 border-accent">
              <div className="mb-6">
                <img src="/Safeops_logo_light.svg" alt="SafeOps HSE" className="h-20 w-auto dark:hidden" />
                <img src="/SafeOps_logo_Dark.svg" alt="SafeOps HSE" className="h-20 w-auto hidden dark:block" />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-3xl font-bold text-primary dark:text-white">SafeOps HSE</h3>
                <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 fill-current" />
                  <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">Featured</span>
                </div>
              </div>

              <p className="text-slate dark:text-gray-300 mb-6 text-lg leading-relaxed">
                A comprehensive HSE performance management platform designed for organizations
                operating in regulated environments.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {keyFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl">
                      <Icon className="w-6 h-6 text-lime-700 dark:text-accent mb-2" />
                      <h4 className="font-bold text-sm text-primary dark:text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate dark:text-gray-400">{feature.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-primary dark:text-white mb-4">Core Capabilities</h4>
                <div className="space-y-3">
                  {[
                    'Incident and hazard reporting with customizable forms',
                    'Compliance tracking and audit management',
                    'Real-time analytics and trend analysis',
                    'Governance workflows and approvals',
                    'Mobile-first design for field operations',
                    'Integration with existing enterprise systems'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-700 dark:text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-slate dark:text-gray-400 italic mb-6 p-4 bg-accent/5 dark:bg-accent/10 rounded-lg">
                Built for energy, infrastructure, construction, and industrial operations where
                safety and compliance are critical business functions.
              </p>

              <div className="flex gap-4">
                <a
                  href="#product-demo"
                  className="flex-1 bg-accent hover:bg-accent/90 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  View Demo
                  <Zap className="w-5 h-5" />
                </a>
                <button
                  onClick={scrollToContact}
                  className="flex-1 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-primary dark:text-white py-3 px-6 rounded-xl font-medium transition-colors border-2 border-accent flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="h-full flex flex-col justify-center">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 p-8 rounded-2xl border-2 border-primary/20 dark:border-primary/30">
                <div className="w-16 h-16 bg-primary dark:bg-accent rounded-xl flex items-center justify-center mb-6">
                  <Mail className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                  Get in Touch
                </h3>

                <p className="text-slate dark:text-gray-300 mb-6 leading-relaxed">
                  Interested in SafeOps HSE or want to discuss a custom solution for your organization?
                  Our team is ready to help you understand how our platform can meet your specific needs.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-lime-700 dark:text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-slate dark:text-gray-300">Schedule a personalized demo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-lime-700 dark:text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-slate dark:text-gray-300">Discuss pricing and implementation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-lime-700 dark:text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-slate dark:text-gray-300">Explore custom solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-lime-700 dark:text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-slate dark:text-gray-300">Get answers to your questions</span>
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full bg-primary dark:bg-accent hover:bg-primary/90 dark:hover:bg-accent/90 text-white py-4 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-sm text-slate dark:text-gray-400 text-center mt-4">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="card-base p-8 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-[#9CAF2E]/20 to-[#7D8F1E]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Package className="text-lime-700 dark:text-accent" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">More Systems in Development</h3>
            <p className="text-slate dark:text-gray-300 leading-relaxed mb-6">
              We are continuously developing new enterprise systems to address operational
              challenges across regulated industries. Additional products will be announced
              as they become available.
            </p>
            <button
              onClick={scrollToContact}
              className="btn-accent"
            >
              Join Our Updates List
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
