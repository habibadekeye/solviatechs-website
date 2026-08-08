import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative pt-36 pb-24 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh dark:gradient-mesh-dark" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F9FA] via-white to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 -z-10" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#9CAF2E]/10 dark:bg-[#9CAF2E]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#9CAF2E]/8 dark:bg-[#7D8F1E]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#9CAF2E]/10 dark:bg-[#9CAF2E]/20 text-lime-800 dark:text-[#9CAF2E] mb-8 animate-fade-in-up">
          <Sparkles size={16} />
          Intelligent Software for Regulated Industries
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="gradient-text dark:text-white">Building intelligent systems for</span>{' '}
          <span className="gradient-accent-text">performance, compliance,</span>{' '}
          <span className="gradient-text dark:text-white">and sustainable growth</span>
        </h1>

        <p className="text-lg lg:text-xl text-slate dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Solvia Systems & Innovations Ltd. designs and builds software systems that help organizations
          understand their operations, improve performance, manage risk, ensure compliance,
          and support long-term growth in complex, regulated environments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={scrollToContact}
            className="btn-primary w-full sm:w-auto"
          >
            Start a conversation
            <ArrowRight size={20} />
          </button>
          <button
            onClick={scrollToServices}
            className="btn-secondary w-full sm:w-auto"
          >
            Explore our services
          </button>
        </div>
      </div>
    </section>
  );
}
