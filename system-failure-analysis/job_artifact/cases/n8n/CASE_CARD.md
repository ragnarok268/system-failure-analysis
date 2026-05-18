# Case Card
## System
n8n
## Failure Class
UI Truth Failure
## Symptom
The editor could mark credentials as unusable even though the node still had a credential representation the runtime could use.
## Operational Impact
Operators receive false warnings and may mistrust valid workflow configurations or waste time reconfiguring working credentials.
## Root Cause
The UI helper treated anything except the presence of a matching credentialType key as unusable, without recognizing valid string or object credential payloads.
## Fix Strategy
Make selectedCredsAreUnusable inspect the actual credential payload and accept valid string credentials or objects with id or name.
## Verification
Recovered direct evidence includes [n8n_fix.diff](../../recovered_evidence/n8n/n8n_fix.diff) and [n8n_fix_zone.txt](../../recovered_evidence/n8n/n8n_fix_zone.txt). No local executed test transcript was recovered, so verification remains code-level rather than runtime-proven.
## Generalized Pattern
UI validation breaks when presentation code compresses richer runtime state into an oversimplified truth test.
## Hiring Signal
Shows careful reading of state-shape assumptions and the ability to align validation logic with execution reality.

