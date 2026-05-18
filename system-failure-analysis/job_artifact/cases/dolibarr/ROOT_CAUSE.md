# Root Cause

1. Surface symptom

   A Stripe-confirmed payment did not update the invoice state inside Dolibarr.

2. Hidden mechanism

   The internal update path depended on session state during payment handling, and that dependency could reject or block the state transition.

3. Broken assumption

   The implementation assumed session validity was required to trust or apply a confirmed external payment event.

4. Violated invariant

   A confirmed payment from the authoritative payment processor should not be discarded because of optional or incidental session state.

5. Corrected invariant

   External payment confirmation must be authoritative for invoice-state transition, while session state may enrich the flow but must not negate confirmed payment truth.
