# Case Card
## System
Dolibarr / Stripe
## Failure Class
External/Internal Truth Failure
## Symptom
Stripe-confirmed payment could complete externally while the internal invoice-payment path stayed blocked or duplicated.
## Operational Impact
A paid transaction could fail to update billing state cleanly, or the recovery path could risk duplicate recording.
## Root Cause
The callback path depended on fragile session state even after Stripe could independently confirm the payment, and the post-payment path lacked an idempotent duplicate guard.
## Fix Strategy
Allow Stripe confirmation to drive recovery when session validation fails, recover missing amount/currency from the PaymentIntent, and skip duplicate payment creation by external payment id.
## Verification
Recovered direct evidence includes [patch_final.txt](../../recovered_evidence/dolibarr/patch_final.txt) and trace excerpts such as [session_trace.txt](../../recovered_evidence/dolibarr/session_trace.txt). No local executed test transcript was recovered, so verification remains code-level rather than runtime-proven.
## Generalized Pattern
When internal state is treated as more authoritative than a confirmed external event, systems can reject reality or replay it unsafely.
## Hiring Signal
Shows transactional debugging, source-of-truth reasoning, and careful idempotency design in a financial flow.

