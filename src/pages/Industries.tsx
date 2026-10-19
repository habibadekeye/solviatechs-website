import { Fuel, HardHat, Factory, Mountain, Building2 } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/ui/CTASection';
import { IndustryCard } from '../components/ui/Cards';

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries | Solvia Technologies"
        description="Solvia Technologies builds HSE, compliance and operational performance systems for oil & gas, energy, construction, manufacturing, mining and other regulated industries."
        path="/industries"
      />

      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
        eyebrow="Industries"
        title="Industries we serve"
        description="We work with organizations where operational complexity, safety and compliance are defining characteristics — not edge cases."
      />

      <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <IndustryCard
            icon={Fuel}
            title="Oil & Gas & Energy"
            description="HSE, compliance, operational performance and field management systems for complex energy environments."
            to="/industries/oil-gas"
          />
          <IndustryCard
            icon={HardHat}
            title="Construction & Infrastructure"
            description="Safety management, inspections and multi-site compliance for construction and infrastructure projects."
            to="/industries/construction"
            delay={100}
          />
          <IndustryCard
            icon={Factory}
            title="Manufacturing"
            description="Integrated HSE, audit and performance management for plants, production lines and industrial facilities."
            to="/industries/manufacturing"
            delay={200}
          />
          <IndustryCard
            icon={Mountain}
            title="Mining & Extractive Industries"
            description="Incident, risk and permit-to-work management for remote, high-risk extractive operations."
            to="/industries/mining"
            delay={300}
          />
          <IndustryCard
            icon={Building2}
            title="Other Regulated Industries"
            description="Organizations across sectors facing strict regulatory oversight, audit requirements and governance standards — systems designed for traceability and accountability."
            to="/contact"
            delay={400}
          />
        </div>
      </section>

      <CTASection
        title="Operate in a complex or regulated environment?"
        description="Tell us about your operations and reporting requirements. We'll discuss how SafeOps HSE or a purpose-built system could fit."
        primaryLabel="Request a Demo"
        primaryTo="/contact"
        secondaryLabel="Explore SafeOps"
        secondaryTo="/products/safeops-hse"
      />
    </>
  );
}
