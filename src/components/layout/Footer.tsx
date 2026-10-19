import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { site } from '../../config/site';

const socialIcons: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  twitter: Twitter,
  x: Twitter,
  facebook: Facebook,
  instagram: Instagram,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const siteLinks = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Products', path: '/products' },
    { label: 'Industries', path: '/industries' },
    { label: 'About', path: '/about' },
    { label: 'Resources', path: '/resources' },
    { label: 'Security', path: '/security' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-primary dark:bg-gray-950 text-white py-16 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-dark opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <img
                src="/artboard_1_copy_13.png"
                width={1001}
                height={1001}
                alt="Solvia Technologies logo"
                className="h-12 w-auto"
              />
              <span className="font-bold leading-tight">
                <span className="block text-xl uppercase tracking-tight">Solvia</span>
                <span className="block text-xs text-gray-400 font-semibold tracking-widest uppercase">
                  Technologies
                </span>
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md mb-4">{site.positioning}</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              {site.legalName} is a Nigerian technology company operating under the Solvia Technologies brand.
            </p>
            <p className="text-sm text-gray-400 mt-2">Nigeria</p>
            <div className="mt-6 space-y-2">
              {site.contact.email && (
                <p className="text-sm text-gray-300">
                  <a href={`mailto:${site.contact.email}`} className="hover-accent transition-colors">
                    {site.contact.email}
                  </a>
                </p>
              )}
              {site.contact.phone && (
                <p className="text-sm text-gray-300">
                  <a href={`tel:${site.contact.phone}`} className="hover-accent transition-colors">
                    {site.contact.phoneDisplay ?? site.contact.phone}
                  </a>
                </p>
              )}
            </div>
            {(site.contact.email || site.socials.length > 0) && (
              <div className="flex items-center gap-4 mt-4">
                {site.contact.email && (
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-gray-300 hover-accent transition-colors"
                    aria-label={`Email ${site.brand}`}
                  >
                    <Mail size={20} aria-hidden="true" />
                  </a>
                )}
                {site.contact.phone && (
                  <a
                    href={`tel:${site.contact.phone}`}
                    className="text-gray-300 hover-accent transition-colors"
                    aria-label={`Call ${site.brand}`}
                  >
                    <Phone size={20} aria-hidden="true" />
                  </a>
                )}
                {site.socials.map((social) => {
                  const Icon = socialIcons[social.label.toLowerCase()] ?? Linkedin;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover-accent transition-colors"
                      aria-label={`${site.brand} on ${social.label}`}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-lg font-semibold mb-4">Product</h2>
            <ul className="space-y-2 mb-8">
              <li>
                <Link to="/products/safeops-hse" className="text-gray-300 hover-accent transition-colors">
                  SafeOps HSE
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover-accent transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover-accent transition-colors">
                  Request a Demo
                </Link>
              </li>
            </ul>
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>&copy; {currentYear} {site.brand}. All rights reserved.</p>
          <p>{site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
