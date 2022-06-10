import Card from  "./Card.js"
import Cart from "./Cart.js"

const Product = (props) => {
    console.log(props);
    return(
        <main className="product">
        <ul className="product-list">
            {props.map(item => {
                <Card goods={props} key={props.id} />
            })}
        </ul>
        <Cart />
        </main>
    );
}

export default Product;