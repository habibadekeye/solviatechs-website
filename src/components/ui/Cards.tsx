import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  to?: string;
  delay?: number;
}

export function CapabilityCard({ icon: Icon, title, description, to, delay = 0 }: CapabilityCardProps) {
  const body = (
    <>
      <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <Icon className="text-blue-600 dark:text-[#3B82F6]" size={24} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{title}</h3>
      <p className="text-slate dark:text-gray-300 leading-relaxed">{description}</p>
      {to && (
        <span className="mt-5 inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-[gap] duration-200">
          Learn more <ArrowRight size={16} aria-hidden="true" />
        </span>
      )}
    </>
  );

  return (
    <ScrollReveal delay={delay}>
      {to ? (
        <Link to={to} className="card-base card-hover p-8 block group h-full">
          {body}
        </Link>
      ) : (
        <div className="card-base card-hover p-8 group h-full">{body}</div>
      )}
    </ScrollReveal>
  );
}

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  to?: string;
  delay?: number;
}

export function IndustryCard({ icon: Icon, title, description, to, delay = 0 }: IndustryCardProps) {
  const body = (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <Icon className="text-blue-600 dark:text-[#3B82F6]" size={28} aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-primary dark:text-white">{title}</h3>
      </div>
      <p className="text-slate dark:text-gray-300 leading-relaxed">{description}</p>
      {to && (
        <span className="mt-5 inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-[gap] duration-200">
          Explore <ArrowRight size={16} aria-hidden="true" />
        </span>
      )}
    </>
  );

  return (
    <ScrollReveal delay={delay}>
      {to ? (
        <Link to={to} className="card-base card-hover p-8 block group h-full">
          {body}
        </Link>
      ) : (
        <div className="card-base card-hover p-8 group h-full">{body}</div>
      )}
    </ScrollReveal>
  );
}
