# n8n — UI Truth Failure

## Summary
Frontend validation incorrectly reported missing credentials despite successful authenticated execution.

## Failure Class
UI Truth Failure

## Why It Matters
Creates false operator warnings and reduces trust in system feedback.

## Symptom
UI displays credential error while workflow executes successfully.

## Root Cause
Validation logic inferred unusable state without accounting for valid credential paths.

## Fix Summary
Adjusted validation logic to reflect actual execution truth instead of incomplete UI assumptions.

## Verification
Confirmed successful execution paths with corrected validation state.

## Pattern
UI layers often enforce stricter or incorrect truth conditions compared to execution logic.

## Evidence
Upstream repo and fix patch included.