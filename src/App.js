import './App.scss';

function App() {
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
                        <div className="search"><img src="/images/search.svg" alt="search"/></div>
                        <div className="profile"><img src="/images/profile.svg" alt="profile"/></div>
                        <div className="cart">
                            <img src="/images/cart.svg" alt="cart"/>
                            <h1 className="products-amount">Cart (0)</h1>
                        </div>
                    </div>
                </div>
            </header>
            <main></main>
        </div>
    );
}

export default App;
