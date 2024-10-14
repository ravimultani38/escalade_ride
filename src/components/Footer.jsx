
import './Footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'; // Make sure to install react-icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
            <p className="footer-copyright">&copy; 2024 Escalade Ride. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
