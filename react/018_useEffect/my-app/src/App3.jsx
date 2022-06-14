import {useState, useEffect} from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
	console.log("렌더링이 됩니다..?")//렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

    // 최적화가 되지 않은 코드!
  useEffect(() => {
    setInterval(setToday(new Date()), 1000)
    ;
    setHour(today.getHours());
    setMin(today.getMinutes());
    setSec(today.getSeconds());
  }, [today]);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Time/>
    </div>
  );
}

export default App;