# Patch Delta Summary

## Exact Changed Behavior

- paymentok.php no longer treats a session-code mismatch as an automatic hard stop before Stripe verification; it can recover amount and currency from Stripe and skip duplicate payment creation by external id.

## Invariant Restored

- A Stripe-confirmed payment must remain processable even if callback session state is degraded, and the same external payment must not be recorded twice.

## Why The Patch Works

- The patch shifts authority to the confirmed external payment object for recovery-critical fields and adds an idempotent gate before the local payment record is created.

