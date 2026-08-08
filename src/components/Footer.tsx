export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Products', id: 'products' },
    { label: 'Industries', id: 'industries' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-primary dark:bg-gray-950 text-white py-16 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-dark opacity-30" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <img
                src="/artboard_1_copy_13.png"
                alt="Solvia Systems & Innovations Ltd. Logo"
                className="h-12 block"
              />
              <span>Solvia Systems & Innovations Ltd.</span>
            </h3>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
              Building intelligent software systems for performance, compliance, and sustainable growth
              in complex, regulated environments.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 dark:text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 dark:text-gray-400 hover:text-accent transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-gray-300 dark:text-gray-400 hover:text-accent transition-colors">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 text-center text-gray-300 dark:text-gray-400">
          <p>&copy; {currentYear} Solvia Systems & Innovations Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
