# Interviewer guide

## Prepare before the clock starts

- Use a fresh checkout for each candidate. Install dependencies and open the app before timing.
- Have the candidate edit `src/app/page.jsx`; do not assess setup, Git commands, Next.js, CSS, or TypeScript.
- Turn off AI chat/completion. Allow documentation and ordinary editor completion.
- Say: “Explain your decisions as you go. Ask for syntax help whenever you need it. We are assessing how you understand and check frontend behavior.”
- The numbered comments match the README. The static example and unfinished add handler are intentional.
- This guide is visible to candidates. Evaluate explanations and adaptations rather than treating prompts as secret questions.

## Run the same 15-minute exercise

### 0–2 minutes: model and state

Ask: “How would you represent one task and the list? What needs to survive a render?”

A simple array of objects with a stable ID, text, and completion boolean is a good fit.
Other representations are valid if the candidate explains ordering, identity, and updates.
Ask why text alone cannot identify a task when duplicates are allowed.
Let the candidate choose the shape; avoid giving it away before they answer.

### 2–11 minutes: implement

Ask for add, render, and toggle only. Input wiring and blank validation are supplied.
Look for state-driven rendering, stable keys, preserving existing items, and updating only the target task.
Candidates should create new arrays/objects when updating React state, rather than mutating current state.
Functional state updates are useful when computing from previous state; do not require a particular spelling if the approach is correct.

If stalled, use this hint ladder and record the help:

1. Ask a behavior question: “What should happen if two tasks have the same label?”
2. Ask a concept question: “How will React know that the list changed?”
3. Supply syntax once they describe the intended operation: `useState`, array `map`, object spread, `checked`, or `onChange`.
4. If they cannot choose an approach, offer an array of task objects so they can continue. Record this as conceptual help, not syntax help.

Give syntax help promptly. Do not spend several minutes watching someone recall an API.
If needed, provide `crypto.randomUUID()` for an ID on localhost; memorizing an ID API is not a criterion.

### 11–13 minutes: check behavior

Have the candidate demonstrate two duplicate labels, toggling either one in both directions,
and adding a third task without losing earlier state. Blank submission is handled by the starter;
checking it is useful but is not evidence they implemented validation.

Ask them to trace one interaction: event → state update → render.
If their code is incomplete, ask them to walk through the intended update and a test case.
No automated tests need to be written during the interview.

### 13–15 minutes: derived data and AI review

Ask both briefly; these are discussion questions, not extra coding tasks:

1. “How would you display the number of completed tasks? Would you store it separately?”
   Look for deriving it from the list, avoiding a second value that can become inconsistent.
2. “An AI-generated version uses task text as the identity and directly changes an item in state. How would you review it?”
   Look for duplicate-label failures, immutable updates, and specific tests rather than trust in generated output.

If time permits within these two minutes, follow up on checkbox labels or saving to an API.
Do not start a backend implementation. Stop at 15 minutes consistently.

## Record evidence, not typing speed

Use **0 = not demonstrated**, **1 = partial / conceptual help needed**,
**2 = independently explained or demonstrated** for each area.
Syntax help alone does not reduce a score. Discussion can demonstrate understanding
when implementation is incomplete; record which evidence you observed.

| Area | Evidence to look for | Score |
| --- | --- | --- |
| Data modeling | Suitable collection, per-task fields, identity despite duplicate labels | /2 |
| State and events | Explains event → state → UI; adds while preserving existing tasks | /2 |
| Rendering and updates | Renders from data, stable keys, toggles one task without mutation | /2 |
| Verification | Checks concrete cases and can diagnose a failure | /2 |
| Reasoning and review | Explains derived count and checks AI output critically | /2 |

Record working behaviors, explanation-only evidence, syntax hints, conceptual hints,
and one strength / one concern. Use the rubric to support a hiring discussion; the total
is not an automatic pass/fail rule. Do not reward extra features over clear fundamentals.

## Maintenance

Keep `main` as the unfinished candidate starter. Do not commit a completed solution into
the candidate file. Run lint, typecheck, build, and a browser smoke check after changes.
Periodically rehearse with someone unfamiliar with the exercise and adjust scope if the
three core behaviors consistently exceed the 9-minute implementation window.

The PostCSS override pins a patched transitive dependency. Revisit it when updating Next.js.
