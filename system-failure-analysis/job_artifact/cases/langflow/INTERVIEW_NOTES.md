# Interview Notes

- How I approached the failure: I treated the bug as a mismatch between declared support and actual runtime behavior, which is a packaging and reliability problem rather than only an application bug.
- What signal I followed: The key signal was that installation succeeded while runtime behavior did not, which usually means the dependency contract is overstated.
- What made the bug non-obvious: Package metadata often looks correct until a specific version combination reveals that "installable" is not the same as "compatible."
- How I prevented guessing: I limited the claim to dependency-range correction and explicitly avoided inventing exact version numbers or lockfile changes that are not present locally.
- What this demonstrates about my engineering process: I treat dependency metadata as part of system correctness and connect package declarations directly to operational outcomes.
