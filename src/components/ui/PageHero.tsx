import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  breadcrumbs?: Crumb[];
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHero({ breadcrumbs, eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 px-6 lg:px-8 overflow-hidden bg-[#0B1F2A]">

      {/* Subtle blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.06) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Top-right radial glow */}
      <div
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.13) 0%,transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto">

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  {index > 0 && <ChevronRight size={14} aria-hidden="true" />}
                  {crumb.to ? (
                    <Link
                      to={crumb.to}
                      className="hover:text-[#3B82F6] transition-colors duration-150"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white font-medium">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] mb-4">
            {eyebrow}
          </p>
        )}

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            {description}
          </p>
        )}

        {/* Optional slot */}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
