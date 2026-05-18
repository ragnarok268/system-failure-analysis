# Patch Summary

## Affected Layer

- Open WebUI

## Old Behavior

- The reasoning update path replaced reasoning_item["content"] with a single new output_text payload.

## New Behavior

- The code ensures content exists as a list and appends a new output_text item for each reasoning update.

## Why This Prevents Recurrence

- It restores the invariant that streamed reasoning updates extend accumulated state instead of destroying prior entries.

## Regression Test Idea

- Stream multiple reasoning updates through the middleware and assert that earlier reasoning items remain present after later updates.

## Recovered Patch Evidence

- [webui_fix_zone_after.txt](../../recovered_evidence/open-webui/webui_fix_zone_after.txt): Focused excerpt showing reasoning_item content initialization and append-based update in middleware.py.
- [webui_fix_zone.txt](../../recovered_evidence/open-webui/webui_fix_zone.txt): Additional focused context around the reasoning-content mutation path.
- [webui_fix.diff](../../recovered_evidence/open-webui/webui_fix.diff): Patch file containing the key overwrite-to-append change, but the broader diff formatting appears damaged and should not be treated as a clean complete patch artifact.

