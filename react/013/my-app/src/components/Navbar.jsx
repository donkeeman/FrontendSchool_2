import style from "./navbar.module.css";

const Navbar = () => {
    return (
        <ul className={style.navList}>
            <li id="document" className={style.list}>문서</li>
            <li id="tutorial" className={style.list}>자습서</li>
            <li id="blog" className={style.list}>블로그</li>
            <li id="community" className={style.list}>커뮤니티</li>
        </ul>
    );
};

export default Navbar;