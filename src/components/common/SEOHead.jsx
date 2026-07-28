import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOHead({
  title = 'FlowSync AI — The Future of Intelligent Workflow Automation',
  description = 'Autonomous AI workflow orchestration for ambitious companies. Automate every SaaS process, reduce model costs by 70%, and scale team velocity.',
  canonical = 'https://flowsync.ai/',
  jsonLd = null,
}) {
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FlowSync AI',
    operatingSystem: 'All Cloud Platforms',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '39.00',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FlowSync AI Inc.',
      url: 'https://flowsync.ai',
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://flowsync.ai/og-preview.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://flowsync.ai/og-preview.png" />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultSchema)}
      </script>
    </Helmet>
  );
}
