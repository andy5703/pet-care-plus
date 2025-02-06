import Facebook from '../assets/images/facebook-logo.svg'
import Instagram from '../assets/images/instagram-logo.svg'
import XLogo from '../assets/images/x-logo.svg'
import Youtube from '../assets/images/youtube-logo.svg'
import Logo from '../assets/images/logo.svg'
import ArrowRight from '../assets/images/arrow-right2.svg'

const Footer = () => {
    return(
        <div className="Footer">
            <div className="footer-top">
                <div className="title">CarePlus on instagram</div>
                <button className='link-socials-btn' type='button'>@careplus_</button>
            </div>
            <div className="footer-middle">
                <div className="carousel"></div>
                <div className="footer-quick-links-container">
                    <div className="footer-quick-links">
                        <div className="quick-links">
                            <div className="ql-title">QUICK LINKS</div>
                            <div className="ql-link-container">
                                <div className="ql-link">About us</div>
                                <div className="ql-link">Categories</div>
                                <div className="ql-link">Shop</div>
                                <div className="ql-link">Blogs</div>
                                <div className="ql-link">Reviews</div>
                                <div className="ql-link">FAQ</div>
                                <div className="ql-link">Contact us</div>
                                <div className="ql-link">Privacy Policy</div>
                                <div className="ql-link">Return Policy</div>
                                <div className="ql-link">Terms & Conditions</div>
                                <div className="ql-link">License</div>
                            </div>
                        </div>
                        <div className="icon-links">
                            <div className="logo">
                                <img src={Logo} alt=""/>
                            </div>
                            <p className='description'>Tailored solutions for every furry friend.</p>
                            <div className="icons">
                                <div className="icon-link">
                                    <img src={XLogo} alt=""/>
                                </div>
                                <div className="icon-link">
                                    <img src={Facebook} alt=""/>
                                </div>
                                <div className="icon-link">
                                    <img src={Youtube} alt=""/>
                                </div>
                                <div className="icon-link">
                                    <img src={Instagram} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="subscribe-newsletter">
                            <div className="sn-title">SUBSCRIBE NEWSLETTER</div>
                            <div className="input">
                                <input className='email-input' type="email" placeholder='Email adress'/>
                                <button className='send-email-btn' type='button'>
                                    <img src={ArrowRight} alt=""/>
                                </button>
                            </div>
                            <div className="contact-info">
                                <div className="ci-email">Email: <span className="email-link">info@example.com</span></div>
                                <div className="ci-contact">Contact: <span className="contact-link">(229) 555-0109</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">© 2024 CarePlus. Designed by Andy. Powered by Webflow.</div>
        </div>
    );
}
export default Footer;