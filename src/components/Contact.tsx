import { useState } from 'react';
import { Mail, Building2, User, MessageSquare, Send, AlertCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import Toast from './Toast';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [toastMessage, setToastMessage] = useState('');

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return undefined;
      case 'company':
        if (!value.trim()) return 'Company name is required';
        if (value.trim().length < 2) return 'Company name must be at least 2 characters';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      company: true,
      message: true,
    });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setToastType('success');
      setToastMessage('Thank you for your message. We will respond within one business day.');
      setShowToast(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setToastType('error');
      setToastMessage('An error occurred. Please try again or contact us directly.');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">
            <Mail size={16} />
            Get in Touch
          </div>
          <h2 className="text-4xl font-bold gradient-text dark:text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-slate dark:text-gray-300 max-w-2xl mx-auto">
            Discuss how Solvia Systems & Innovations Ltd. can support your operational objectives.
            We work with organizations ready to invest in structured, long-term solutions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-white mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate dark:text-gray-400" size={20} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all ${
                    touched.name && errors.name
                      ? 'border-red-500 focus:ring-red-200 dark:border-red-500 animate-shake'
                      : 'border-gray-200 dark:border-gray-700 focus:ring-accent dark:bg-gray-800 dark:text-white'
                  }`}
                  placeholder="John Smith"
                />
              </div>
              {touched.name && errors.name && (
                <div className="mt-2 flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                  <AlertCircle size={14} />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-white mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate dark:text-gray-400" size={20} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all ${
                    touched.email && errors.email
                      ? 'border-red-500 focus:ring-red-200 dark:border-red-500 animate-shake'
                      : 'border-gray-200 dark:border-gray-700 focus:ring-accent dark:bg-gray-800 dark:text-white'
                  }`}
                  placeholder="john.smith@company.com"
                />
              </div>
              {touched.email && errors.email && (
                <div className="mt-2 flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                  <AlertCircle size={14} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-primary dark:text-white mb-2">
              Company
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate dark:text-gray-400" size={20} />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all ${
                  touched.company && errors.company
                    ? 'border-red-500 focus:ring-red-200 dark:border-red-500 animate-shake'
                    : 'border-gray-200 dark:border-gray-700 focus:ring-accent dark:bg-gray-800 dark:text-white'
                }`}
                placeholder="Your Organization"
              />
            </div>
            {touched.company && errors.company && (
              <div className="mt-2 flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                <AlertCircle size={14} />
                <span>{errors.company}</span>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary dark:text-white mb-2">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-slate dark:text-gray-400" size={20} />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={6}
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all resize-none ${
                  touched.message && errors.message
                    ? 'border-red-500 focus:ring-red-200 dark:border-red-500 animate-shake'
                    : 'border-gray-200 dark:border-gray-700 focus:ring-accent dark:bg-gray-800 dark:text-white'
                }`}
                placeholder="Tell us about your operational challenges and objectives..."
              />
            </div>
            {touched.message && errors.message && (
              <div className="mt-2 flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                <AlertCircle size={14} />
                <span>{errors.message}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary dark:bg-accent text-white dark:text-gray-900 py-4 rounded-xl font-semibold hover:shadow-accent hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white dark:border-gray-900 border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={20} />
              </>
            )}
          </button>
        </form>

        {showToast && (
          <Toast
            type={toastType}
            message={toastMessage}
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    </section>
  );
}
