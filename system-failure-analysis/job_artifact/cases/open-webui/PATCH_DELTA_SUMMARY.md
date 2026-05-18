# Patch Delta Summary

## Exact Changed Behavior

- reasoning_item content is now initialized as a list and appended to, rather than replaced on each update.

## Invariant Restored

- Streaming reasoning state must preserve prior chunks when new chunks arrive.

## Why The Patch Works

- Append-based mutation keeps earlier reasoning content intact across successive updates.

