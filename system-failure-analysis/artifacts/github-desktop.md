# GitHub Desktop — Time / Async State Failure

## Summary
Stale async results overwrote current system state.

## Failure Class
Time / Async State Failure

## Why It Matters
Leads to incorrect UI or system state based on outdated operations.

## Symptom
Earlier async responses overwrite newer user actions.

## Root Cause
No protection against stale async resolution overwriting current state.

## Fix Summary
Introduced guard to ignore outdated async results.

## Verification
Confirmed correct state preservation under concurrent operations.

## Pattern
Async systems fail when resolution order is not enforced against state freshness.

## Evidence
Upstream repo and fix patch included.