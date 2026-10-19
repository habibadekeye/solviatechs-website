import { useEffect } from 'react';
import { site } from '../config/site';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Optional page-specific JSON-LD structured data (object will be serialized). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    const match = selector.match(/\[(name|property)="(.+?)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
}

export default function Seo({ title, description, path, jsonLd }: SeoProps) {
  useEffect(() => {
    const canonicalUrl = `${site.url}${path}`;

    document.title = title;

    upsertMeta('meta[name="description"]', { content: description });
    upsertMeta('meta[property="og:title"]', { content: title });
    upsertMeta('meta[property="og:description"]', { content: description });
    upsertMeta('meta[property="og:url"]', { content: canonicalUrl });
    upsertMeta('meta[property="og:type"]', { content: 'website' });
    upsertMeta('meta[property="og:site_name"]', { content: site.brand });
    upsertMeta('meta[name="twitter:card"]', { content: 'summary' });
    upsertMeta('meta[name="twitter:title"]', { content: title });
    upsertMeta('meta[name="twitter:description"]', { content: description });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const existing = document.querySelectorAll('script[data-page-jsonld]');
    existing.forEach((node) => node.remove());

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-page-jsonld', 'true');
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }
  }, [title, description, path, jsonLd]);

  return null;
}
