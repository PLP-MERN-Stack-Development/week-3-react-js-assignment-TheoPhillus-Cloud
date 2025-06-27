import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center py-8">
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-16 w-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mb-4">Vite + React</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        count is {count}
      </button>
      <p className="mt-4 text-gray-500 text-sm">
        Edit <code>src/components/Counter.jsx</code> and save to test HMR
      </p>
    </div>
  );
}