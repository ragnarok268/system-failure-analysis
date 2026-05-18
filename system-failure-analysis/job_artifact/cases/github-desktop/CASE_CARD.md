# Case Card
## System
GitHub Desktop
## Failure Class
Async State Failure
## Symptom
A checkout sequence could apply stale async follow-up work after the user had already switched repositories.
## Operational Impact
The UI could refresh or mark checkout success against the wrong current selection, creating misleading state after rapid navigation.
## Root Cause
Promise resolution order was not guarded against repository freshness, so late async callbacks could mutate state after selectedRepository changed.
## Fix Strategy
Guard post-checkout success and refresh callbacks so they no-op when the repository that initiated the checkout is no longer selected.
## Verification
Recovered direct evidence includes [github_desktop_fix.diff](../../recovered_evidence/github-desktop/github_desktop_fix.diff) and [github_desktop_fix_zone.txt](../../recovered_evidence/github-desktop/github_desktop_fix_zone.txt). No local executed test transcript was recovered, so verification remains code-level rather than runtime-proven.
## Generalized Pattern
Async UI flows need freshness guards whenever background work can finish after the user has moved to a different state anchor.
## Hiring Signal
Shows race-condition analysis, state-freshness reasoning, and minimal guard-based repair in an interactive desktop app.

