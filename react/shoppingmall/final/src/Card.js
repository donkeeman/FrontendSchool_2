const Card = (props) => {
    const {price, productName, thumbnailImg} = props;
    const url = `http://test.api.weniv.co.kr/${thumbnailImg}`;
    return (
        <li class="product-item">
            <div class="product-img">
                <img src={url} />
            </div>
            <strong class="product-name sl-ellipsis">{productName}</strong>
            <button class="like-btn"></button>
            <div class="product-price">
                <strong class="price m-price">{price}<span>원</span></strong>
            </div>
        </li>
    )
}

export default Card;