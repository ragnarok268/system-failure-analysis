# Job Artifact Guide

This repository is organized so reviewers can move from portfolio-level context to case-level proof without losing the boundary between direct evidence and reconstruction.

## Recommended Reading Order

1. Start with [CASE_INDEX.md](../job_artifact/CASE_INDEX.md).
2. Open one case folder under [job_artifact/cases/](../job_artifact/cases/).
3. Read that case's `CASE_CARD.md`.
4. Check `PATCH_DELTA_SUMMARY.md` for the exact behavior change and restored invariant.
5. Check `recovered_evidence/` for direct local artifacts such as diffs, focused excerpts, and trace files.
6. Check `VERIFICATION.md` to understand what is directly evidenced, what is inferred, and what proof is still missing.

## Reading Expectations

- The original summaries remain under [artifacts/](../artifacts/).
- The upgraded portfolio lives under [job_artifact/](../job_artifact/).
- Cases are intentionally evidence-first and avoid claiming test execution unless a transcript exists locally.
- Recovered diffs and trace files improve proof quality, but many cases still lack failing/passing runtime transcripts.

