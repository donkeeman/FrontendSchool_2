import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import styles from "./nav.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Nav() {
    const { logout } = useLogout();
    const {user} = useAuthContext();
    return (
        <nav className={styles.nav}>
            <h1 className={styles.tit}>My Diary</h1>
            <ul className={styles.list_nav}>
                {!user && (
                    <>
                        <li>
                            <Link to="/login">로그인</Link>
                        </li>
                        <li>
                            <Link to="/signup">가입하기</Link>
                        </li>
                    </>
                )}
                {user && (
                    <li>
                        <button type="button" onClick={logout}>
                            로그아웃
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
}
