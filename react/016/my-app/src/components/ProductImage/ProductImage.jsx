function ProductImage({thumbnailImg, productName}) {
    const imgURL = "http://test.api.weniv.co.kr/" + thumbnailImg;
    return <img src={imgURL} alt={productName} />;
}

export default ProductImage;