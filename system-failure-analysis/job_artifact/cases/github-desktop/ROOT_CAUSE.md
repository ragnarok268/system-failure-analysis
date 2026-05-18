# Root Cause

1. Surface symptom

   An older async response overwrote newer application state.

2. Hidden mechanism

   The async completion path had permission to write state without verifying that the originating request was still current.

3. Broken assumption

   The implementation assumed completion order was safe or that all async completions remained valid once they returned.

4. Violated invariant

   State derived from user actions must preserve freshness; outdated operations must not overwrite newer intent.

5. Corrected invariant

   Only async results that still match the latest relevant state context may mutate application state.
