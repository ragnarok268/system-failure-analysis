# Failure Trace

## Before State

- checkoutImplementation could resolve later and still call onSuccessfulCheckout and refreshAfterCheckout even after selectedRepository changed.

## Failing Behavior

- A checkout sequence could apply stale async follow-up work after the user had already switched repositories.

## Expected Behavior

- The affected layer should preserve the corrected invariant described by the patch.

## Observed Behavior

- The UI could refresh or mark checkout success against the wrong current selection, creating misleading state after rapid navigation.

## Causal Chain

1. Promise resolution order was not guarded against repository freshness, so late async callbacks could mutate state after selectedRepository changed.
2. The affected code path allowed the broken assumption to reach the user-visible or business-visible state.
3. The recovered patch evidence shows the correction applied at the decision point.
4. The reconstructed fix realigns the code with the intended invariant.

## Recovered Direct Evidence

- [github_desktop_fix.diff](../../recovered_evidence/github-desktop/github_desktop_fix.diff): Direct diff in app/src/lib/stores/app-store.ts adding selectedRepository freshness guards around post-checkout callbacks.
- [github_desktop_fix_zone.txt](../../recovered_evidence/github-desktop/github_desktop_fix_zone.txt): Focused excerpt of the guarded _checkoutBranch promise chain.
- [github_desktop_focus.txt](../../recovered_evidence/github-desktop/github_desktop_focus.txt): Focused notes around checkout state, repository selection, and affected control flow.
- [github_desktop_race_scan.txt](../../recovered_evidence/github-desktop/github_desktop_race_scan.txt): Broader race-oriented scan output showing nearby async state handling paths.

## Inferred Reconstruction

- The original failure likely surfaced during rapid repository switching while checkout work was still in flight.
- The affected symptom was probably wrong-repository refresh or stale success handling rather than checkout failure itself.

## Missing Evidence

- race reproduction transcript
- passing test output
- exact test command
- screenshot or screen capture
- upstream issue or PR link

