# Failure Trace

## Before State

- The reasoning update path replaced reasoning_item["content"] with a single new output_text payload.

## Failing Behavior

- Streaming reasoning output could overwrite prior reasoning content instead of extending it, risking truncated or corrupted streamed state.

## Expected Behavior

- The affected layer should preserve the corrected invariant described by the patch.

## Observed Behavior

- Users could lose intermediate reasoning content or see inconsistent streamed output structure across updates.

## Causal Chain

1. The reasoning update path overwrote the reasoning content container rather than appending to an existing list-based structure.
2. The affected code path allowed the broken assumption to reach the user-visible or business-visible state.
3. The recovered patch evidence shows the correction applied at the decision point.
4. The reconstructed fix realigns the code with the intended invariant.

## Recovered Direct Evidence

- [webui_fix_zone_after.txt](../../recovered_evidence/open-webui/webui_fix_zone_after.txt): Focused excerpt showing reasoning_item content initialization and append-based update in middleware.py.
- [webui_fix_zone.txt](../../recovered_evidence/open-webui/webui_fix_zone.txt): Additional focused context around the reasoning-content mutation path.
- [webui_fix.diff](../../recovered_evidence/open-webui/webui_fix.diff): Patch file containing the key overwrite-to-append change, but the broader diff formatting appears damaged and should not be treated as a clean complete patch artifact.

## Inferred Reconstruction

- The user-visible symptom was likely truncated or overwritten reasoning output during multi-update streaming.
- The broader patch may have included additional cleanup, but only the focused overwrite-to-append behavior is safe to claim from the recovered files.

## Missing Evidence

- streaming transcript or log
- passing verification output
- exact reproduction prompt/command
- clean upstream diff or PR link
- before/after screenshot or capture

