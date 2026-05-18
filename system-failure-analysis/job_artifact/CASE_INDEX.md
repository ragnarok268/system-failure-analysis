# Case Index

| Case | System | Failure Class | Symptom | Fix Pattern | Verification Status | Hiring Signal |
| --- | --- | --- | --- | --- | --- | --- |
| [Dolibarr](./cases/dolibarr/README.md) | Dolibarr | External/Internal Truth Failure | Stripe-confirmed payment did not update invoice status | Reorder authority so external confirmation drives state transition | Medium | Truth reconciliation across financial workflow boundaries |
| [GitHub Desktop](./cases/github-desktop/README.md) | GitHub Desktop | Async State Failure | Older async result overwrote newer state | Ignore stale async resolutions | Medium | State freshness discipline under concurrency |
| [Langflow](./cases/langflow/README.md) | Langflow | Dependency Truth Drift | Install succeeded but runtime compatibility drifted | Constrain dependency range to verified versions | Medium | Runtime reliability through compatibility boundaries |
| [n8n](./cases/n8n/README.md) | n8n | UI Truth Failure | UI warned about credentials despite successful execution | Align validation with execution truth | Medium | Evidence-first debugging across UI/runtime seams |
| [Open WebUI](./cases/open-webui/README.md) | Open WebUI | Execution State Corruption | Streaming output overwrote or truncated prior content | Preserve append semantics in streaming state updates | Medium | State integrity reasoning for AI streaming systems |
