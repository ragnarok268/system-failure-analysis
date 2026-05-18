# Patch Summary

## Affected Layer

- Langflow

## Old Behavior

- pyproject.toml declared chromadb>=1.0.0,<2.0.0, which exposed installations to versions below the locally recovered fixed lower bound.

## New Behavior

- pyproject.toml declares chromadb>=1.4.1,<2.0.0, narrowing the accepted range to a higher floor.

## Why This Prevents Recurrence

- It restores the invariant that install-time compatibility claims should not include versions known to be unsafe for the affected runtime path.

## Regression Test Idea

- Build an environment with chromadb below 1.4.1 and confirm the broken behavior, then repeat at 1.4.1+ and confirm the affected path behaves correctly.

## Recovered Patch Evidence

- [langflow_fix.diff](../../recovered_evidence/langflow/langflow_fix.diff): Direct diff in src/backend/base/pyproject.toml raising the chromadb lower bound from 1.0.0 to 1.4.1.
- [langflow_fix_zone.txt](../../recovered_evidence/langflow/langflow_fix_zone.txt): Focused excerpt of the pyproject.toml dependency line change.

