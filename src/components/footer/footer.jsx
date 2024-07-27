import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer-section'>
            <div>
                <div className='socials-footer'>
                    <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
                    <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
                    <a href="https://pinterest.com" target="_blank"><FaPinterest /></a>
                </div>
                <div className='socials-btn'>
                    <a href='#about'>ABOUT</a>
                    <a href='#articles'>ARTICLES</a>
                    <button type='button' className='subscribe-btn' >SUBSCRIBE</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer