# Patch Summary

## Affected Layer

- GitHub Desktop

## Old Behavior

- checkoutImplementation could resolve later and still call onSuccessfulCheckout and refreshAfterCheckout even after selectedRepository changed.

## New Behavior

- The success and refresh callbacks first compare selectedRepository with the original repository and return early when the async result is stale.

## Why This Prevents Recurrence

- It restores the invariant that post-checkout side effects only apply to the repository context that is still current when the promise resolves.

## Regression Test Idea

- Trigger checkout, switch repositories before resolution, and assert that stale callbacks do not refresh or mark success on the newly selected repository.

## Recovered Patch Evidence

- [github_desktop_fix.diff](../../recovered_evidence/github-desktop/github_desktop_fix.diff): Direct diff in app/src/lib/stores/app-store.ts adding selectedRepository freshness guards around post-checkout callbacks.
- [github_desktop_fix_zone.txt](../../recovered_evidence/github-desktop/github_desktop_fix_zone.txt): Focused excerpt of the guarded _checkoutBranch promise chain.

