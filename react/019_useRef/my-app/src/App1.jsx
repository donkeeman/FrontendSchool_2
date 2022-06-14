import React, { useState, useEffect, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  let countThree = useRef(0)
  let countFour = 0

  // 렌더링됨
  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count); // 이거 비동기 처리되므로 늦게 출력됨
    // useEffect 쓰면 됨
  }
  // 렌더링됨
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo); // 이거 비동기 처리되므로 늦게 출력됨
    // useEffect 쓰면 됨
  }
  // 변수의 값은 증가하지만 렌더링은 안 됨
  const handleCountUpThree = (e) => {
    countThree.current = countThree.current + 1
  }
  // 변수의 값이 증가하지만 다시 0으로 초기화됨
  const handleCountUpFour = (e) => {
    countFour = countFour + 1
  }

  useEffect(() => {
    console.log('count가 감시되고 있습니다.');
    console.log(count);
  }, [count]) // count가 변경되는 것을 감시
  return(
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
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