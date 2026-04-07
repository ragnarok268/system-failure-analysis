# GitHub Desktop — Time / Async State Failure

## Summary
Outdated asynchronous results were allowed to overwrite current system state.

## Failure Class
Time / Async State Failure

## Why It Matters
Leads to:

- incorrect UI state
- loss of user actions
- inconsistent system behavior under concurrent operations

## Symptom
Earlier async operations complete after newer ones and overwrite the current state.

## Root Cause
The system does not enforce ordering or freshness when resolving asynchronous operations.

Specifically:
- async results are applied without validation of relevance
- no mechanism exists to reject stale responses
- state updates are not tied to request lifecycle

## Fix Summary
Introduced safeguards against stale async updates:

- track request identity or version
- apply updates only if they match current state context
- ignore outdated async responses

## Verification
- confirmed that newer actions are preserved over older async completions
- validated correct state behavior under concurrent operations
- ensured stale results no longer overwrite current state

## Pattern
Async systems frequently fail when result application is not tied to state freshness.

Common issue:
- treating all async completions as equally valid

Correct approach:
- enforce ordering or relevance checks before applying results

## Evidence
- Upstream repository: https://github.com/desktop/desktop
- Affected area: async state handling
- Issue type: stale async overwrite
