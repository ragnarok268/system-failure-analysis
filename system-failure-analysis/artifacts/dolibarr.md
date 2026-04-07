# Dolibarr — External Truth Failure

## Summary
A successfully completed Stripe payment was not reflected in the system due to reliance on session state during confirmation.

## Failure Class
External ↔ Internal Truth Failure

## Why It Matters
This creates financial inconsistency where confirmed payments are not recorded, leading to:

- unpaid invoices despite successful transactions
- accounting discrepancies
- potential customer support issues and loss of trust

## Symptom
A payment completes successfully through Stripe, but the system does not mark the invoice as paid.

## Root Cause
The system relies on session state to validate and finalize payment confirmation.

Failure occurs when:
- the user session is missing, expired, or not correctly persisted
- payment confirmation logic depends on session variables instead of external payment verification

This results in:
- valid external payment (Stripe) being rejected
- internal system state diverging from actual financial reality

## Fix Summary
Reordered authority to prioritize external payment truth:

- treat Stripe confirmation as the authoritative source
- remove strict dependency on session validation for payment finalization
- allow payment processing to complete even when session state is unavailable

Session state becomes:
- a supporting context
- not a blocking requirement

## Verification
- confirmed that Stripe successfully processes payments independently of session state
- verified that invoices are correctly marked as paid when external confirmation is present
- ensured system behavior remains consistent even when session data is missing or invalid

## Pattern
Systems frequently fail when confirmed external events are gated by optional internal state.

Common failure pattern:
External truth (payment success)
↓
Internal validation layer (session, cache, state)
↓
Validation fails
↓
System rejects valid event

Correct approach:
External truth should take precedence over non-critical internal state.

## Evidence
- Upstream repository: https://github.com/Dolibarr/dolibarr
- Affected area: payment confirmation flow
- Issue type: session-dependent validation blocking confirmed external events
