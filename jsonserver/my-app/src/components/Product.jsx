import React from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Product(){
    useEffect(() => {
        axios.get("http://test.api.weniv.co.kr/mall")
        .then(res => {
            console.log(`axios:`)
            console.log(res.data)
        })

        fetch("http://test.api.weniv.co.kr/mall")
        .then(res => res.json())
        .then(data => {
            console.log(`fetch:`)
            console.log(data)
        })
    }, [])
    return (
        <h1>Product</h1>
    )
}