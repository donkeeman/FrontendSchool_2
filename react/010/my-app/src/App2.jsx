import React, {useState} from "react";

function Resume(props) {
    const [like, setLike] = useState(false);

  function handleClickLike() {
      setLike(!like);
      console.log(like);
  }

  return(
      <div>
          <button onClick={handleClickLike}>like</button> {like?"like":""}
      </div>
  )
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;

