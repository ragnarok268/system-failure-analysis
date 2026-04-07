# Dolibarr — External Truth Failure

## Summary
Stripe-confirmed payment was rejected due to session dependency failure.

## Failure Class
External ↔ Internal Truth Failure

## Why It Matters
Causes financial inconsistencies where paid invoices remain marked unpaid.

## Symptom
Payment completes successfully, but system does not update invoice status.

## Root Cause
Internal session state was incorrectly treated as authoritative over confirmed external payment.

## Fix Summary
Reordered authority: external payment confirmation takes precedence over session validation.

## Verification
Validated that successful Stripe payments update system state regardless of session condition.

## Pattern
Systems frequently reject valid external events when gated by optional internal state.

## Evidence
Upstream repo and fix patch included.