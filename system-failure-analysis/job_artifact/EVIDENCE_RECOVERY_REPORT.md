# Evidence Recovery Report

This report records locally recovered evidence artifacts that were used to upgrade the portfolio from summary-based to evidence-backed. It distinguishes direct evidence from reconstruction and preserves a clear boundary between code-level proof and missing runtime verification.

## Scope

- Search root: [local path redacted — recovery performed on local workstation]
- Portfolio target: job_artifact/
- Cases upgraded: Dolibarr, GitHub Desktop, Langflow, n8n, Open WebUI

## Recovery Summary

- Recovered artifact count: 19
- Strongest upgraded case: Dolibarr
- Remaining weakest case: Open WebUI
- Overall package state: evidence-backed, but still verification-limited

## Dolibarr

### Recovered Direct Evidence

- A clean local patch diff exists for paymentok.php.
- Focused local excerpts exist for Stripe verification, routing/session recovery, and payment creation.
- A local trace note file links the callback flow through the affected variables.

### Inferred Reconstruction

- The reconstructed failure likely involved a valid Stripe payment with missing or mismatched callback session state.
- The duplicate-payment guard was added to make the recovery path safe under retry or re-entry.

### Still-Missing Proof

- failing transaction log
- passing transaction log
- exact reproduction command
- screenshot of before/after invoice state
- upstream issue or PR link

### Recovered Artifacts

- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: patch diff
  Confidence: high
  Upgrades: proof quality, reproducibility, interview credibility
  Copied to: job_artifact/recovered_evidence/dolibarr/patch_final.txt
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: focused code trace
  Confidence: high
  Upgrades: proof quality, interview credibility
  Copied to: job_artifact/recovered_evidence/dolibarr/stripe_block.txt
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: focused code trace
  Confidence: high
  Upgrades: proof quality, reproducibility, interview credibility
  Copied to: job_artifact/recovered_evidence/dolibarr/order_payment_block.txt
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: focused code trace
  Confidence: high
  Upgrades: proof quality, reproducibility
  Copied to: job_artifact/recovered_evidence/dolibarr/routing_block.txt
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: trace notes
  Confidence: medium
  Upgrades: reproducibility, interview credibility
  Copied to: job_artifact/recovered_evidence/dolibarr/session_trace.txt
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: path reference
  Confidence: medium
  Upgrades: reproducibility
  Copied to: job_artifact/recovered_evidence/dolibarr/newpayment_path.txt

## GitHub Desktop

### Recovered Direct Evidence

- A clean local patch diff exists for app-store.ts.
- A focused code excerpt isolates the guarded then() blocks.

### Inferred Reconstruction

- The original failure likely surfaced during rapid repository switching while checkout work was still in flight.
- The affected symptom was probably wrong-repository refresh or stale success handling rather than checkout failure itself.

### Still-Missing Proof

- race reproduction transcript
- passing test output
- exact test command
- screenshot or screen capture
- upstream issue or PR link

### Recovered Artifacts

- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: patch diff
  Confidence: high
  Upgrades: proof quality, reproducibility, interview credibility
  Copied to: job_artifact/recovered_evidence/github-desktop/github_desktop_fix.diff
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: focused code excerpt
  Confidence: high
  Upgrades: proof quality, interview credibility
  Copied to: job_artifact/recovered_evidence/github-desktop/github_desktop_fix_zone.txt
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: analysis notes
  Confidence: medium
  Upgrades: reproducibility, interview credibility
  Copied to: job_artifact/recovered_evidence/github-desktop/github_desktop_focus.txt
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: scan output
  Confidence: medium
  Upgrades: reproducibility
  Copied to: job_artifact/recovered_evidence/github-desktop/github_desktop_race_scan.txt

## Langflow

### Recovered Direct Evidence

- A clean local patch diff exists for src/backend/base/pyproject.toml.
- A focused fix-zone excerpt confirms the exact dependency line change.

### Inferred Reconstruction

- The practical breakage likely occurred in a Chroma-backed runtime path rather than at install time alone.
- The new lower bound probably reflects a discovered compatibility floor rather than a stylistic dependency cleanup.

### Still-Missing Proof

- failing install or runtime log
- passing verification log
- exact repro command or version matrix
- upstream issue or PR link

### Recovered Artifacts

- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: patch diff
  Confidence: high
  Upgrades: proof quality, reproducibility, interview credibility
  Copied to: job_artifact/recovered_evidence/langflow/langflow_fix.diff
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: focused code excerpt
  Confidence: high
  Upgrades: proof quality
  Copied to: job_artifact/recovered_evidence/langflow/langflow_fix_zone.txt

## n8n

### Recovered Direct Evidence

- A clean local patch diff exists for selectedCredsAreUnusable in useNodeHelpers.ts.
- A focused fix-zone excerpt confirms the new acceptance of string credentials and object credentials with id/name.

### Inferred Reconstruction

- The original false warning likely occurred when credentials were represented in a valid but previously unrecognized shape.
- A nearby Playwright regression path exists, but no local artifact proves it was executed for this recovery pass.

### Still-Missing Proof

- failing UI screenshot
- passing UI screenshot
- execution log
- executed test transcript
- upstream issue or PR link

### Recovered Artifacts

- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: patch diff
  Confidence: high
  Upgrades: proof quality, reproducibility, interview credibility
  Copied to: job_artifact/recovered_evidence/n8n/n8n_fix.diff
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: focused code excerpt
  Confidence: high
  Upgrades: proof quality
  Copied to: job_artifact/recovered_evidence/n8n/n8n_fix_zone.txt
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: context excerpt
  Confidence: medium
  Upgrades: reproducibility, interview credibility
  Copied to: job_artifact/recovered_evidence/n8n/n8n_patch_zone.txt
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: path reference
  Confidence: medium
  Upgrades: reproducibility
  Copied to: job_artifact/recovered_evidence/n8n/n8n_targeted_path.txt

## Open WebUI

### Recovered Direct Evidence

- A focused local after-state excerpt shows the append-based reasoning-content update.
- A local diff file contains the same key hunk, though the surrounding diff appears malformed.

### Inferred Reconstruction

- The user-visible symptom was likely truncated or overwritten reasoning output during multi-update streaming.
- The broader patch may have included additional cleanup, but only the focused overwrite-to-append behavior is safe to claim from the recovered files.

### Still-Missing Proof

- streaming transcript or log
- passing verification output
- exact reproduction prompt/command
- clean upstream diff or PR link
- before/after screenshot or capture

### Recovered Artifacts

- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: focused after-state excerpt
  Confidence: high
  Upgrades: proof quality, interview credibility
  Copied to: job_artifact/recovered_evidence/open-webui/webui_fix_zone_after.txt
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: focused code excerpt
  Confidence: medium
  Upgrades: proof quality, reproducibility
  Copied to: job_artifact/recovered_evidence/open-webui/webui_fix_zone.txt
- Artifact: [local path redacted — recovered artifact copied into repo]
  Type: patch diff
  Confidence: medium
  Upgrades: proof quality, reproducibility
  Copied to: job_artifact/recovered_evidence/open-webui/webui_fix.diff

## Audit Notes

- Diff files count as direct code-change evidence when they are clean and locally recoverable.
- Focused code excerpts and trace bundles improve traceability and reproducibility, but they do not by themselves prove runtime verification.
- Open WebUI recovered a meaningful fix hunk, but the broader diff file appears malformed, so only the focused append-vs-overwrite behavior is treated as directly supported.
