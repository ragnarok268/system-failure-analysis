# Open WebUI Case

## 30-Second Summary

This case is now evidence-backed by recovered local artifacts. The failure involved streaming reasoning output could overwrite prior reasoning content instead of extending it, risking truncated or corrupted streamed state. The fix strategy was to initialize reasoning_item["content"] as a list when missing and append new output_text items instead of replacing the container. Verification available is still limited to code-level evidence and traceability artifacts; no executed before/after runtime transcript was recovered locally.

## System/Repo Involved

- Open WebUI

## Failure Class

- Execution State Corruption

## Operational Impact

- Users could lose intermediate reasoning content or see inconsistent streamed output structure across updates.

## What Was Diagnosed

- The reasoning update path overwrote the reasoning content container rather than appending to an existing list-based structure.

## What Fix Pattern Was Applied

- Initialize reasoning_item["content"] as a list when missing and append new output_text items instead of replacing the container.

## What Verification Exists

- Recovered direct evidence:
- [webui_fix_zone_after.txt](../../recovered_evidence/open-webui/webui_fix_zone_after.txt): Focused excerpt showing reasoning_item content initialization and append-based update in middleware.py.
- [webui_fix_zone.txt](../../recovered_evidence/open-webui/webui_fix_zone.txt): Additional focused context around the reasoning-content mutation path.
- [webui_fix.diff](../../recovered_evidence/open-webui/webui_fix.diff): Patch file containing the key overwrite-to-append change, but the broader diff formatting appears damaged and should not be treated as a clean complete patch artifact.
- Verification still needed: failing and passing runtime artifacts, plus an executed test or repro transcript

## What Evidence Is Still Missing

- streaming transcript or log
- passing verification output
- exact reproduction prompt/command
- clean upstream diff or PR link
- before/after screenshot or capture

