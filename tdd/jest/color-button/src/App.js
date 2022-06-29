import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={() => setColor(newColor)}>change to {newColor}!</button>
    </div>
  );
}

export default App;(회고 팀원들끼리 프로젝트를 따로 하나 더 할 예정입니다.)