# GitHub Desktop Case

## 30-Second Summary

This case is now evidence-backed by recovered local artifacts. The failure involved a checkout sequence could apply stale async follow-up work after the user had already switched repositories. The fix strategy was to guard post-checkout success and refresh callbacks so they no-op when the repository that initiated the checkout is no longer selected. Verification available is still limited to code-level evidence and traceability artifacts; no executed before/after runtime transcript was recovered locally.

## System/Repo Involved

- GitHub Desktop

## Failure Class

- Async State Failure

## Operational Impact

- The UI could refresh or mark checkout success against the wrong current selection, creating misleading state after rapid navigation.

## What Was Diagnosed

- Promise resolution order was not guarded against repository freshness, so late async callbacks could mutate state after selectedRepository changed.

## What Fix Pattern Was Applied

- Guard post-checkout success and refresh callbacks so they no-op when the repository that initiated the checkout is no longer selected.

## What Verification Exists

- Recovered direct evidence:
- [github_desktop_fix.diff](../../recovered_evidence/github-desktop/github_desktop_fix.diff): Direct diff in app/src/lib/stores/app-store.ts adding selectedRepository freshness guards around post-checkout callbacks.
- [github_desktop_fix_zone.txt](../../recovered_evidence/github-desktop/github_desktop_fix_zone.txt): Focused excerpt of the guarded _checkoutBranch promise chain.
- [github_desktop_focus.txt](../../recovered_evidence/github-desktop/github_desktop_focus.txt): Focused notes around checkout state, repository selection, and affected control flow.
- [github_desktop_race_scan.txt](../../recovered_evidence/github-desktop/github_desktop_race_scan.txt): Broader race-oriented scan output showing nearby async state handling paths.
- Verification still needed: failing and passing runtime artifacts, plus an executed test or repro transcript

## What Evidence Is Still Missing

- race reproduction transcript
- passing test output
- exact test command
- screenshot or screen capture
- upstream issue or PR link

