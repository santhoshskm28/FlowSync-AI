export const faqData = [
  {
    category: 'General',
    question: 'What makes FlowSync AI different from traditional workflow tools like Zapier or Make?',
    answer: 'Traditional tools rely on rigid, hardcoded conditional logic (`if X then Y`) that breaks whenever schemas or input formats shift. FlowSync AI uses autonomous LLM-powered agents capable of dynamic reasoning, self-correction, unstructured data parsing (images, PDFs, raw logs), and continuous learning across multi-step pipelines.',
  },
  {
    category: 'General',
    question: 'How fast can our team deploy FlowSync AI into production?',
    answer: 'Most teams launch their first production workflow in less than 15 minutes using our 500+ pre-built integration nodes or visual drag-and-drop builder. Enterprise custom deployments typically take under 48 hours.',
  },
  {
    category: 'Security',
    question: 'Is our sensitive company data used to train public AI models?',
    answer: 'Never. FlowSync AI adheres to a strict Zero-Data Retention policy. All payloads are processed in isolated memory sandboxes, encrypted at rest with AES-256 and in transit via TLS 1.3. Your data is never stored or used for model training.',
  },
  {
    category: 'Security',
    question: 'Can we run FlowSync AI on our own cloud (AWS / GCP / Azure)?',
    answer: 'Yes! Our Enterprise tier offers self-hosted Private VPC setups and Bring Your Own Keys (BYOK) for OpenAI, Anthropic, Google Gemini, and open-source models (Llama 3, DeepSeek, etc.).',
  },
  {
    category: 'Pricing',
    question: 'How does monthly execution pricing work?',
    answer: 'An execution is counted whenever an AI workflow trigger fires and successfully processes nodes. Failed nodes during sandbox testing do not consume your monthly quotas.',
  },
  {
    category: 'Pricing',
    question: 'Can we change plans or add team seats anytime?',
    answer: 'Absolutely. You can upgrade, downgrade, or adjust execution limits at any time directly from the admin dashboard with prorated billing.',
  },
];
