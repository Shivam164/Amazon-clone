import './Footer.css';
import { Link } from 'react-router-dom';
import BackToTop from "react-back-to-top-button";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };

    return ( 
        <div className = "footer">
           
            <div onClick={scrollToTop} className="footer__backToTop">
                BACK TO TOP
            </div>
            <div className="footer__info">
                <div className="footer__knowUs">
                    <h3>Get to Know Us</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Relases</p>
                    <p>Amazon Cares</p>
                    <p>Gift a Smile</p>

                </div>
                <div className="footer__contact">
                    <h3>Contact with Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>

                </div>
                <div className="footer__Money">
                    <h3>Make Money with Us</h3>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Amazon Global Selling</p>
                    <p>Become an Affiliate</p>
                    <p>Fullfilment by Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Amazon Pay on Merchants</p>

                </div>
                <div className="footer__help">
                    <h3>Let Us Help You</h3>
                    <p>COVID-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Center</p>
                    <p>100% Purchase Protection</p>
                    <p>Amazon App Download</p>
                    <p>Amazon Assistant Download</p>
                    <p>Help</p>

                </div>
            </div>
        </div>
     );
}
 
export default Footer;