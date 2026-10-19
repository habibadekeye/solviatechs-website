import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import SafeOps from './pages/SafeOps';
import Industries from './pages/Industries';
import IndustryPage from './pages/IndustryPage';
import About from './pages/About';
import Resources from './pages/Resources';
import ArticlePage from './pages/ArticlePage';
import Security from './pages/Security';
import ContactPage from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { reportWebVitals } from './utils/performanceMonitor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/solutions', element: <Solutions /> },
      { path: '/products', element: <Products /> },
      { path: '/products/safeops-hse', element: <SafeOps /> },
      { path: '/industries', element: <Industries /> },
      { path: '/industries/:slug', element: <IndustryPage /> },
      { path: '/about', element: <About /> },
      { path: '/resources', element: <Resources /> },
      { path: '/resources/:slug', element: <ArticlePage /> },
      { path: '/security', element: <Security /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/privacy', element: <Privacy /> },
      { path: '/terms', element: <Terms /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    reportWebVitals();
  }, []);

  return <RouterProvider router={router} />;
}
