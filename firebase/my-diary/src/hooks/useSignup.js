import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth } from "../firebase/config";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = (email, password, nickname) => {
        setError(null);
        setIsPending(true);

        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                if (!user) {
                    throw new Error("회원가입에 실패했습니다.");
                }

                updateProfile(appAuth.currentUser, { nickname })
                    .then(() => {
                        setError(null);
                        setIsPending(false);
                        dispatch({ type: "login", payload: user });
                    })
                    .catch((error) => {
                        setError(error.message);
                        setIsPending(false);
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
                console.log(error.message);
            });
    };

    return { error, isPending, signup };
};
