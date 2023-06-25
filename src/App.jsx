import { useState } from "react";
import "./App.css";
import Clicker from "./components/Clicker";
import WithRef from "./components/Ref";

function App() {
  const [isClicker, setClicker] = useState(false);

  return (
    <>
      <h1>Timer</h1>
      <WithRef />
      <div className="card">
        <button onClick={() => setClicker(!isClicker)}>Toggle clicker</button>
        {isClicker && <Clicker />}
      </div>
    </>
  );
}

export default App;
