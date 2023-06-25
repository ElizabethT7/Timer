import { useState, useEffect, useRef } from "react";

const timerStyle = {
  padding: "20px",
  borderRadius: "5px",
  backgroundColor: "chartreuse",
};

function setDefaultValue() {
  //componentDidMount()
  const userCount = localStorage.getItem("timer");
  return userCount ? Number(userCount) : 0;
}

function Timer() {
  const [count, setCount] = useState(setDefaultValue());
  const [isCounting, setCounting] = useState(false);
  const timerIdRef = useRef(null);

  const handleStart = () => {
    setCounting(true);
  };

  const handleStop = () => {
    setCounting(false);
  };

  const handleReset = () => {
    setCount(0);
    setCounting(false);
  };

  useEffect(() => {
    localStorage.setItem("timer", count);
  }, [count]);

  useEffect(() => {
    //componentDidUpdate()
    console.log("update");
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    //componentWillUnmount()
    return () => {
      console.log("unmount");
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    };
  }, [isCounting]);

  return (
    <div style={timerStyle}>
      <h2>React Timer</h2>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button style={{ marginLeft: "8px" }} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
