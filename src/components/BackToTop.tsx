import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#0B1F2A] to-[#334155] dark:from-[#3B82F6] dark:to-[#2563EB] text-white dark:text-gray-900 rounded-full flex items-center justify-center shadow-card-hover hover:scale-110 active:scale-95 transition-[transform,color,background-color,box-shadow,opacity] duration-300 z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-16'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={24} aria-hidden="true" />
    </button>
  );
}
