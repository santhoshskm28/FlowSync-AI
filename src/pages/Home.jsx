import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Hero from '../components/home/Hero';
import LogoCloud from '../components/home/LogoCloud';
import MetricsSection from '../components/home/MetricsSection';
import BentoGrid from '../components/home/BentoGrid';
import WorkflowTimeline from '../components/home/WorkflowTimeline';
import IntegrationsSection from '../components/home/IntegrationsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'FlowSync AI',
      url: 'https://flowsync.ai',
      logo: 'https://flowsync.ai/favicon.svg',
      sameAs: ['https://twitter.com/flowsyncai', 'https://linkedin.com/company/flowsyncai'],
    },
    {
      '@type': 'WebSite',
      url: 'https://flowsync.ai',
      name: 'FlowSync AI',
      description: 'AI-powered workflow automation for ambitious companies.',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'FlowSync AI',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Cloud',
      offers: {
        '@type': 'Offer',
        price: '39',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What makes FlowSync AI different from Zapier?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FlowSync AI uses autonomous LLM-powered agents with dynamic reasoning, unlike Zapier\'s rigid conditional logic.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <SEOHead
        title="FlowSync AI — Intelligent Workflow Automation Platform"
        description="Deploy autonomous AI agents, connect 500+ tools, and automate every business process. Built for ambitious engineering teams. Try FlowSync AI free."
        canonical="https://flowsync.ai/"
        jsonLd={homeSchema}
      />

      <main>
        <Hero />
        <LogoCloud />
        <MetricsSection />
        <BentoGrid />
        <WorkflowTimeline />
        <IntegrationsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
