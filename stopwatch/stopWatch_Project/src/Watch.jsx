import React from "react";


function Watch(){

const Counter = () => {
    const [counterObject, setCounterObject] = React.useState({
      counter: 0,
      CounterCountDown: false
    });
  
    const startCount = () => {
      setCounterObject({
        CounterCountDown: true,
        counter: counterObject.counter
      });
    };
    const stopCount = () => {
      setCounterObject({
        CounterCountDown: false,
        counter: counterObject.counter
      });
    };
    const resetCount = () => {
      setCounterObject({
        CounterCountDown: false,
        counter: 0
      });
    };
  
    useEffect(() => {
      if (counterObject.CounterCountDown) {
        let startCounter = setInterval(() => {
          setCounterObject({
            CounterCountDown: true,
            counter: counterObject.counter + 1
          });
        }, 1000);
        return () => {
          clearInterval(startCounter);
        };
      }
    }, [counterObject]);
  
    return (
      <div >
      <div>{counterObject.counter}</div>
        <button onClick={startCount}>Start Count</button> &nbsp;&nbsp;
        <button onClick={resetCount}>Reset Count</button>&nbsp;&nbsp;
        <button onClick={stopCount}>stop Count</button>
      </div>
    );
  }
}

export default Watch;