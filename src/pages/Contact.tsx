import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import { site } from '../config/site';

function ContactHero() {
  return (
    <section className="relative pt-36 pb-20 px-6 lg:px-8 overflow-hidden bg-[#0B1F2A]">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      {/* Soft radial glow */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative max-w-4xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
            <li className="flex items-center gap-1">
              <Link to="/" className="hover:text-[#3B82F6] transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page" className="text-white font-medium">Contact</span>
            </li>
          </ol>
        </nav>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] mb-4">
          Get in touch
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Let's discuss your requirements.
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
          Tell us what you are trying to improve, manage or digitize. We'll review your
          requirements and discuss the appropriate approach.
        </p>
      </div>
    </section>
  );
}

export default function Contact() {
  const contactItems = [
    site.contact.email && {
      icon: Mail,
      label: 'Email',
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
    site.contact.phone && {
      icon: Phone,
      label: 'Phone',
      value: site.contact.phoneDisplay ?? site.contact.phone,
      href: `tel:${site.contact.phone}`,
    },
    { icon: MapPin, label: 'Location', value: 'Nigeria' },
    {
      icon: Clock,
      label: 'Response time',
      value: 'We aim to respond to inquiries within one business day.',
    },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href?: string }[];

  return (
    <>
      <Seo
        title="Contact | Solvia Technologies"
        description="Contact Solvia Technologies to request a SafeOps HSE demo, discuss custom software, performance analytics, compliance systems or digital transformation."
        path="/contact"
      />

      <ContactHero />

      {/* ── Main section ─────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8 bg-[#F8FAFC] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* Left panel — contact details (2/5) */}
          <ScrollReveal className="lg:col-span-2 w-full">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary dark:text-white mb-3">Talk to us</h2>
                <p className="text-slate dark:text-gray-300 leading-relaxed">
                  Whether you are evaluating SafeOps HSE, considering a custom system or exploring
                  how to modernize manual processes, the right starting point is a conversation
                  about your requirements.
                </p>
              </div>

              <ul className="space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="w-11 h-11 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center flex-shrink-0">
                        <Icon className="text-[#2563EB] dark:text-[#3B82F6]" size={20} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate dark:text-gray-400 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-accent hover:underline break-all text-sm">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-primary dark:text-gray-200 text-sm">{item.value}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Divider + note */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-slate dark:text-gray-400 leading-relaxed">
                  For general enquiries, product information or partnership discussions, feel free
                  to reach out directly or use the form.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right panel — form (3/5) */}
          <ScrollReveal delay={150} className="lg:col-span-3 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-card p-7 sm:p-10">
              <div className="mb-7">
                <h2 className="text-xl font-bold text-primary dark:text-white">Request a Consultation</h2>
                <p className="text-sm text-slate dark:text-gray-400 mt-1">
                  Fields marked with * are required.
                </p>
              </div>
              <ContactForm />
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
