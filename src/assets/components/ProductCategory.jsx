import ArrrowImage from '../images/arrow-right.svg'

const ProductCategory = ({image, title = 'No title', message = 'No message'}) => (
    <div className="product-category">
        <div className="product-image">
            <img src={image} alt="product-image"/>
        </div>
        <div className="box"></div>
        <div className="product-info">
            <div className="product-title">{title}</div>
            <div className="product-message">{message}</div>
        </div>
        <button type='button' className='product-btn'>
            <img src={ArrrowImage} alt="#"/>
        </button>
    </div>
);

export default ProductCategory;