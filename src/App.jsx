import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div>
      </div>
      <h1>Timer</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
