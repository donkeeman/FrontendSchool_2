import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [checkRender, setCheckRender] = useState(false);
  const handleCountUp =(e)=>{
    setCount(count + 1)
  }
  useEffect(() => {
    if(checkRender){
      if(count % 2){
        alert("odd");
      }
      else{
        alert("even");
      }
    }
    setCheckRender(true);
  }, [checkRender, count])
  return(
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
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