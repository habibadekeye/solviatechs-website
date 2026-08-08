import { useState } from 'react';
import { ArrowRight, TrendingUp, Clock, Award, Play, ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Modal from './Modal';

interface Metrics {
  [key: string]: string | number;
}

interface CaseStudy {
  id: string;
  title: string;
  client_name: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics_before: Metrics;
  metrics_after: Metrics;
  roi_percentage: number;
  implementation_time: string;
  testimonial: string;
  testimonial_author: string;
  testimonial_role: string;
  featured: boolean;
  image_url: string;
  video_url?: string;
}

const mockCaseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Healthcare Provider Achieves 99.9% Uptime',
    client_name: 'Regional Medical Center',
    industry: 'Healthcare',
    challenge: 'Frequent system outages were disrupting patient care and causing data integrity issues. Legacy systems were failing during peak hours, putting patient safety at risk.',
    solution: 'Implemented SafeOps Monitoring Suite with automated failover and real-time incident response. Upgraded infrastructure with redundancy protocols and deployed predictive maintenance systems.',
    results: 'Eliminated critical downtime, improved patient data access by 85%, and reduced IT incident response time from hours to minutes. System reliability increased dramatically with zero patient care disruptions.',
    metrics_before: {
      'Uptime': '94.2%',
      'Incident Response': '3.5 hours',
      'System Failures/Month': '12',
      'Patient Data Access': '72%'
    },
    metrics_after: {
      'Uptime': '99.9%',
      'Incident Response': '8 minutes',
      'System Failures/Month': '0.2',
      'Patient Data Access': '99.8%'
    },
    roi_percentage: 340,
    implementation_time: '6 weeks',
    testimonial: 'AffiniPay transformed our IT operations. We now provide uninterrupted care to our patients with complete confidence in our systems.',
    testimonial_author: 'Dr. Sarah Chen',
    testimonial_role: 'Chief Medical Information Officer',
    featured: true,
    image_url: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
    video_url: ''
  },
  {
    id: '2',
    title: 'Financial Services Firm Reduces Compliance Risks by 90%',
    client_name: 'Premier Capital Group',
    industry: 'Financial Services',
    challenge: 'Struggling with complex regulatory compliance across multiple jurisdictions. Manual audit processes were time-consuming and error-prone, creating significant legal exposure.',
    solution: 'Deployed comprehensive compliance automation platform with AI-powered risk detection. Integrated real-time monitoring across all systems with automated reporting and audit trails.',
    results: 'Automated 90% of compliance checks, reduced audit preparation time by 75%, and achieved perfect regulatory compliance across all jurisdictions. Zero compliance violations in 18 months.',
    metrics_before: {
      'Compliance Violations': '18/year',
      'Audit Preparation': '320 hours',
      'Manual Checks': '95%',
      'Regulatory Fines': '$450K'
    },
    metrics_after: {
      'Compliance Violations': '0/year',
      'Audit Preparation': '80 hours',
      'Manual Checks': '10%',
      'Regulatory Fines': '$0'
    },
    roi_percentage: 285,
    implementation_time: '8 weeks',
    testimonial: 'The compliance automation has been a game-changer. We sleep better knowing our systems are continuously monitoring and preventing issues before they become problems.',
    testimonial_author: 'Michael Rodriguez',
    testimonial_role: 'Head of Compliance',
    featured: true,
    image_url: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '3',
    title: 'Manufacturing Company Optimizes Production by 45%',
    client_name: 'TechBuild Industries',
    industry: 'Manufacturing',
    challenge: 'Production inefficiencies and equipment downtime were causing missed deadlines and revenue loss. No visibility into production bottlenecks or predictive maintenance capabilities.',
    solution: 'Implemented IoT-enabled monitoring across all production lines with predictive analytics. Deployed real-time dashboards and automated alert systems for proactive maintenance scheduling.',
    results: 'Increased production efficiency by 45%, reduced equipment downtime by 68%, and improved on-time delivery from 73% to 97%. Maintenance costs decreased by 35% through predictive interventions.',
    metrics_before: {
      'Production Efficiency': '67%',
      'Equipment Downtime': '220 hrs/month',
      'On-Time Delivery': '73%',
      'Maintenance Costs': '$180K/month'
    },
    metrics_after: {
      'Production Efficiency': '97%',
      'Equipment Downtime': '70 hrs/month',
      'On-Time Delivery': '97%',
      'Maintenance Costs': '$117K/month'
    },
    roi_percentage: 412,
    implementation_time: '10 weeks',
    testimonial: 'The visibility and predictive capabilities have revolutionized our operations. We are now proactive instead of reactive, and our customers have noticed the difference.',
    testimonial_author: 'James Patterson',
    testimonial_role: 'VP of Operations',
    featured: false,
    image_url: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [expandedCases, setExpandedCases] = useState<Set<string>>(new Set());
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const industries = ['All', ...Array.from(new Set(mockCaseStudies.map(cs => cs.industry)))];

  const filteredCases = activeFilter === 'All'
    ? mockCaseStudies
    : mockCaseStudies.filter(cs => cs.industry === activeFilter);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedCases);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCases(newExpanded);
  };

  return (
    <section id="case-studies" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-slate dark:text-gray-300 max-w-3xl mx-auto">
              Real results from real clients. See how we've helped organizations transform their operations and achieve measurable success.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === industry
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {filteredCases.map((caseStudy, index) => {
            const isExpanded = expandedCases.has(caseStudy.id);

            return (
              <ScrollReveal key={caseStudy.id} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={caseStudy.image_url}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover"
                      />
                      {caseStudy.featured && (
                        <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          Featured Case
                        </div>
                      )}
                      {caseStudy.video_url && (
                        <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                            <Play className="w-10 h-10 text-blue-600 ml-1" />
                          </div>
                        </button>
                      )}
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        <span>{caseStudy.industry}</span>
                        <span>•</span>
                        <span>{caseStudy.client_name}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                        {caseStudy.title}
                      </h3>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                            <TrendingUp className="w-5 h-5" />
                            <span className="text-sm font-medium">ROI</span>
                          </div>
                          <div className="text-3xl font-bold text-primary dark:text-white">
                            {caseStudy.roi_percentage}%
                          </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-1">
                            <Clock className="w-5 h-5" />
                            <span className="text-sm font-medium">Timeline</span>
                          </div>
                          <div className="text-xl font-bold text-primary dark:text-white">
                            {caseStudy.implementation_time}
                          </div>
                        </div>
                      </div>

                      <p className="text-slate dark:text-gray-300 mb-4">
                        {caseStudy.challenge.substring(0, 150)}...
                      </p>

                      <button
                        onClick={() => toggleExpanded(caseStudy.id)}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                      >
                        {isExpanded ? 'Show Less' : 'View Full Case Study'}
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-gray-200 dark:border-gray-700 p-8 bg-gray-50 dark:bg-gray-900/50">
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="text-lg font-bold text-primary dark:text-white mb-3">The Challenge</h4>
                          <p className="text-slate dark:text-gray-300 mb-6">{caseStudy.challenge}</p>

                          <h4 className="text-lg font-bold text-primary dark:text-white mb-3">The Solution</h4>
                          <p className="text-slate dark:text-gray-300">{caseStudy.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-primary dark:text-white mb-3">The Results</h4>
                          <p className="text-slate dark:text-gray-300 mb-6">{caseStudy.results}</p>

                          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                            <div className="flex items-start gap-3 mb-4">
                              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                {caseStudy.testimonial_author.charAt(0)}
                              </div>
                              <div>
                                <p className="font-bold text-primary dark:text-white">{caseStudy.testimonial_author}</p>
                                <p className="text-sm text-slate dark:text-gray-400">{caseStudy.testimonial_role}</p>
                              </div>
                            </div>
                            <p className="text-slate dark:text-gray-300 italic">"{caseStudy.testimonial}"</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="text-xl font-bold text-primary dark:text-white mb-6 text-center">
                          Before & After Metrics
                        </h4>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="text-sm font-bold text-red-600 dark:text-red-400 mb-4 uppercase tracking-wider">Before</h5>
                            <div className="space-y-3">
                              {Object.entries(caseStudy.metrics_before).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/10 rounded-lg">
                                  <span className="text-slate dark:text-gray-300 font-medium">{key}</span>
                                  <span className="text-primary dark:text-white font-bold">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="text-sm font-bold text-green-600 dark:text-green-400 mb-4 uppercase tracking-wider">After</h5>
                            <div className="space-y-3">
                              {Object.entries(caseStudy.metrics_after).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                                  <span className="text-slate dark:text-gray-300 font-medium">{key}</span>
                                  <span className="text-primary dark:text-white font-bold">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex justify-center">
                        <button
                          onClick={() => setSelectedCase(caseStudy)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium inline-flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl"
                        >
                          Download Full Case Study
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {selectedCase && (
        <Modal isOpen={true} onClose={() => setSelectedCase(null)}>
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
              Download Case Study
            </h3>
            <p className="text-slate dark:text-gray-300 mb-6">
              Get the full detailed case study for {selectedCase.title}. Enter your email to receive the PDF.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors"
              >
                Download Case Study
              </button>
            </form>
          </div>
        </Modal>
      )}
    </section>
  );
}
