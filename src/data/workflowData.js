export const workflowSteps = [
  {
    step: '01',
    title: 'Listen & Ingest Payload',
    badge: 'TRIGGER NODE',
    description: 'FlowSync webhooks, API endpoints, or database CDC triggers instantly capture incoming customer data or system alerts.',
    codeSnippet: `// Webhook Ingress
onPayloadReceive({
  source: "github.pull_request",
  action: "opened",
  payload: { pr_id: 1042, diff_lines: 480 }
})`,
    status: 'ACTIVE',
  },
  {
    step: '02',
    title: 'Neural Reasoning & Context RAG',
    badge: 'AI AGENT NODE',
    description: 'Autonomous agent queries vector storage, evaluates safety guidelines, and dynamically constructs resolution steps.',
    codeSnippet: `// Neural Reasoning Chain
const context = await vectorVault.query(payload.summary);
const plan = await agent.reason({
  model: "claude-3-5-sonnet",
  context,
  schema: SecurityAuditSchema
});`,
    status: 'PROCESSING',
  },
  {
    step: '03',
    title: 'Multi-Branch Parallel Execution',
    badge: 'ACTION MESH',
    description: 'Executes actions across 12 downstream tools in parallel with automatic retries, fallback routing, and zero data loss.',
    codeSnippet: `// Parallel Dispatch
await Promise.all([
  jira.updateTicket({ status: "In Review" }),
  slack.notifyChannel("#dev-ops", plan.summary),
  github.postComment(pr_id, plan.codeReview)
]);`,
    status: 'COMPLETED',
  },
  {
    step: '04',
    title: 'Telemetry Logging & Optimization',
    badge: 'OBSERVABILITY',
    description: 'Full latency metrics, token consumption cost breakdown, and execution audit trails streamed live to your dashboard.',
    codeSnippet: `// Telemetry Output
emitLog({
  execution_id: "exec_9843a7",
  duration_ms: 342,
  tokens_used: 1240,
  status: "SUCCESS_200"
});`,
    status: 'VERIFIED',
  },
];
