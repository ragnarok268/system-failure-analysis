# Langflow Case

## 30-Second Summary

This case is now evidence-backed by recovered local artifacts. The failure involved the declared dependency range allowed chromadb versions that the application did not actually support reliably at runtime. The fix strategy was to raise the lower bound for chromadb from 1.0.0 to 1.4.1 so the declared range better matches known-compatible runtime behavior. Verification available is still limited to code-level evidence and traceability artifacts; no executed before/after runtime transcript was recovered locally.

## System/Repo Involved

- Langflow

## Failure Class

- Dependency Truth Drift

## Operational Impact

- Installation could appear valid while downstream vector-store behavior remained unstable or incompatible.

## What Was Diagnosed

- The metadata lower bound in pyproject.toml was broader than the compatibility envelope the code path actually required.

## What Fix Pattern Was Applied

- Raise the lower bound for chromadb from 1.0.0 to 1.4.1 so the declared range better matches known-compatible runtime behavior.

## What Verification Exists

- Recovered direct evidence:
- [langflow_fix.diff](../../recovered_evidence/langflow/langflow_fix.diff): Direct diff in src/backend/base/pyproject.toml raising the chromadb lower bound from 1.0.0 to 1.4.1.
- [langflow_fix_zone.txt](../../recovered_evidence/langflow/langflow_fix_zone.txt): Focused excerpt of the pyproject.toml dependency line change.
- Verification still needed: failing and passing runtime artifacts, plus an executed test or repro transcript

## What Evidence Is Still Missing

- failing install or runtime log
- passing verification log
- exact repro command or version matrix
- upstream issue or PR link

