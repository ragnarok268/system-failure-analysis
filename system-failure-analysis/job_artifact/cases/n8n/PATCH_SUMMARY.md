# Patch Summary

## Affected Layer

- n8n

## Old Behavior

- selectedCredsAreUnusable returned unusable based on a shallow credentials/key check and could misclassify valid credential payloads.

## New Behavior

- selectedCredsAreUnusable now rejects only missing credentials and accepts string credentials or objects carrying id or name.

## Why This Prevents Recurrence

- It restores the invariant that UI validation should classify credentials based on the same representational truth the runtime accepts.

## Regression Test Idea

- Exercise a node with credential payloads represented as a string and as an object with id/name, and assert that no missing-credentials issue is raised.

## Recovered Patch Evidence

- [n8n_fix.diff](../../recovered_evidence/n8n/n8n_fix.diff): Direct diff in useNodeHelpers.ts rewriting selectedCredsAreUnusable to inspect actual credential payloads.
- [n8n_fix_zone.txt](../../recovered_evidence/n8n/n8n_fix_zone.txt): Focused excerpt of the changed selectedCredsAreUnusable helper.
- [n8n_patch_zone.txt](../../recovered_evidence/n8n/n8n_patch_zone.txt): Wider helper context showing how credential issues are computed around the changed function.

