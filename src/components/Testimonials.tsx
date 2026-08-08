import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'VP of Operations',
    company: 'Energy Solutions Inc.',
    content: 'Solvia Systems & Innovations Ltd. transformed our compliance management process. What used to take our team days now takes hours. The system has become indispensable to our operations.',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Safety Director',
    company: 'Industrial Systems Corp',
    content: 'The HSE platform has dramatically improved our incident reporting and risk management. Our teams actually enjoy using it, which is rare for enterprise software.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'CTO',
    company: 'Infrastructure Partners',
    content: 'Their approach to custom software development is refreshingly practical. They built exactly what we needed, not what they wanted to sell us. The system has scaled beautifully with our growth.',
    rating: 5,
  },
  {
    name: 'Michael Thompson',
    role: 'Operations Manager',
    company: 'Facility Management Group',
    content: 'Real-time dashboards have given us visibility we never had before. Decision-making is faster and more data-driven across all levels of the organization.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-slate dark:text-gray-300 max-w-2xl mx-auto">
              Hear from organizations we've partnered with
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            className="relative bg-soft-white dark:bg-gray-800 p-8 md:p-12 rounded-lg"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Quote className="absolute top-8 left-8 text-accent opacity-20" size={48} />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-lime-700 dark:text-accent fill-lime-700 dark:fill-accent" size={24} />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-primary dark:text-white text-center mb-8 font-medium leading-relaxed min-h-[120px] flex items-center justify-center">
                "{currentTestimonial.content}"
              </p>

              <div className="text-center">
                <p className="font-bold text-primary dark:text-white text-lg">
                  {currentTestimonial.name}
                </p>
                <p className="text-slate dark:text-gray-300">
                  {currentTestimonial.role}
                </p>
                <p className="text-accent font-medium">{currentTestimonial.company}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-accent w-8'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
