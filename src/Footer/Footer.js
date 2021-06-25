import React from 'react';
import './footer.css';
import { FaFacebook, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import FooterFirstImg from './img/first-footer-img.png';
import FooterSecondImg from './img/second-footer-img.png';
import FooterThirdImg from './img/third-footer-img.png';
import FooterFourthImg from './img/fourth-footer-img.png';
import FooterFifthImg from './img/fiifth-footer-img.png';
import FooterSixthImg from './img/sixth-footer-img.png';
import FooterSeventhImg from './img/seventh-footer-img.png';
import FooterEigthImg from './img/eigth-footer-img.png';
import FooterNinthImg from './img/ninth-footer-img.png';
import FooterTenthImg from './img/tenth-footer-img.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer-column"> 
            <div className="footer-main-column">
                <div className="footer-center-column">
                    <ul className="d-flex ">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Search</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms of Services</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Customization & Gifting</a></li>
                    </ul>
                    <div className="footer-icon">
                        <FaFacebookSquare style={{marginRight:"15px"}} />
                        <FaInstagram/>
                    </div>
                    <div>
                        <p className="d-inline-block hans">
                        © 2021Kal Hans Naturals
                        </p>
                    </div>
                    <div className="footer-img-column">
                        <img src={FooterFirstImg} className="img-fluid" alt=""/>
                        <img src={FooterSecondImg} className="img-fluid" alt=""/>
                        <img src={FooterThirdImg} className="img-fluid" alt=""/>
                        <img src={FooterFourthImg} className="img-fluid" alt=""/>
                        <img src={FooterFifthImg} className="img-fluid" alt=""/>
                        <img src={FooterSixthImg} className="img-fluid" alt=""/>
                        <img src={FooterSeventhImg} className="img-fluid" alt=""/>
                        <img src={FooterEigthImg} className="img-fluid" alt=""/>
                        <img src={FooterNinthImg} className="img-fluid" alt=""/>
                        <img src={FooterTenthImg} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    )
}

export default Footer
