# Failure Trace

## Before State

- A session mismatch blocked or destabilized the payment confirmation path, and the downstream payment creation path had no explicit duplicate-payment skip.

## Failing Behavior

- Stripe-confirmed payment could complete externally while the internal invoice-payment path stayed blocked or duplicated.

## Expected Behavior

- The affected layer should preserve the corrected invariant described by the patch.

## Observed Behavior

- A paid transaction could fail to update billing state cleanly, or the recovery path could risk duplicate recording.

## Causal Chain

1. The callback path depended on fragile session state even after Stripe could independently confirm the payment, and the post-payment path lacked an idempotent duplicate guard.
2. The affected code path allowed the broken assumption to reach the user-visible or business-visible state.
3. The recovered patch evidence shows the correction applied at the decision point.
4. The reconstructed fix realigns the code with the intended invariant.

## Recovered Direct Evidence

- [patch_final.txt](../../recovered_evidence/dolibarr/patch_final.txt): Direct diff in htdocs/public/payment/paymentok.php showing session-mismatch recovery, Stripe-backed field recovery, and duplicate-payment idempotency guard.
- [stripe_block.txt](../../recovered_evidence/dolibarr/stripe_block.txt): Focused Stripe verification block showing PaymentIntent retrieval and amount/currency comparison.
- [order_payment_block.txt](../../recovered_evidence/dolibarr/order_payment_block.txt): Focused order-payment block showing invoice creation, Paiement creation, and ext_payment_id usage.
- [routing_block.txt](../../recovered_evidence/dolibarr/routing_block.txt): Focused routing/session block showing fallback reads from session and payment_intent parsing.
- [session_trace.txt](../../recovered_evidence/dolibarr/session_trace.txt): Trace notes linking the callback flow to FinalPaymentAmt and TRANSACTIONID handling.
- [newpayment_path.txt](../../recovered_evidence/dolibarr/newpayment_path.txt): Path reference for the newpayment entrypoint used in the payment flow.

## Inferred Reconstruction

- The reconstructed failure likely involved a valid Stripe payment with missing or mismatched callback session state.
- The duplicate-payment guard was added to make the recovery path safe under retry or re-entry.

## Missing Evidence

- failing transaction log
- passing transaction log
- exact reproduction command
- screenshot of before/after invoice state
- upstream issue or PR link

