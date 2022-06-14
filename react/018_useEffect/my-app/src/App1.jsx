import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleCountUp =(e)=>{
    setCount(count + 1)
  }
  const handleCountUp2 = (e) => {
    setCount2(count2 + 1);
  }
  useEffect(() => {
    if(count % 2){
      alert("odd");
    }
    else{
      alert("even");
    }
  }, [count, count2])
  return(
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{count2}</div>
      <button onClick={handleCountUp2}>up!</button>
    </>
  )
}
function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;