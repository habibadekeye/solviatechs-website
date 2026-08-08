import { useState } from 'react';
import { FileText, Download, Calculator, BookOpen, TrendingUp, Shield, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Modal from './Modal';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'whitepaper' | 'calculator' | 'guide' | 'report';
  icon: typeof FileText;
  downloadCount: string;
  fileSize: string;
  pages?: string;
  featured?: boolean;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Complete Guide to IT Operations Excellence',
    description: 'A comprehensive 45-page guide covering best practices, frameworks, and strategies for achieving operational excellence in modern IT environments.',
    type: 'whitepaper',
    icon: FileText,
    downloadCount: '12.4K',
    fileSize: '3.2 MB',
    pages: '45',
    featured: true
  },
  {
    id: '2',
    title: 'ROI Calculator for IT Automation',
    description: 'Interactive calculator to estimate your potential cost savings and ROI from implementing IT operations automation. Get personalized results in minutes.',
    type: 'calculator',
    icon: Calculator,
    downloadCount: '8.7K',
    fileSize: 'Interactive',
    featured: true
  },
  {
    id: '3',
    title: 'Healthcare Compliance Security Playbook',
    description: 'Essential security and compliance strategies for healthcare organizations. HIPAA, HITECH, and industry-specific best practices included.',
    type: 'guide',
    icon: Shield,
    downloadCount: '6.2K',
    fileSize: '2.8 MB',
    pages: '32'
  },
  {
    id: '4',
    title: '2024 State of IT Operations Report',
    description: 'Annual industry report featuring data from 500+ organizations. Trends, benchmarks, and insights on the evolving IT operations landscape.',
    type: 'report',
    icon: TrendingUp,
    downloadCount: '15.3K',
    fileSize: '4.1 MB',
    pages: '58',
    featured: true
  },
  {
    id: '5',
    title: 'Financial Services Security Framework',
    description: 'Comprehensive security framework designed specifically for financial institutions. Covers compliance, risk management, and threat prevention.',
    type: 'guide',
    icon: Shield,
    downloadCount: '5.9K',
    fileSize: '3.5 MB',
    pages: '41'
  },
  {
    id: '6',
    title: 'Quick Start: Incident Response Automation',
    description: 'Step-by-step guide to implementing automated incident response. Includes templates, workflows, and real-world examples.',
    type: 'guide',
    icon: Zap,
    downloadCount: '9.1K',
    fileSize: '1.8 MB',
    pages: '24'
  }
];

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [roiCalculatorOpen, setRoiCalculatorOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All Resources' },
    { id: 'whitepaper', label: 'Whitepapers' },
    { id: 'guide', label: 'Guides' },
    { id: 'calculator', label: 'Calculators' },
    { id: 'report', label: 'Reports' }
  ];

  const filteredResources = activeFilter === 'all'
    ? resources
    : resources.filter(r => r.type === activeFilter);

  const getTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'whitepaper': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      case 'calculator': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      case 'guide': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300';
      case 'report': return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300';
      default: return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <section id="resources" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
              Resources & Insights
            </h2>
            <p className="text-xl text-slate dark:text-gray-300 max-w-3xl mx-auto">
              Free tools, guides, and reports to help you make informed decisions about your IT operations strategy.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <ScrollReveal key={resource.id} delay={index * 0.1}>
                <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border-2 ${
                  resource.featured ? 'border-blue-500' : 'border-transparent'
                }`}>
                  {resource.featured && (
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                      FEATURED
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${getTypeColor(resource.type)}`}>
                      {getTypeLabel(resource.type)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                    {resource.title}
                  </h3>

                  <p className="text-slate dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{resource.downloadCount}</span>
                    </div>
                    {resource.pages && (
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{resource.pages} pages</span>
                      </div>
                    )}
                    <div className="text-xs">{resource.fileSize}</div>
                  </div>

                  <button
                    onClick={() => {
                      if (resource.type === 'calculator') {
                        setRoiCalculatorOpen(true);
                      } else {
                        setSelectedResource(resource);
                      }
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    {resource.type === 'calculator' ? 'Open Calculator' : 'Download Now'}
                    {resource.type === 'calculator' ? <Calculator className="w-5 h-5" /> : <Download className="w-5 h-5" />}
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Want more exclusive content?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive monthly insights, industry trends, and early access to new resources.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-xl">
              Subscribe Now
            </button>
          </div>
        </ScrollReveal>
      </div>

      {selectedResource && (
        <Modal isOpen={true} onClose={() => setSelectedResource(null)}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              {(() => {
                const Icon = selectedResource.icon;
                return <Icon className="w-12 h-12 text-blue-600" />;
              })()}
              <div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${getTypeColor(selectedResource.type)}`}>
                  {getTypeLabel(selectedResource.type)}
                </span>
                <h3 className="text-2xl font-bold text-primary dark:text-white mt-2">
                  {selectedResource.title}
                </h3>
              </div>
            </div>

            <p className="text-slate dark:text-gray-300 mb-6">
              {selectedResource.description}
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary dark:text-white mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary dark:text-white mb-2">
                  Industry
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                  <option>Healthcare</option>
                  <option>Financial Services</option>
                  <option>Manufacturing</option>
                  <option>Technology</option>
                  <option>Retail</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                Download Now
                <Download className="w-5 h-5" />
              </button>
            </form>
          </div>
        </Modal>
      )}

      {roiCalculatorOpen && (
        <Modal isOpen={true} onClose={() => setRoiCalculatorOpen(false)}>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-6">
              ROI Calculator
            </h3>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary dark:text-white mb-2">
                    Current IT Staff Size
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 25"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary dark:text-white mb-2">
                    Average Annual Downtime (hours)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 48"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary dark:text-white mb-2">
                    Cost per Hour of Downtime ($)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 50000"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary dark:text-white mb-2">
                    Monthly IT Operations Budget ($)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 150000"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-lg text-primary dark:text-white mb-4">Estimated Annual Savings</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-slate dark:text-gray-400 mb-1">Reduced Downtime</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">$1.68M</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate dark:text-gray-400 mb-1">Efficiency Gains</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">$540K</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate dark:text-gray-400 mb-1">Total ROI</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">285%</div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors">
                Get Detailed Report
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
