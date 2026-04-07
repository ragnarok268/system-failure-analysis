# System Failure Analysis

Real-world diagnostics and fixes across multiple system layers:
UI, execution, dependency, time, and external truth.

---

## What I do

I identify where systems diverge from reality (state, time, dependency, or external truth), isolate the failure boundary, and apply minimal corrections.

---

## Artifacts

### 1. Dolibarr — External Truth Failure
Stripe confirmed payment rejected due to session dependency.  
→ [View Analysis](./artifacts/dolibarr.md)

---

### 2. n8n — UI Truth Failure
Frontend validation incorrectly reported missing credentials.  
→ [View Analysis](./artifacts/n8n.md)

---

### 3. Open WebUI — Execution State Corruption
Streaming output corrupted due to improper state handling.  
→ [View Analysis](./artifacts/open-webui.md)

---

### 4. Langflow — Dependency Truth Drift
Declared dependency range allowed incompatible runtime behavior.  
→ [View Analysis](./artifacts/langflow.md)

---

### 5. GitHub Desktop — Time / Async State Failure
Stale async results overwrote current system state.  
→ [View Analysis](./artifacts/github-desktop.md)

---

## Coverage

- External ↔ Internal truth reconciliation  
- UI vs execution mismatch  
- Streaming/state integrity  
- Dependency/version correctness  
- Async/time correctness  

---

## Availability

Available for system diagnostics, failure analysis, and reliability improvements.