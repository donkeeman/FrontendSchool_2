import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Route path="/" component={Index}/>
      <Route path="/one" component={One}/>
      <Route path="/one/ex" component={OneExtend}/>
      <Route path="/two" component={Two}/>
      <Route path="/three" component={Three}/>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>Hello world</h1>;
}

function One(){
  return <h1>Hello world 1</h1>;
}

function OneExtend(){
  return <h1>Hello world 1-1</h1>;
}

function Two(){
  return <h1>Hello world 2</h1>;
}

function Three(){
  return <h1>Hello world 3</h1>;
}

export default App;