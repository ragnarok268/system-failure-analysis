# Interview Notes

- How I approached the failure: I framed it as a time/freshness problem first, because the symptom described a mismatch between resolution order and intended state.
- What signal I followed: The critical signal was that earlier work could overwrite newer user actions, which points to stale async completion rather than a simple rendering bug.
- What made the bug non-obvious: The system can appear correct in single-operation flows and only fail when timing and concurrency line up unfavorably.
- How I prevented guessing: I described the mechanism at the level supported by the summary and avoided inventing specific request IDs, reducers, or tests.
- What this demonstrates about my engineering process: I look for invariants around freshness and concurrency, then shape the fix around preserving current intent under out-of-order execution.
