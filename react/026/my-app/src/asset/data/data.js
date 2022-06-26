import { createContext } from "react"

let resultArr = [];

const fetchedData = async () => {
    // let resultArr = [];
    const data = await fetch("https://test.api.weniv.co.kr/mall");
    const result = await data.json();
    return result;
    // return resultArr;
};

export const data = createContext(fetchedData());
