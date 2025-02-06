import {useNavigate} from "react-router-dom";

import searchIcon from "../assets/images/search.svg"
import profileIcon from '../assets/images/profile.svg'
import cartIcon from '../assets/images/cart.svg'
import jwImage from '../assets/images/dogs-smelling.jpg'
import petImage from '../assets/images/cute-dog.jpg'
import PurposeImage from '../assets/images/purpose-image.jpg'
import Dog1 from '../assets/images/dog1.png'
import Dog2 from '../assets/images/dog2.png'
import HatDog from '../assets/images/hat-dog.jpg'
import ArrowDown from '../assets/images/arrow-down.svg'
import CuteDog2 from '../assets/images/cute-dog2.jpg'
import CuteDog3 from '../assets/images/cute-dog3.jpg'
import CuteDog4 from '../assets/images/cute-dog4.jpg'
import Student from '../assets/images/student.jpg'
import PlusSign from '../assets/images/plus-add.svg'

import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";
import PetArticle from "../components/PetArticle";

const AboutPage = () => {
    const navigate = useNavigate();

    const articles = [
        {image: CuteDog2, title: 'The power of play why regular exercise is essential for your pets health', message: 'Learn about fun and effective ways to incorporate play into your pets daily routine, ensuring they stay active, stimulated, and full of energy.'},
        {image: CuteDog3, title: 'Understanding pet behavior insights into your furry friend\'s actions', message: 'Learn to decode their body language, interpret their vocalizations, and understand the underlying reasons behind their behaviors.'},
        {image: CuteDog4, title: 'Traveling with pets made easy essential tips for stress-free journeys', message: 'Learn how to prepare for trips, whether by car, plane, or train, and discover strategies for keeping your pet comfortable & calm throughout the journey.'}
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
                        <li className="nav-link" onClick={() => navigate("/")}>Home</li>
                        <li className="nav-link" onClick={() => navigate("/about")}>About</li>
                        <li className="nav-link" onClick={() => navigate("/categories")}>Categories</li>
                        <li className="nav-link">Shop</li>
                        <li className="nav-link">Blogs</li>
                        <li className="nav-link">Reviews</li>
                        <li className="nav-link">Contact</li>
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
            </header>
            <main className='about-page-main'>
                <div className="title">About us</div>
                <div className="description">
                    Our journey began with a shared love for animals and a desire to make a difference in the lives of
                    pets everywhere. What started as a small venture has grown into a thriving community.
                </div>
                <div className="wrap-img">
                    <ImageCarousel/>
                </div>
                <div className="jw-wrap">
                    <div className="jw-image">
                        <img src={jwImage} alt=""/>
                    </div>
                    <div className="jw-info">
                        <div className="jw-top">
                            <div className="jw-title">Our journey</div>
                            <p>Our journey began with a simple yet profound love for animals a love that ignited our
                                passion to make a difference in the lives of pets and their devoted owners.</p>
                            <p>From the very beginning, our mission has been clear to provide pets with the love, care,
                                and attention.</p>
                        </div>
                        <div className="jw-bottom">
                            <div className="jw-block">
                                <div className="jw-block-info">
                                    <div className="jw-bottom-info">12</div>
                                    <div className='jw-bottom-subinfo'>Years of Experience</div>
                                </div>
                                <div className='jw-bottom-description'>Established in 2013. Based on London</div>
                            </div>
                            <div className="jw-block">
                                <div className="jw-block-info">
                                    <div className="jw-bottom-info">96%</div>
                                    <div className='jw-bottom-subinfo'>Client Satisfaction</div>
                                </div>
                                <div className='jw-bottom-description'>Our commitment to excellence speaks volumes.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrap">
                    <div className="section-data">
                        <div className="section-info">
                            <div className="section-title">Creating harmony between pets and people</div>
                            <div className="section-title">Fostering stronger pet-owner connections</div>
                            <div className="section-title">Advocating for trustworty pet solutions</div>
                        </div>
                        <button className="section-btn" type='button'>Contact us</button>
                    </div>
                    <div className="section-image">
                        <img src={petImage} alt=""/>
                    </div>
                </div>
                <div className="purpose-section">
                    <div className="ps-image">
                        <img src={PurposeImage} alt=""/>
                    </div>
                    <div className="ps-data">
                        <div className="ps-data-title">
                            Inspiring pet wellness guided by passion and defined by purpose
                        </div>
                        <div className="ps-data-info">
                            We aim to create a world where everyone has access to exceptional eyewear that not only
                            enhances their vision but also reflects their unique style.
                        </div>
                        <div className="ps-data-info">Through relentless innovation and unwavering dedication, we're on
                            a mission to make premium eyewear accessible to all, empowering individuals to express
                            themselves with confidence and clarity.
                        </div>
                        <button className="ps-data-btn" type='button'>Shop now</button>
                    </div>
                </div>
                <div className="shopnow-section">
                    <div className="shopnow">
                        <div className="shopnow-title">Last chance to save shop our limited time offers now!</div>
                        <button className="shopnow-btn">Shop now</button>
                    </div>
                    <img className='dog-1' src={Dog1} alt=""/>
                    <img className='dog-2' src={Dog2} alt=""/>
                </div>
                <div className="provide-section">
                    <div className="provide-title">
                        What we provide
                    </div>
                    <div className="provide-data">
                        <div className="provide-data-img">
                            <img src={HatDog} alt=""/>
                        </div>
                        <div className="provide-data-info">
                            <div className="pd-info-toggle">
                                <div className="pd-info-toggle-title">Pet nutritionist</div>
                                <div className="pd-info-toggle-icon">
                                    <img src={ArrowDown} alt=""/>
                                </div>
                            </div>
                            <div className="pd-info-toggle">
                                <div className="pd-info-toggle-title">Food quality & safety</div>
                                <div className="pd-info-toggle-icon">
                                    <img src={ArrowDown} alt=""/>
                                </div>
                            </div>
                            <div className="pd-info-toggle">
                                <div className="pd-info-toggle-title">Pets health & well-being</div>
                                <div className="pd-info-toggle-icon">
                                    <img src={ArrowDown} alt=""/>
                                </div>
                            </div>
                            <div className="pd-info-toggle">
                                <div className="pd-info-toggle-title">Pets all accessories</div>
                                <div className="pd-info-toggle-icon">
                                    <img src={ArrowDown} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-section">
                    <div className="article-section-title">
                        Latest articles
                    </div>
                    <div className="articles">
                        {articles.map((article) => (
                            <PetArticle
                                image={article.image}
                                title={article.title}
                                message={article.message}
                            />
                        ))}
                    </div>
                </div>
                <div className="questioning-section">
                    <div className="qs-title">Have Any Questions?</div>
                    <div className="qs-info">
                        <div className="qs-questions">
                            <div className="question">
                                <span className='question-title'>Question 1</span>
                                <span className="empty-space"></span>
                                <span className='question-btn'><img src={PlusSign} alt=""/></span>
                            </div>
                            <hr/>
                            <div className="question">
                                <span className='question-title'>Question 1</span>
                                <span className="empty-space"></span>
                                <span className='question-btn'><img src={PlusSign} alt=""/></span>
                            </div>
                            <hr/>
                            <div className="question">
                                <span className='question-title'>Question 1</span>
                                <span className="empty-space"></span>
                                <span className='question-btn'><img src={PlusSign} alt=""/></span>
                            </div>
                            <hr/>
                            <div className="question">
                                <span className='question-title'>Question 1</span>
                                <span className="empty-space"></span>
                                <span className='question-btn'><img src={PlusSign} alt=""/></span>
                            </div>
                            <hr/>
                            <div className="question">
                                <span className='question-title'>Question 1</span>
                                <span className="empty-space"></span>
                                <span className='question-btn'><img src={PlusSign} alt=""/></span>
                            </div>
                            <hr/>
                            <div className="question">
                                <span className='question-title'>Question 1</span>
                                <span className="empty-space"></span>
                                <span className='question-btn'><img src={PlusSign} alt=""/></span>
                            </div>
                            <hr/>
                        </div>
                        <div className="qs-image">
                            <img src={Student} alt=""/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default AboutPage;
