import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface CTAButtonProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  withArrow?: boolean;
  className?: string;
}

export default function CTAButton({
  to,
  children,
  variant = 'primary',
  withArrow = true,
  className = '',
}: CTAButtonProps) {
  const styles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
  }[variant];

  return (
    <Link to={to} className={`${styles} ${className}`}>
      {children}
      {withArrow && <ArrowRight size={18} aria-hidden="true" />}
    </Link>
  );
}
