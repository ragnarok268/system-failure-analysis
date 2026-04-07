# n8n — UI Truth Failure

## Summary
Frontend validation incorrectly reported missing credentials despite successful authenticated execution.

## Failure Class
UI Truth Failure

## Why It Matters
This creates false operator warnings, reduces trust in system feedback, and can lead users to misdiagnose working workflows as broken.

## Symptom
The UI reports that credentials are not set or unusable, while the workflow executes successfully using valid authentication.

## Root Cause
The validation layer determines credential usability based on selected credential presence rather than actual execution capability.

Specifically:
- validation checks for credential selection state
- does not account for valid predefined credential flows
- results in UI state diverging from execution truth

## Fix Summary
Adjusted validation logic to align with execution truth:

- treat valid predefined credential paths as usable
- avoid flagging credentials as invalid when execution succeeds
- ensure UI reflects actual system capability rather than incomplete validation assumptions

## Verification
- confirmed workflows execute successfully with valid credentials
- verified UI state now reflects actual execution behavior
- ensured no false warnings are produced under valid conditions

## Pattern
UI validation layers often enforce incorrect or stricter truth conditions than the execution layer.

This leads to:
- false error states
- user confusion
- reduced trust in system feedback

## Evidence
- Upstream repository: https://github.com/n8n-io/n8n
- Affected area: frontend validation logic
- Fix: adjusted credential usability evaluation
