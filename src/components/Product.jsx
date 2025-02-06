import PropTypes from 'prop-types'

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
Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
}
export default Product;