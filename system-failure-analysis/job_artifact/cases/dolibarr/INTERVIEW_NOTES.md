# Interview Notes

- How I approached the failure: I started by identifying the disagreement between the payment provider and the application state, then treated it as a source-of-truth problem rather than a generic payment bug.
- What signal I followed: The strongest signal was that payment completion and invoice state diverged, which points to a boundary problem between external confirmation and internal gating logic.
- What made the bug non-obvious: The failing condition was not the payment itself, but the internal dependency that incorrectly overruled a valid external event.
- How I prevented guessing: I kept the analysis bounded to the summary evidence and avoided claiming exact code paths, logs, or tests that are not present locally.
- What this demonstrates about my engineering process: I classify failures before proposing fixes, look for violated invariants, and separate confirmed verification from verification still needed.
