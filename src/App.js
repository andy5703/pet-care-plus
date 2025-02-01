import './App.scss';
import ProductCategory from "./assets/components/ProductCategory";
import Product from "./assets/components/Product";

import searchIcon from "./assets/images/search.svg"
import profileIcon from './assets/images/profile.svg'
import cartIcon from './assets/images/cart.svg'
import HfImage1 from './assets/images/hf-img1.jpg'
import HfImage2 from './assets/images/hf-img2.jpg'
import HfImage3 from './assets/images/hf-img3.jpg'
import HfImage4 from './assets/images/hf-img4.jpg'
import HeroRightImage1 from './assets/images/hero-right1.jpg'
import HeroRightImage2 from './assets/images/hero-right2.jpg'
import IcHero from './assets/images/ic-hero.svg'
import PetFood from './assets/images/pet-food-bag.jpg'
import BowlDogFood from './assets/images/bowl-dog-food.png'
import PetSnack from './assets/images/dog-treats.png'
import Litter from './assets/images/pet-litter2.png'
import DogToy1 from './assets/images/dog-toy1.png'
import Leash from './assets/images/leash.png'
import DogCostume from './assets/images/pet-costume.png'
import DogGrooming from './assets/images/dog-grooming.png'
import PetVitamins from './assets/images/pet-vitamins.png'
import TropicalFood from './assets/images/tropical-mix-food.png'

function App() {
    const productCategories = [
        {image: BowlDogFood, title: 'Pet Food', message: 'Healthy food.'},
        {image: PetSnack, title: 'Pet Treats', message: 'Tasty Canine Delights.'},
        {image: Litter, title: 'Litter Care', message: 'Fresh Environment.'},
        {image: DogToy1, title: 'Toys & Entertainment', message: 'Fun, interactive, and engaging toys.'},
        {image: Leash, title: 'Collars, Leashes & Harnesses', message: 'Secure, stylish, and comfortable gear.'},
        {image: DogCostume, title: 'Clothing & Accessories', message: 'Stylish, comfortable, and functional wear.'},
        {image: DogGrooming, title: 'Grooming & Hygiene', message: 'Keeps pets clean, healthy, and fresh.'},
        {image: PetVitamins, title: 'Supplements & Vitamins', message: 'Boosts health, energy, and immunity.'}
    ];

    const products = [
        { image: TropicalFood, title: 'Egg Food Blend', price: 200 },
        { image: TropicalFood, title: 'Egg Food Blend', price: 168 },
        { image: TropicalFood, title: 'Egg Food Blend', price: 168 },
        { image: TropicalFood, title: 'Egg Food Blend', price: 168 },
        { image: TropicalFood, title: 'Egg Food Blend', price: 168 },
        { image: TropicalFood, title: 'Egg Food Blend', price: 168 },
        { image: TropicalFood, title: 'Egg Food Blend', price: 168 },
        { image: TropicalFood, title: 'Egg Food Blend', price: 168 }
    ];
    return (
        <div className="App">
            <header>
                <div className="navbar-wrap">
                    <div className="deal-popup">
                        <p className='p1'>From bowls to beds, we've got it all.</p>
                        <p className='p2'>Summer Deal 20% Off</p>
                    </div>
                    <h1 className='title'>Care Plus</h1>
                    <ul className='navbar-center'>
                        <li className="nav-link"><a href="#About">About</a></li>
                        <li className="nav-link"><a href="#Categories">Categories</a></li>
                        <li className="nav-link"><a href="#Shop">Shop</a></li>
                        <li className="nav-link"><a href="#Blogs">Blogs</a></li>
                        <li className="nav-link"><a href="#Reviews">Reviews</a></li>
                        <li className="nav-link"><a href="#Contact">Contact</a></li>
                    </ul>
                    <div className="navbar-right">
                        <div className="search"><img src={searchIcon} alt="search"/></div>
                        <div className="profile"><img src={profileIcon} alt="profile"/></div>
                        <div className="cart">
                            <img src={cartIcon} alt="cart"/>
                            <h1 className="products-amount">Cart (0)</h1>
                        </div>
                    </div>
                </div>
                <div className="hero-wrap">
                    <div className="hero-left">
                        <div>
                            <h1 className='hero-title'>Where every pets finds comfort and joy!</h1>
                            <button className='hero-btn' type='button'>View Collection</button>
                        </div>
                        <div className="hero-facts">
                            <div className="hf-block-left">
                                <h1>$2M</h1>
                                <p>Over $5 million in pet products sold worldwide.</p>
                            </div>
                            <div className="hf-block-right">
                                <h1>96%</h1>
                                <p>Our customers report satisfaction with our products.</p>
                                <div>
                                    <img src={HfImage1} alt="#"/>
                                    <img src={HfImage2} alt="#"/>
                                    <img src={HfImage3} alt="#"/>
                                    <img src={HfImage4} alt="#"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="hero-top">
                            <div className="hero-image1">
                                <img src={HeroRightImage1} alt="#"/>
                            </div>
                            <div className="hero-image2">
                                <img src={HeroRightImage2} alt="#"/>
                            </div>
                        </div>
                        <div className="hero-bottom">
                            <div className="hero-thumb"></div>
                            <div className="best-seller">
                                <div className="bs-left">
                                    <img src={IcHero} alt="#"/>
                                    <p>Best Seller Product</p>
                                </div>
                                <div className="bs-right">
                                    <div className="bs-img">
                                        <img src={PetFood} alt="#"/>
                                    </div>
                                    <div className="bs-line"></div>
                                    <div className="bs-data">
                                        <p className='p1'>PetPedicure Nail Clippers</p>
                                        <p className='p2'>Your solution to maintaining your pet's paw perfection.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="shopby-category">
                    <div className='heading'>Browse by Category</div>
                    <div className="product-categories">
                        {productCategories.map((category, index) => (
                            <ProductCategory
                                key={index}
                                image={category.image}
                                title={category.title}
                                message={category.message}
                            />
                        ))}
                    </div>
                </div>
                <div className="products-list">
                    <div className="heading">Latest Products</div>
                    <div className="products">
                        {products.map((product, index) => (
                            <Product
                                key={index}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
