import React from "react";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useSignup } from "../../hooks/useSignup";
import styles from "./signup.module.css";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickName] = useState("");
    const { error, isPending, signup } = useSignup();

    const { dispatch } = useAuthContext();

    const handleData = (e) => {
        if (e.target.type === "email") {
            setEmail(e.target.value);
        } else if (e.target.type === "password") {
            setPassword(e.target.value);
        } else if (e.target.type === "text") {
            setNickName(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, nickname);
        signup(email, password, nickname);
    };

    return (
        <form className={styles.signup_form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>회원 가입</legend>

                <label htmlFor="myEmail">email: </label>
                <input
                    type="email"
                    id="myEmail"
                    required
                    value={email}
                    onChange={handleData}
                />
                <label htmlFor="myPassWord">password: </label>
                <input
                    type="password"
                    id="myPassWord"
                    required
                    value={password}
                    onChange={handleData}
                />
                <label htmlFor="myNickName">nickname: </label>
                <input
                    type="text"
                    id="myNickName"
                    required
                    value={nickname}
                    onChange={handleData}
                />

                <button type="submit" className={styles.btn}>
                    회원 가입
                </button>
            </fieldset>
        </form>
    );
}
