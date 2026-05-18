# Patch Delta Summary

## Exact Changed Behavior

- Post-checkout success handling and refresh are now skipped when selectedRepository has changed since the checkout started.

## Invariant Restored

- Async checkout side effects must only update the repository context that is still current at callback time.

## Why The Patch Works

- The guard prevents stale promise resolutions from overwriting state after the user has moved to another repository.

