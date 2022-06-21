import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import './productcard.css'
import { useState, useRef } from "react";

export default function ProductCard({productName, price, thumbnailImg}){
    const [like, setLike] = useState(false);
    const likeButtonRef = useRef(false);
    const checkLike = (e) => {
        console.log(e.target);
        if(likeButtonRef.current.value === true){
            e.target.classList.add("on");
        }
        else{
            e.target.classList.remove("on");
        }
        setLike(!like);
    }
    return (
        <li className="product-item">
            <div className="product-img">
                <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
            </div>
                <ProductName productName={productName}/>
            <button className="like-btn" ref={likeButtonRef} onClick={checkLike}></button>
            <div className="product-price">
                <ProductPrice price={price}/>
            </div>
        </li>
    )
}