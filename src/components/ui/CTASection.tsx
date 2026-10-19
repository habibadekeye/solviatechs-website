import ScrollReveal from '../ScrollReveal';
import CTAButton from './CTAButton';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTASection({
  title = "Let's discuss your requirements.",
  description = 'Tell us what you are trying to improve, manage or digitize. We will review your requirements and discuss the appropriate approach.',
  primaryLabel = 'Request a Demo',
  primaryTo = '/contact',
  secondaryLabel = 'Talk to Solvia',
  secondaryTo = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-20 px-6 lg:px-8 bg-primary dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-dark opacity-30 pointer-events-none" />
      <ScrollReveal>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton to={primaryTo} variant="accent">
              {primaryLabel}
            </CTAButton>
            {secondaryLabel && (
              <CTAButton to={secondaryTo} variant="secondary">
                {secondaryLabel}
              </CTAButton>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
