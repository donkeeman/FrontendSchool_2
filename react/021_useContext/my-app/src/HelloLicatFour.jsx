import { useContext } from "react";
import { ProductInfo } from "./context/productInfo";

const HelloLicatTwo = () => {
    const {name, price} = useContext(ProductInfo);
    return (
        <div>
            <h2>{name}</h2>
            <strong>{price}</strong>
        </div>
    );
};

export default HelloLicatTwo;