# Case Card
## System
Langflow
## Failure Class
Dependency Truth Drift
## Symptom
The declared dependency range allowed chromadb versions that the application did not actually support reliably at runtime.
## Operational Impact
Installation could appear valid while downstream vector-store behavior remained unstable or incompatible.
## Root Cause
The metadata lower bound in pyproject.toml was broader than the compatibility envelope the code path actually required.
## Fix Strategy
Raise the lower bound for chromadb from 1.0.0 to 1.4.1 so the declared range better matches known-compatible runtime behavior.
## Verification
Recovered direct evidence includes [langflow_fix.diff](../../recovered_evidence/langflow/langflow_fix.diff) and [langflow_fix_zone.txt](../../recovered_evidence/langflow/langflow_fix_zone.txt). No local executed test transcript was recovered, so verification remains code-level rather than runtime-proven.
## Generalized Pattern
Dependency declarations become misleading when compatibility moves faster than version ranges are updated.
## Hiring Signal
Shows package-metadata debugging and the discipline to align declared compatibility with operational reality.

