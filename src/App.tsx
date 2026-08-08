import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FocusAreas from './components/FocusAreas';
import SafeOpsHighlight from './components/SafeOpsHighlight';
import About from './components/About';
import Statistics from './components/Statistics';
import Services from './components/Services';
import Products from './components/Products';
import ProductDemo from './components/ProductDemo';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import LazySection from './components/LazySection';
import { reportWebVitals } from './utils/performanceMonitor';

function App() {
  useEffect(() => {
    reportWebVitals();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <FocusAreas />
        <SafeOpsHighlight />
        <About />
        <Statistics />
        <Services />
        <Products />
        <LazySection>
          <ProductDemo />
        </LazySection>
        <LazySection>
          <Industries />
        </LazySection>
        <LazySection>
          <CaseStudies />
        </LazySection>
        <LazySection>
          <Testimonials />
        </LazySection>
        <LazySection>
          <Team />
        </LazySection>
        <LazySection>
          <Resources />
        </LazySection>
        <LazySection>
          <FAQ />
        </LazySection>
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
