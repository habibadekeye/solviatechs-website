import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { site } from '../../config/site';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium px-3 py-2 rounded-lg transition-colors duration-200 ${
      isActive
        ? 'text-accent bg-[#3B82F6]/10'
        : 'text-slate dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50'
    }`;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[box-shadow,color,background-color,border-color] duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'glass-nav shadow-md border-b border-gray-200/50 dark:border-gray-700/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src="/artboard_1_copy_13.png"
                width={1001}
                height={1001}
                alt="Solvia Technologies logo"
                className="h-10 w-auto"
                fetchPriority="high"
              />
              <span className="font-bold text-primary dark:text-white tracking-tight hidden sm:block">
                <span className="block text-base leading-tight uppercase">Solvia</span>
                <span className="block text-xs leading-tight text-slate dark:text-gray-400 font-semibold tracking-widest uppercase">
                  Technologies
                </span>
              </span>
            </Link>

            <nav aria-label="Primary navigation" className="hidden lg:flex items-center space-x-1">
              {site.nav.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={linkClass}
                >
                  {link.label}
                </NavLink>
              ))}

              <Link to="/contact" className="btn-accent !py-2.5 !px-5 ml-2">
                Request a Demo
              </Link>

              <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2" aria-hidden="true" />

              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? (
                  <Sun className="text-yellow-400" size={20} aria-hidden="true" />
                ) : (
                  <Moon className="text-gray-700 dark:text-gray-300" size={20} aria-hidden="true" />
                )}
              </button>
            </nav>

            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? (
                  <Sun className="text-yellow-400" size={20} aria-hidden="true" />
                ) : (
                  <Moon className="text-gray-700 dark:text-gray-300" size={20} aria-hidden="true" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-primary dark:text-white"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav aria-label="Mobile navigation" className="glass-nav border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="px-6 py-4 space-y-1">
              {site.nav.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `block font-medium transition-colors duration-200 py-3 px-4 rounded-xl ${
                      isActive
                        ? 'text-accent bg-[#3B82F6]/10'
                        : 'text-slate dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-accent w-full justify-center mt-3">
                Request a Demo
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
