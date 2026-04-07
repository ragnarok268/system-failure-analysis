# Open WebUI — Execution State Corruption

## Summary
Streaming output became corrupted due to improper handling of incremental state updates.

## Failure Class
Execution State Corruption

## Why It Matters
Breaks reasoning output and leads to:

- truncated or overwritten responses
- inconsistent state representation
- unreliable system output during streaming

## Symptom
Streaming responses overwrite or lose previously generated content instead of appending correctly.

## Root Cause
The system incorrectly handles streaming state updates by overwriting the content container rather than appending to it.

Specifically:
- response state is treated as a replaceable value
- instead of a cumulative structure
- causing loss of prior data during incremental updates

## Fix Summary
Corrected state handling logic:

- ensure response content is treated as a list or appendable structure
- append new streaming segments instead of overwriting
- maintain consistent state shape across updates

## Verification
- confirmed streaming responses preserve all prior content
- verified no truncation or overwrite occurs during incremental updates
- validated consistent output structure across multiple streaming cycles

## Pattern
Streaming systems frequently fail when mutable state is not handled as an append-only structure.

Common issue:
- treating incremental updates as full replacements

Correct approach:
- enforce append-only or controlled mutation patterns

## Evidence
- Upstream repository: https://github.com/open-webui/open-webui
- Affected area: streaming response handling
- Issue type: state overwrite during incremental updates
