import React from "react";

const Greeting = () => {
  const onMouseEnter = () => {
    console.log("안녕하세요!");
  };

  const onMouseLeave = () => {
    console.log("안녕히가세요");
  };

  return (
    <div>
      <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        여기에 마우스를 올려보세요!
      </p>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Greeting />
    </div>
  );
}

export default App;

