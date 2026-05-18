# Case Card
## System
Open WebUI
## Failure Class
Execution State Corruption
## Symptom
Streaming reasoning output could overwrite prior reasoning content instead of extending it, risking truncated or corrupted streamed state.
## Operational Impact
Users could lose intermediate reasoning content or see inconsistent streamed output structure across updates.
## Root Cause
The reasoning update path overwrote the reasoning content container rather than appending to an existing list-based structure.
## Fix Strategy
Initialize reasoning_item["content"] as a list when missing and append new output_text items instead of replacing the container.
## Verification
Recovered direct evidence includes [webui_fix_zone_after.txt](../../recovered_evidence/open-webui/webui_fix_zone_after.txt) and [webui_fix_zone.txt](../../recovered_evidence/open-webui/webui_fix_zone.txt). No local executed test transcript was recovered, so verification remains code-level rather than runtime-proven.
## Generalized Pattern
Streaming systems become fragile when state mutation treats append-only data as replaceable snapshots.
## Hiring Signal
Shows state-mutation debugging in streaming middleware and the ability to recover the key invariant even from imperfect evidence.

