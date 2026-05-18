# Interview Notes

- How I approached the failure: I treated the symptom as a state-integrity issue in a streaming path and focused on what invariant incremental output must preserve.
- What signal I followed: The phrase "overwrite or truncate previous content" strongly indicates mutation semantics are wrong rather than the generator itself being wrong.
- What made the bug non-obvious: Streaming systems update the same visible state many times, so a small mutation mistake can hide until multi-chunk output exposes it.
- How I prevented guessing: I described the mechanism in terms of overwrite-versus-append semantics and avoided inventing exact reducers, stores, or component names.
- What this demonstrates about my engineering process: I reason about runtime invariants, isolate the state transition that violates them, and define verification around accumulation correctness.
