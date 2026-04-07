# Langflow — Dependency Truth Drift

## Summary
Declared dependency range allowed incompatible runtime behavior.

## Failure Class
Dependency Truth Drift

## Why It Matters
System installs successfully but fails or behaves incorrectly at runtime.

## Symptom
Valid install results in runtime instability.

## Root Cause
Dependency range included versions that were not actually compatible.

## Fix Summary
Restricted dependency range to match verified compatible versions.

## Verification
Confirmed stable behavior within corrected version bounds.

## Pattern
Declared compatibility often diverges from real compatibility in evolving dependency ecosystems.

## Evidence
Upstream repo and fix patch included.