import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>template-web</h1>
      <p>Vite, React, and TypeScript. Replace this component with your own.</p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        count is {count}
      </button>
    </main>
  );
}
