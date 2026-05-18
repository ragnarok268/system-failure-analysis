# Patch Delta Summary

## Exact Changed Behavior

- Credential validation moved from a shallow key-presence check to payload-aware acceptance of strings and objects with id/name.

## Invariant Restored

- A credential representation that the runtime can legitimately use must not be labeled unusable by the editor UI.

## Why The Patch Works

- The new helper logic recognizes the valid credential shapes that the old shallow check ignored.

