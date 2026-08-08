import { ReactNode, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  placeholder?: ReactNode;
  rootMargin?: string;
}

export default function LazySection({
  children,
  className = '',
  placeholder,
  rootMargin = '200px',
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { rootMargin, triggerOnce: true });

  return (
    <div ref={ref} className={className}>
      {isInView ? children : placeholder || <div className="min-h-[200px]" />}
    </div>
  );
}
