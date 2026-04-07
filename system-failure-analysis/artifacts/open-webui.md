# Open WebUI — Execution State Corruption

## Summary
Streaming output was corrupted due to improper state handling.

## Failure Class
Execution State Corruption

## Why It Matters
Breaks reasoning output and leads to inconsistent or lost information.

## Symptom
Streaming responses overwrite or truncate previous content.

## Root Cause
State container was overwritten instead of appended during streaming updates.

## Fix Summary
Ensured state is appended correctly and maintains consistent structure.

## Verification
Confirmed stable streaming output across multiple updates.

## Pattern
Streaming systems often fail when state mutation is not strictly controlled.

## Evidence
Upstream repo and fix patch included.