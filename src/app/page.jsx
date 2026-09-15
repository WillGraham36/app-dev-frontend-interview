"use client";

import { useState } from "react";

export default function Home() {
  const [draft, setDraft] = useState("");
  // 1. Choose how to store the todos in state. Explain your choice first.

  function handleAdd(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    // 2. Add a new, incomplete todo using text. Keep the existing todos.

    setDraft("");
  }

  // 3. Add a handler that toggles only the selected todo.

  return (
    <main>
      <h1>Todo list</h1>
      <p>Add tasks and mark them complete.</p>
      <form onSubmit={handleAdd}>
        <label htmlFor="new-todo">New task</label>
        <div className="input-row">
          <input
            id="new-todo"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="e.g. Buy groceries"
          />
          <button type="submit">Add task</button>
        </div>
      </form>
      <ul aria-label="Tasks">
        {/* 2. Render your todos here. This static row is a markup example;
            replace it with rows from state. */}
        <li>
          <label>
            <input type="checkbox" disabled />
            <span>Example task (replace this row)</span>
          </label>
        </li>
      </ul>
    </main>
  );
}
