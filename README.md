# App Dev Club — Frontend Interview

A **15-minute** React exercise. Build a small todo list and explain your decisions.
We care about frontend fundamentals and reasoning, not memorizing syntax.

## Before the interview (outside the timer)

Use Node.js 22 LTS and npm:

```sh
git clone https://github.com/WillGraham36/app-dev-frontend-interview.git
cd app-dev-frontend-interview
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Edit only **`src/app/page.jsx`**.
The starter runs, but the example row is static and submitting does not yet add a task.
Your interviewer can provide a running environment if setup is a problem.
No Next.js or TypeScript knowledge is needed.

## Your task

1. **Explain your data model.** How will you represent a task and the collection of tasks? What belongs in React state?
2. **Add and display tasks.** A new task starts incomplete; adding it keeps previous tasks. Replace the example row with your list.
3. **Toggle completion.** Each checkbox marks just that task complete or incomplete.

The input, form submission, blank-input check, and styling are provided.
Two tasks may have the same text and must still work independently.
There is no backend, persistence, delete feature, or styling task. Refreshing may reset the list.

## Time guide

| Minutes | Focus |
| --- | --- |
| 0–2 | Read the starter and explain your data model |
| 2–11 | Implement add, render, and toggle |
| 11–13 | Try your app and explain what you would test |
| 13–15 | Discuss a completed count and reviewing AI-generated changes |

For the count, an explanation is enough; implementation is optional.

## How we work during the interview

- Think aloud and ask clarifying questions.
- Do not use AI assistants, chat tools, or AI autocomplete during this exercise.
- Documentation, ordinary editor completion, and syntax help from the interviewer are welcome.
- If syntax blocks you, explain your intended steps; the interviewer can help translate them into code.
- We use AI in project work. This exercise checks the fundamentals you need to understand, test, and review its output.
- Finishing every line is not the only measure of success. Explain your choices and how you would check correctness.

### Quick manual check

Add two tasks with the same text. Toggle one, then toggle it back. Confirm the other
task is unchanged. Add a third task and confirm earlier tasks remain. Try a blank task.

## For interviewers

See [INTERVIEWER.md](INTERVIEWER.md) for timing, prompts, and evaluation guidance.
That guide is in this repository and is not a secret answer key.

Maintainer checks: `npm run lint`, `npm run typecheck`, and `npm run build`.
