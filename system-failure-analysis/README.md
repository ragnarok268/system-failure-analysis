# System Failure Analysis

Evidence-backed forensic debugging case studies across real open-source systems.

## What This Demonstrates

- root-cause analysis
- failure classification
- minimal patch reasoning
- evidence recovery
- verification discipline

## Start Here

- [CASE_INDEX.md](./job_artifact/CASE_INDEX.md)
- [PORTFOLIO_SUMMARY.md](./job_artifact/PORTFOLIO_SUMMARY.md)
- [ARTIFACT_VERIFICATION_STATUS.md](./job_artifact/ARTIFACT_VERIFICATION_STATUS.md)
- [EVIDENCE_RECOVERY_REPORT.md](./job_artifact/EVIDENCE_RECOVERY_REPORT.md)

## Original Summaries

- [artifacts/](./artifacts/)

## Cases

- [Dolibarr](./job_artifact/cases/dolibarr/) - External/Internal Truth Failure
- [n8n](./job_artifact/cases/n8n/) - UI Truth Failure
- [Open WebUI](./job_artifact/cases/open-webui/) - Execution State Corruption
- [Langflow](./job_artifact/cases/langflow/) - Dependency Truth Drift
- [GitHub Desktop](./job_artifact/cases/github-desktop/) - Time/Async State Failure

## Evidence Status

This repository separates:

- direct recovered evidence
- reconstructed analysis
- missing runtime/test transcripts

The portfolio avoids claiming merged upstream fixes, production access, or successful test execution unless the artifact package contains the supporting transcript.

## Positioning

This portfolio is aimed at runtime reliability, AI infrastructure, platform engineering, observability, and Codex-style engineering roles.

