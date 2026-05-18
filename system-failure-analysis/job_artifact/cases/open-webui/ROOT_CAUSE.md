# Root Cause

1. Surface symptom

   Streaming responses overwrote or truncated previous content.

2. Hidden mechanism

   The state container handling incremental output was mutated with replacement semantics instead of append semantics.

3. Broken assumption

   The implementation assumed each incoming update represented a complete new state rather than an incremental extension of prior state.

4. Violated invariant

   Streaming output must preserve all prior chunks in order while maintaining a consistent container structure.

5. Corrected invariant

   Each streaming update must append new content to the existing state without discarding prior content or changing the expected structure.
