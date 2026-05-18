# Root Cause

1. Surface symptom

   The UI claimed credentials were missing while the workflow still executed successfully.

2. Hidden mechanism

   Validation logic reasoned about credential usability using a narrower model than the execution engine used.

3. Broken assumption

   The interface assumed its local validation rules fully represented the runtime's accepted credential paths.

4. Violated invariant

   UI validation should not report failure when the underlying execution path is able to authenticate and run successfully.

5. Corrected invariant

   Frontend validation must reflect the actual executable credential truth of the runtime, including valid alternate credential paths.
