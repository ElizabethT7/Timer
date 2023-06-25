import { useState } from "react";
import "./App.css";
import Timer from './components/Timer';

function App() {
  const [isTimer, setTimer] = useState(false);

  return (
    <>
      <h1>Timer</h1>
      <div className="card">
        <button onClick={() => setTimer(!isTimer)}>Toggle timer</button>
        {isTimer && <Timer />}
      </div>
    </>
  );
}

export default App;
