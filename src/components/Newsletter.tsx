import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import Toast from './Toast';
import ScrollReveal from './ScrollReveal';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setToastType('error');
      setToastMessage('Please enter a valid email address');
      setShowToast(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('newsletter_subscriptions').insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setToastType('error');
          setToastMessage('This email is already subscribed');
        } else {
          throw error;
        }
      } else {
        setToastType('success');
        setToastMessage('Thank you for subscribing! Check your email for updates.');
        setEmail('');
      }
      setShowToast(true);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setToastType('error');
      setToastMessage('An error occurred. Please try again.');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-primary dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-dark opacity-50" />
      <div className="relative max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="text-lime-700 dark:text-accent" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to receive insights on operational excellence, compliance management, and
              industry best practices.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-primary dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-accent hover:bg-[#7D8F1E] text-gray-900 rounded-xl font-semibold hover:shadow-accent transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          </div>
        </ScrollReveal>
      </div>

      {showToast && (
        <Toast type={toastType} message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </section>
  );
}
