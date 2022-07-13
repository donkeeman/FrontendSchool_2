import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
    const { isAuthReady, user } = useAuthContext();
    return (
        <div className="App">
            {isAuthReady ? (
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                user ? (
                                    <Home />
                                ) : (
                                    <Navigate replace={true} to="/login" />
                                )
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                !user ? (
                                    <Login />
                                ) : (
                                    <Navigate replace={true} to="/" />
                                )
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                !user ? (
                                    <Signup />
                                ) : (
                                    <Navigate replace={true} to="/" />
                                )
                            }
                        />
                    </Routes>
                </BrowserRouter>
            ) : (
                "로딩중입니다..."
            )}
        </div>
    );
}

export default App;
