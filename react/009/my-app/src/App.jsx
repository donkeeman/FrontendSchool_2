import './App.css'
import Homepage from './pages/homepage/Homepage';
import Login from "./pages/login/Login"


function App() {
  const user = {
    login: true,
    id: "이혜원",
    nickname: "당나구맨",
  }
  return (
  <div>
      {user.login?<Homepage id={user.id} username={user.nickname}/>:<Login />}
  </div>
  );
}

export default App;