import React, { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const LoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    alert(`id : ${id}, pw : ${pw}`);
  };

  const LoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value);
  };

  const passwordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value);
  };

  return (
    <form onSubmit={LoginSubmit}>
      <label>
        아이디 : <input type="text" onChange={LoginInput} />
      </label>
      <label>
        비밀번호 :
        <input type="password" onChange={passwordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
};

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Login />
    </div>
  );
}

export default App;

