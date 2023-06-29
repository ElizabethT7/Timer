import { useEffect, useReducer } from "react";

const timerStyle = {
  padding: "20px",
  borderRadius: "5px",
  backgroundColor: "chartreuse",
};

const countReducer = (state, {action}) => {
  if (action === 'START') {
    return {
      ...state,
      isCounting: true,
    }
  }
  if (action === 'STOP') {
    return {
      count: 0,
      isCounting: false,
    }
  }
  if (action === 'RESET') {
    return {
      ...state,
      isCounting: false,
    }
  }
  if (action === 'TICK') {
    return {
      ...state,
      count: state.count + 1,
    }
  }
  return state;
}

function setDefaultValue() {
  //componentDidMount()
  const userCount = localStorage.getItem("timer");
  return userCount ? Number(userCount) : 0;
}

function Timer() {
  const [{count, isCounting}, dispatch] = useReducer(countReducer, {count: setDefaultValue(), isCounting: false});
  /*const [isCounting, setCounting] = useState(false);
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
  };*/

  useEffect(() => {
    localStorage.setItem("timer", count);
  }, [count]);

  useEffect(() => {
    //componentDidUpdate()
    let timerId = null;
    console.log("update");
    if (isCounting) {
      timerId = setInterval(() => {
        dispatch({ action: 'TICK' });
      }, 1000);
    }

    //componentWillUnmount()
    return () => {
      console.log("unmount");
      timerId && clearInterval(timerId);
      timerId = null;
    };
  }, [isCounting]);

  return (
    <div style={timerStyle}>
      <h2>React Timer</h2>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={() => dispatch({ action: 'START' })}>Start</button>
      ) : (
        <button onClick={() => dispatch({ action: 'STOP' })}>Stop</button>
      )}
      <button style={{ marginLeft: "8px" }} onClick={() => dispatch({ action: 'RESET' })}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
