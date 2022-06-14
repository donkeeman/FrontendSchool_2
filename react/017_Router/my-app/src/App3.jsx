import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const value = {
    one: "10",
    two: "20",
    three: "30",
    four: "40",
  }
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Route 
        path="/" 
        exact 
        component={Index}
      />
      <Route 
        path="/one" 
        exact 
        component={One}
      />
      <Route 
        path="/one/ex" 
        exact 
        component={OneExtend}
      />
      <Route 
        path="/two"
        component={Two}
      />
      <Route
        path="/three" 
        render={()=><Three {...value}/>}
      />
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One(){
  return <h1>hello world1</h1>
}

function OneExtend(){
  return <h1>hello world one extend</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(props){
  console.log(props);
  return <h1>hello world3</h1>
}

export default App;