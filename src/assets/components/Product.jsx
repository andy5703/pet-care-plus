const Product = ({image, title = 'No title', price}) => {
    return (
        <div className="product">
            <div className="product-image">
                <img src={image} alt="#"/>
            </div>
            <div className="product-info">
                <div className="product-name">{title}</div>
                <div className="product-price">${price.toFixed(2)}</div>
            </div>
        </div>
    );
}

export default Product;