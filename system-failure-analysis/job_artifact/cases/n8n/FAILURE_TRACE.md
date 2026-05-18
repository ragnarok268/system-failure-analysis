# Failure Trace

## Before State

- selectedCredsAreUnusable returned unusable based on a shallow credentials/key check and could misclassify valid credential payloads.

## Failing Behavior

- The editor could mark credentials as unusable even though the node still had a credential representation the runtime could use.

## Expected Behavior

- The affected layer should preserve the corrected invariant described by the patch.

## Observed Behavior

- Operators receive false warnings and may mistrust valid workflow configurations or waste time reconfiguring working credentials.

## Causal Chain

1. The UI helper treated anything except the presence of a matching credentialType key as unusable, without recognizing valid string or object credential payloads.
2. The affected code path allowed the broken assumption to reach the user-visible or business-visible state.
3. The recovered patch evidence shows the correction applied at the decision point.
4. The reconstructed fix realigns the code with the intended invariant.

## Recovered Direct Evidence

- [n8n_fix.diff](../../recovered_evidence/n8n/n8n_fix.diff): Direct diff in useNodeHelpers.ts rewriting selectedCredsAreUnusable to inspect actual credential payloads.
- [n8n_fix_zone.txt](../../recovered_evidence/n8n/n8n_fix_zone.txt): Focused excerpt of the changed selectedCredsAreUnusable helper.
- [n8n_patch_zone.txt](../../recovered_evidence/n8n/n8n_patch_zone.txt): Wider helper context showing how credential issues are computed around the changed function.
- [n8n_targeted_path.txt](../../recovered_evidence/n8n/n8n_targeted_path.txt): Path reference to the affected useNodeHelpers.ts file.

## Inferred Reconstruction

- The original false warning likely occurred when credentials were represented in a valid but previously unrecognized shape.
- A nearby Playwright regression path exists, but no local artifact proves it was executed for this recovery pass.

## Missing Evidence

- failing UI screenshot
- passing UI screenshot
- execution log
- executed test transcript
- upstream issue or PR link

