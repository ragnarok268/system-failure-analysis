# Interview Notes

- How I approached the failure: I started by comparing what the UI claimed with what the runtime actually did, because successful execution makes the interface warning immediately suspect.
- What signal I followed: The strongest signal was the contradiction between "missing credentials" and a successful authenticated run.
- What made the bug non-obvious: Credential systems often have multiple valid paths, and UI validation can silently encode only one of them.
- How I prevented guessing: I stayed at the level of validated contradiction and did not invent the exact credential schema or frontend component structure.
- What this demonstrates about my engineering process: I verify truth at the execution boundary, then use that truth to correct misleading interface behavior.
