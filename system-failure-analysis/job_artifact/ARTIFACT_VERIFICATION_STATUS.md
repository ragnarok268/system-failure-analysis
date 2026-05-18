# Artifact Verification Status

These ratings classify the strength of the artifact package as it exists locally in this repository after evidence recovery.

## Rating Scale

- Strong: has concrete evidence plus local verification artifacts
- Medium: has concrete code-level evidence and traceability, but still lacks direct failing/passing runtime verification
- Needs Evidence: lacks enough evidence to support even a bounded reconstruction

## Case Ratings

### Dolibarr

- Status: Medium
- Basis: Direct patch and code-trace evidence are now local, but no failing/passing runtime transcript or executed test output was recovered.
- Recovered direct evidence:
- [patch_final.txt](recovered_evidence/dolibarr/patch_final.txt): Direct diff in htdocs/public/payment/paymentok.php showing session-mismatch recovery, Stripe-backed field recovery, and duplicate-payment idempotency guard.
- [stripe_block.txt](recovered_evidence/dolibarr/stripe_block.txt): Focused Stripe verification block showing PaymentIntent retrieval and amount/currency comparison.
- [order_payment_block.txt](recovered_evidence/dolibarr/order_payment_block.txt): Focused order-payment block showing invoice creation, Paiement creation, and ext_payment_id usage.
- [routing_block.txt](recovered_evidence/dolibarr/routing_block.txt): Focused routing/session block showing fallback reads from session and payment_intent parsing.
- [session_trace.txt](recovered_evidence/dolibarr/session_trace.txt): Trace notes linking the callback flow to FinalPaymentAmt and TRANSACTIONID handling.
- [newpayment_path.txt](recovered_evidence/dolibarr/newpayment_path.txt): Path reference for the newpayment entrypoint used in the payment flow.
- Still missing: failing transaction log, passing transaction log, exact reproduction command, screenshot of before/after invoice state, upstream issue or PR link

### GitHub Desktop

- Status: Medium
- Basis: The patch evidence is direct and specific, but no local race reproduction or executed test artifact was recovered.
- Recovered direct evidence:
- [github_desktop_fix.diff](recovered_evidence/github-desktop/github_desktop_fix.diff): Direct diff in app/src/lib/stores/app-store.ts adding selectedRepository freshness guards around post-checkout callbacks.
- [github_desktop_fix_zone.txt](recovered_evidence/github-desktop/github_desktop_fix_zone.txt): Focused excerpt of the guarded _checkoutBranch promise chain.
- [github_desktop_focus.txt](recovered_evidence/github-desktop/github_desktop_focus.txt): Focused notes around checkout state, repository selection, and affected control flow.
- [github_desktop_race_scan.txt](recovered_evidence/github-desktop/github_desktop_race_scan.txt): Broader race-oriented scan output showing nearby async state handling paths.
- Still missing: race reproduction transcript, passing test output, exact test command, screenshot or screen capture, upstream issue or PR link

### Langflow

- Status: Medium
- Basis: The dependency change is directly evidenced, but no local runtime failure transcript or executed version-matrix verification was recovered.
- Recovered direct evidence:
- [langflow_fix.diff](recovered_evidence/langflow/langflow_fix.diff): Direct diff in src/backend/base/pyproject.toml raising the chromadb lower bound from 1.0.0 to 1.4.1.
- [langflow_fix_zone.txt](recovered_evidence/langflow/langflow_fix_zone.txt): Focused excerpt of the pyproject.toml dependency line change.
- Still missing: failing install or runtime log, passing verification log, exact repro command or version matrix, upstream issue or PR link

### n8n

- Status: Medium
- Basis: The UI fix is directly evidenced by local diffs, but there is still no local before/after UI capture or executed verification output.
- Recovered direct evidence:
- [n8n_fix.diff](recovered_evidence/n8n/n8n_fix.diff): Direct diff in useNodeHelpers.ts rewriting selectedCredsAreUnusable to inspect actual credential payloads.
- [n8n_fix_zone.txt](recovered_evidence/n8n/n8n_fix_zone.txt): Focused excerpt of the changed selectedCredsAreUnusable helper.
- [n8n_patch_zone.txt](recovered_evidence/n8n/n8n_patch_zone.txt): Wider helper context showing how credential issues are computed around the changed function.
- [n8n_targeted_path.txt](recovered_evidence/n8n/n8n_targeted_path.txt): Path reference to the affected useNodeHelpers.ts file.
- Still missing: failing UI screenshot, passing UI screenshot, execution log, executed test transcript, upstream issue or PR link

### Open WebUI

- Status: Medium
- Basis: The mutation fix is directly evidenced at the code level, but verification artifacts and a clean full patch record are still missing.
- Recovered direct evidence:
- [webui_fix_zone_after.txt](recovered_evidence/open-webui/webui_fix_zone_after.txt): Focused excerpt showing reasoning_item content initialization and append-based update in middleware.py.
- [webui_fix_zone.txt](recovered_evidence/open-webui/webui_fix_zone.txt): Additional focused context around the reasoning-content mutation path.
- [webui_fix.diff](recovered_evidence/open-webui/webui_fix.diff): Patch file containing the key overwrite-to-append change, but the broader diff formatting appears damaged and should not be treated as a clean complete patch artifact.
- Still missing: streaming transcript or log, passing verification output, exact reproduction prompt/command, clean upstream diff or PR link, before/after screenshot or capture

## Overall Assessment

The package is no longer summary-only. All five cases now have local direct evidence for the fix path, and several also have focused traceability artifacts. The remaining gap is runtime verification: there are still no recovered failing/passing logs or executed test transcripts, so the package remains Medium overall rather than Strong.

