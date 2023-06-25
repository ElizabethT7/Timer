import { useEffect, useRef, useState } from "react";

const WithRef = () => {
  //const inputEl = useRef(null);
  //console.log(inputEl);
  const numRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    //numRef.current = 1;
    setCount(count + 1);
    setCount(count + 1);
    /*setCount((prevCount) => {
      prevCount + 1;
    });*/
  };
  useEffect(() => {
    //console.log(inputEl);
    console.log(numRef.current);
  });

  return (
    <div>
      {/*<input placeholder='name' ref={inputEl}/> */}
      <button onClick={handleClick}>{count}</button>
			<button onClick={handleClick}>{numRef.current}</button>
    </div>
  );
};

export default WithRef;
