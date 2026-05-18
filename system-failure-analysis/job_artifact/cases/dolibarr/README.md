# Dolibarr Case

## 30-Second Summary

This case is now evidence-backed by recovered local artifacts. The failure involved stripe-confirmed payment could complete externally while the internal invoice-payment path stayed blocked or duplicated. The fix strategy was to allow stripe confirmation to drive recovery when session validation fails, recover missing amount/currency from the paymentintent, and skip duplicate payment creation by external payment id. Verification available is still limited to code-level evidence and traceability artifacts; no executed before/after runtime transcript was recovered locally.

## System/Repo Involved

- Dolibarr / Stripe

## Failure Class

- External/Internal Truth Failure

## Operational Impact

- A paid transaction could fail to update billing state cleanly, or the recovery path could risk duplicate recording.

## What Was Diagnosed

- The callback path depended on fragile session state even after Stripe could independently confirm the payment, and the post-payment path lacked an idempotent duplicate guard.

## What Fix Pattern Was Applied

- Allow Stripe confirmation to drive recovery when session validation fails, recover missing amount/currency from the PaymentIntent, and skip duplicate payment creation by external payment id.

## What Verification Exists

- Recovered direct evidence:
- [patch_final.txt](../../recovered_evidence/dolibarr/patch_final.txt): Direct diff in htdocs/public/payment/paymentok.php showing session-mismatch recovery, Stripe-backed field recovery, and duplicate-payment idempotency guard.
- [stripe_block.txt](../../recovered_evidence/dolibarr/stripe_block.txt): Focused Stripe verification block showing PaymentIntent retrieval and amount/currency comparison.
- [order_payment_block.txt](../../recovered_evidence/dolibarr/order_payment_block.txt): Focused order-payment block showing invoice creation, Paiement creation, and ext_payment_id usage.
- [routing_block.txt](../../recovered_evidence/dolibarr/routing_block.txt): Focused routing/session block showing fallback reads from session and payment_intent parsing.
- [session_trace.txt](../../recovered_evidence/dolibarr/session_trace.txt): Trace notes linking the callback flow to FinalPaymentAmt and TRANSACTIONID handling.
- [newpayment_path.txt](../../recovered_evidence/dolibarr/newpayment_path.txt): Path reference for the newpayment entrypoint used in the payment flow.
- Verification still needed: failing and passing runtime artifacts, plus an executed test or repro transcript

## What Evidence Is Still Missing

- failing transaction log
- passing transaction log
- exact reproduction command
- screenshot of before/after invoice state
- upstream issue or PR link

