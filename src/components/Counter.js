import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("interval");
      setCount((prev) => prev + 1);
    }, 1000);
    // this clearInterval(interval) is needed to stop asynchronous events (increasing the count with an interval in this case) when a component is unmounted
    return () => clearInterval(interval);
  }, []);

  // no array means the function is triggered with every change of state
  useEffect(() => {
    //console.log("Bir state değişti.");
  });

  // empty array indicates that the function is triggered when a component is "mounted"
  useEffect(() => {
    //console.log("Component mount edildi");
  }, []);

  // the function inside useEffect will only be triggered when the component inside the array (count) is changed
  useEffect(() => {
    //console.log("Count state değişti");
  }, [count]);

  useEffect(() => {
    //console.log("Amount state değişti");
  }, [amount]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + amount)}>
        Increase
      </button>
      <button onClick={() => setCount((prev) => prev - amount)}>
        Decrease
      </button>
      <hr />

      <div> Increase: +{amount}</div>
      <div> Decrease: -{amount}</div>

      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(3)}>3</button>
      <button onClick={() => setAmount(10)}>10</button>
    </div>
  );
}

export default Counter;
