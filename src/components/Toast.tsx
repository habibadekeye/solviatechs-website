import { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ type, message, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      role={type === 'error' ? 'alert' : 'status'}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      className="fixed top-6 right-6 left-6 sm:left-auto z-50 animate-slide-in-right"
    >
      <div
        className={`flex items-start gap-3 px-6 py-4 rounded-lg shadow-lg max-w-md ${
          type === 'success'
            ? 'bg-green-50 dark:bg-green-900 dark:bg-opacity-90 border border-green-200 dark:border-green-700'
            : 'bg-red-50 dark:bg-red-900 dark:bg-opacity-90 border border-red-200 dark:border-red-700'
        }`}
      >
        {type === 'success' ? (
          <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0" size={24} aria-hidden="true" />
        ) : (
          <XCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={24} aria-hidden="true" />
        )}
        <p
          className={`flex-1 ${
            type === 'success'
              ? 'text-green-800 dark:text-green-200'
              : 'text-red-800 dark:text-red-200'
          }`}
        >
          {message}
        </p>
        <button
          onClick={onClose}
          aria-label="Dismiss notification"
          className={`flex-shrink-0 ${
            type === 'success'
              ? 'text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200'
              : 'text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200'
          }`}
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
