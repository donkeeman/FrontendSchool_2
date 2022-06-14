import { BrowserRouter, Route, Link } from "react-router-dom";
import style from "./navbar.module.css";
import Document from "../pages/Document";
import Tutorial from "../pages/Tutorial";
import Blog from "../pages/Blog";
import Community from "../pages/Community";


const Navbar = () => {
    return (
            <BrowserRouter>
                <div className={style.navBar}>
                    <Link to="/Document" className={style.link}>문서</Link>
                    <Link to="/Tutorial" className={style.link}>자습서</Link>
                    <Link to="/Blog" className={style.link}>블로그</Link>
                    <Link to="/Community" className={style.link}>커뮤니티</Link>
                </div>

                <Route path="/Document" exact component={Document} />
                <Route path="/Tutorial" exact component={Tutorial} />
                <Route path="/Blog" exact component={Blog} />
                <Route path="/Community" exact component={Community} />
            </BrowserRouter>
        
    );
};

export default Navbar;