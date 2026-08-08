import { useEffect, useState, useRef } from 'react';
import { Users, Award, Building, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: <Users size={32} />, value: 500, suffix: '+', label: 'Clients Served' },
  { icon: <Award size={32} />, value: 1200, suffix: '+', label: 'Projects Completed' },
  { icon: <Building size={32} />, value: 15, suffix: '', label: 'Industries Served' },
  { icon: <Clock size={32} />, value: 10, suffix: '+', label: 'Years of Experience' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-5xl font-bold text-primary dark:text-accent">
      {count}
      {suffix}
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-soft-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-label mx-auto">
              <Award size={16} />
              Our Track Record
            </div>
            <h2 className="text-4xl font-bold gradient-text dark:text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-slate dark:text-gray-300 max-w-2xl mx-auto">
              Delivering measurable results across industries for over a decade
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="card-base card-hover p-8 text-center group">
                <div className="text-lime-700 dark:text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-slate dark:text-gray-300 mt-2 font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
