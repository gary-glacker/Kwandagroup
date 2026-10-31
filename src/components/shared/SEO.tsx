import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  schema?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  image = 'https://kwandagroup.rw/og-image.png',
  url = 'https://kwandagroup.rw',
  type = 'website',
  noindex = false,
  schema,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      if (!content) return;
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', type, true);
    setMeta('og:image', image, true);
    setMeta('og:url', url, true);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // JSON-LD schema
    if (schema) {
      let script = document.querySelector('script[data-seo-schema]') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-schema', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else {
      const existing = document.querySelector('script[data-seo-schema]');
      if (existing) existing.remove();
    }

    return () => {
      const s = document.querySelector('script[data-seo-schema]');
      if (s) s.remove();
    };
  }, [title, description, keywords, image, url, type, noindex, schema]);

  return null;
};

export default SEO;
