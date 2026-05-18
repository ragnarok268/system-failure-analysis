# n8n Case

## 30-Second Summary

This case is now evidence-backed by recovered local artifacts. The failure involved the editor could mark credentials as unusable even though the node still had a credential representation the runtime could use. The fix strategy was to make selectedcredsareunusable inspect the actual credential payload and accept valid string credentials or objects with id or name. Verification available is still limited to code-level evidence and traceability artifacts; no executed before/after runtime transcript was recovered locally.

## System/Repo Involved

- n8n

## Failure Class

- UI Truth Failure

## Operational Impact

- Operators receive false warnings and may mistrust valid workflow configurations or waste time reconfiguring working credentials.

## What Was Diagnosed

- The UI helper treated anything except the presence of a matching credentialType key as unusable, without recognizing valid string or object credential payloads.

## What Fix Pattern Was Applied

- Make selectedCredsAreUnusable inspect the actual credential payload and accept valid string credentials or objects with id or name.

## What Verification Exists

- Recovered direct evidence:
- [n8n_fix.diff](../../recovered_evidence/n8n/n8n_fix.diff): Direct diff in useNodeHelpers.ts rewriting selectedCredsAreUnusable to inspect actual credential payloads.
- [n8n_fix_zone.txt](../../recovered_evidence/n8n/n8n_fix_zone.txt): Focused excerpt of the changed selectedCredsAreUnusable helper.
- [n8n_patch_zone.txt](../../recovered_evidence/n8n/n8n_patch_zone.txt): Wider helper context showing how credential issues are computed around the changed function.
- [n8n_targeted_path.txt](../../recovered_evidence/n8n/n8n_targeted_path.txt): Path reference to the affected useNodeHelpers.ts file.
- Verification still needed: failing and passing runtime artifacts, plus an executed test or repro transcript

## What Evidence Is Still Missing

- failing UI screenshot
- passing UI screenshot
- execution log
- executed test transcript
- upstream issue or PR link

