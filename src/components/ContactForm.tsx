import { useState } from 'react';
import { Building2, User, Send, AlertCircle, Mail, ListFilter, ChevronDown } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import Toast from './Toast';
import { industries, interests } from '../config/site';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface FormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  interest: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  industry: '',
  interest: '',
  message: '',
};

const inputClass = (hasError: boolean) =>
  `w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-900 text-primary dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 border rounded-xl focus:ring-2 focus:border-transparent outline-none transition-[color,background-color,border-color,box-shadow] duration-200 ${
    hasError
      ? 'border-red-400 focus:ring-red-500/40 dark:border-red-500 bg-red-50/40 dark:bg-red-900/10'
      : 'border-gray-200 dark:border-gray-700 focus:ring-[#2563EB]'
  }`;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [toastMessage, setToastMessage] = useState('');

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Work email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return undefined;
      case 'company':
        if (!value.trim()) return 'Organization is required';
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
    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, email: true, company: true, industry: true, interest: true, message: true });

    if (!validateForm()) {
      // Focus the first invalid field so keyboard and screen-reader users land on the problem.
      const fieldOrder: (keyof FormData)[] = ['name', 'email', 'company', 'industry', 'interest', 'message'];
      const firstInvalid = fieldOrder.find((field) => validateField(field, formData[field]));
      if (firstInvalid) document.getElementById(firstInvalid)?.focus();
      return;
    }

    setIsSubmitting(true);

    // The contact_submissions table stores name/email/company/message.
    // Industry and interest selections are included in the message body so no
    // schema change is required.
    const messageParts = [
      formData.industry ? `Industry: ${formData.industry}` : '',
      formData.interest ? `Interested in: ${formData.interest}` : '',
      formData.message,
    ].filter(Boolean);

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: messageParts.join('\n\n'),
        },
      ]);

      if (error) throw error;

      setToastType('success');
      setToastMessage('Thank you for your message. We will respond within one business day.');
      setShowToast(true);
      setFormData(initialFormData);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name as keyof FormData, value) });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name as keyof FormData, value) });
  };

  const fieldError = (field: keyof FormData) =>
    touched[field] && errors[field] ? (
      <p id={`${field}-error`} className="mt-2 flex items-center gap-1 text-red-600 dark:text-red-400 text-sm" role="alert">
        <AlertCircle size={14} aria-hidden="true" />
        <span>{errors[field]}</span>
      </p>
    ) : null;

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-white mb-2">
              Full Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate dark:text-gray-400" size={20} aria-hidden="true" />
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                spellCheck={false}
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.name && errors.name)}
                aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                className={inputClass(Boolean(touched.name && errors.name))}
                placeholder="Your full name"
              />
            </div>
            {fieldError('name')}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-white mb-2">
              Work Email <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate dark:text-gray-400" size={20} aria-hidden="true" />
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                spellCheck={false}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.email && errors.email)}
                aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                className={inputClass(Boolean(touched.email && errors.email))}
                placeholder="you@company.com"
              />
            </div>
            {fieldError('email')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-primary dark:text-white mb-2">
              Organization <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate dark:text-gray-400" size={20} aria-hidden="true" />
              <input
                type="text"
                id="company"
                name="company"
                required
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.company && errors.company)}
                aria-describedby={touched.company && errors.company ? 'company-error' : undefined}
                className={inputClass(Boolean(touched.company && errors.company))}
                placeholder="Your organization"
              />
            </div>
            {fieldError('company')}
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-primary dark:text-white mb-2">
              Industry <span className="text-slate dark:text-gray-400 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <ListFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate dark:text-gray-400 pointer-events-none" size={20} aria-hidden="true" />
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputClass(false)} appearance-none pr-12 cursor-pointer`}
              >
                <option value="">Select your industry</option>
                {industries.map((industry) => (
                  <option key={industry.slug} value={industry.name}>
                    {industry.name}
                  </option>
                ))}
                <option value="Other regulated industry">Other regulated industry</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate dark:text-gray-400 pointer-events-none" size={18} aria-hidden="true" />
            </div>
          </div>
        </div>

        <fieldset>
          <legend className="block text-sm font-medium text-primary dark:text-white mb-3">
            What are you interested in? <span className="text-slate dark:text-gray-400 font-normal">(optional)</span>
          </legend>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <label
                key={interest}
                className={`cursor-pointer px-4 py-2 rounded-xl border text-sm font-medium transition-[color,background-color,border-color,box-shadow] duration-200 focus-within:ring-2 focus-within:ring-[#2563EB] focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900 ${
                  formData.interest === interest
                    ? 'border-accent bg-[#3B82F6]/10 text-primary dark:text-white'
                    : 'border-gray-200 dark:border-gray-700 text-slate dark:text-gray-300 hover:border-[#3B82F6]/60'
                }`}
              >
                <input
                  type="radio"
                  name="interest"
                  value={interest}
                  checked={formData.interest === interest}
                  onChange={handleChange}
                  className="sr-only"
                />
                {interest}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary dark:text-white mb-2">
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <div>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={5}
              aria-invalid={Boolean(touched.message && errors.message)}
              aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
              className={`${inputClass(Boolean(touched.message && errors.message))} resize-none pl-4`}
              placeholder="Tell us what you are trying to improve, manage or digitize…"
            />
          </div>
          {fieldError('message')}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary dark:bg-[#2563EB] text-white py-4 rounded-xl font-semibold hover:shadow-accent focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 outline-none transition-[color,background-color,box-shadow] duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-white dark:border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Request a Consultation
              <Send size={20} aria-hidden="true" />
            </>
          )}
        </button>
      </form>

      {showToast && (
        <Toast type={toastType} message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </>
  );
}
