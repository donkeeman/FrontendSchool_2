import { useReducer } from "react";
import {
    addDoc,
    collection,
    doc,
    deleteDoc,
    Timestamp,
} from "firebase/firestore";
import { appFireStore } from "../firebase/config";

const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false,
};

const storeReducer = (state, action) => {
    switch (action.type) {
        case "isPending":
            return {
                isPending: true,
                document: null,
                success: false,
                error: null,
            };
        case "addDoc":
            return {
                isPending: false,
                document: action.payload,
                success: true,
                error: null,
            };
        case "deleteDoc":
            return {
                isPending: false,
                document: action.payload,
                success: true,
                error: null,
            };
        case "error":
            return {
                isPending: false,
                document: null,
                success: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const useFirestore = (transaction) => {
    const [response, dispatch] = useReducer(storeReducer, initState);

    const colRef = collection(appFireStore, transaction);

    const addDocument = async (doc) => {
        try {
            const createdTime = Timestamp.fromDate(new Date());
            const docRef = await addDoc(colRef, { ...doc, createdTime });
            dispatch({ type: "addDoc", payload: docRef });
        } catch (error) {
            dispatch({ type: "error", payload: error.message });
        }
    };

    const deleteDocument = async (id) => {
        dispatch({ type: "isPending" });
        try {
            const docRef = await deleteDoc(doc(colRef, id));
            dispatch({ type: "deleteDoc", payload: docRef });
        } catch (error) {
            dispatch({ type: "error", payload: error.message });
        }
    };

    return { response, addDocument, deleteDocument };
};
