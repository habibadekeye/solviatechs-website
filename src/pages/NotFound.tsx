import Seo from '../components/Seo';
import CTAButton from '../components/ui/CTAButton';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Solvia Technologies"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <section className="pt-40 pb-32 px-6 lg:px-8 text-center">
        <p className="text-7xl font-extrabold gradient-accent-text mb-6">404</p>
        <h1 className="text-3xl font-bold gradient-text dark:text-white mb-4">Page not found</h1>
        <p className="text-lg text-slate dark:text-gray-300 mb-10 max-w-md mx-auto">
          The page you are looking for doesn't exist or may have been moved.
        </p>
        <CTAButton to="/">Back to Home</CTAButton>
      </section>
    </>
  );
}
