# Patch Delta Summary

## Exact Changed Behavior

- The allowed chromadb range in pyproject.toml now starts at 1.4.1 instead of 1.0.0.

## Invariant Restored

- Declared dependency ranges must not include versions below the known-safe compatibility floor.

## Why The Patch Works

- Raising the lower bound prevents environments from resolving to versions that the affected code path could not support reliably.

