# Root Cause

1. Surface symptom

   The system installed successfully but behaved unstably at runtime.

2. Hidden mechanism

   Dependency metadata admitted versions whose real behavior was incompatible with Langflow's expectations.

3. Broken assumption

   The implementation assumed that the declared version range accurately represented runtime-safe compatibility.

4. Violated invariant

   Supported dependency versions must be versions that are empirically compatible in runtime use, not merely syntactically installable.

5. Corrected invariant

   Declared version bounds should include only the dependency versions that have been verified to behave correctly in runtime scenarios.
