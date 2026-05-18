# System Failure Analysis

System Failure Analysis — forensic debugging artifacts across real open-source systems.

This package presents grounded engineering case material built from the repository's existing summaries. It is designed for AI, runtime, reliability, and Codex-style engineering roles where clear diagnosis, bounded inference, fix design, and verification discipline matter more than hype.

## What This Package Shows

- Real upstream systems rather than toy examples
- Failure classification across UI, dependency, async, execution, and truth-reconciliation layers
- Root-cause analysis expressed as explicit cause/effect chains
- Verification-first thinking with confirmed evidence separated from inference
- Deterministic reasoning under incomplete evidence
- No overclaiming beyond what the available artifacts support

## Evidence Standard

The current repository contains summary markdown files for each case, but does not include local raw logs, patch diffs, screenshots, or test transcripts. Each case therefore distinguishes:

- confirmed information from the available summaries
- reconstructed fix strategy and verification framing
- verification still needed to make the case stronger

Where raw evidence is missing, the case includes an `evidence_needed.md` checklist.

## Package Layout

- [PORTFOLIO_SUMMARY.md](./PORTFOLIO_SUMMARY.md)
- [CASE_INDEX.md](./CASE_INDEX.md)
- [ARTIFACT_VERIFICATION_STATUS.md](./ARTIFACT_VERIFICATION_STATUS.md)
- [cases](./cases/)
- [scripts](./scripts/)
- [receipts](./receipts/)

## Positioning

This is a professional, evidence-first artifact set. The value is not in claiming that every upstream issue was fully reproduced locally; the value is in showing disciplined failure classification, bounded diagnosis, fix strategy design, and honest verification accounting across real systems.
