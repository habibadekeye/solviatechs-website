import type { LucideIcon } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <ScrollReveal>
      <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
        {eyebrow && (
          <div className={`section-label ${centered ? 'mx-auto' : ''}`}>
            {EyebrowIcon && <EyebrowIcon size={16} />}
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold gradient-text dark:text-white mb-4">{title}</h2>
        {description && (
          <p className={`text-lg text-slate dark:text-gray-300 max-w-2xl ${centered ? 'mx-auto' : ''}`}>
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
