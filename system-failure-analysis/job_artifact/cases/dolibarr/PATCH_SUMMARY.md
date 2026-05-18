# Patch Summary

## Affected Layer

- Dolibarr / Stripe

## Old Behavior

- A session mismatch blocked or destabilized the payment confirmation path, and the downstream payment creation path had no explicit duplicate-payment skip.

## New Behavior

- The code tolerates session mismatch long enough to verify with Stripe, reconstructs missing payment fields from Stripe when needed, and skips duplicate payment creation using ext_payment_id.

## Why This Prevents Recurrence

- It restores the invariant that a confirmed Stripe payment remains actionable even if local callback session state is degraded, while also preventing duplicate local records during recovery or re-entry.

## Regression Test Idea

- Simulate a Stripe-confirmed callback with a mismatched or missing session code, verify amount/currency recovery from PaymentIntent, and re-run the callback to confirm the duplicate-payment skip path.

## Recovered Patch Evidence

- [patch_final.txt](../../recovered_evidence/dolibarr/patch_final.txt): Direct diff in htdocs/public/payment/paymentok.php showing session-mismatch recovery, Stripe-backed field recovery, and duplicate-payment idempotency guard.

