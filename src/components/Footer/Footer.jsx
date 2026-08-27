import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { IoPaperPlane, IoArrowUp } from 'react-icons/io5';
import './Footer.css';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <footer className="frame-footer" id="contact">
            {/* Decorative Geometric Accents in Background */}
            
            

            <div className="footer-container">
                {/* Top Grid Section */}
                <div className="footer-top-grid">
                    {/* Left Column: Heading & Subtitle */}
                    <div className="footer-col-left">
                        <h2 className="footer-headline">
                            We would
                            love to hear
                            from you!
                        </h2>
                        <p className="footer-subtext">
                            Feel free to reach out to us, or simply have a chat!
                        </p>

                        {/* <h4 className="footer-col-label">Newsletter</h4> */}
                        <form className="footer-newsletter-form mt-4" onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                className="footer-newsletter-input"
                            />
                            <button type="submit" className="footer-newsletter-btn" aria-label="Subscribe">
                                <IoPaperPlane className="footer-plane-icon" />
                            </button>
                        </form>
                    </div>

                    {/* Center Column: Newsletter */}


                    {/* Right Column: Contact Details */}
                    <div className="footer-col-right">
                        <div className="footer-contact-info">
                            <h4 className="footer-col-label">Contact us</h4>
                            <p className="footer-address">
                                2066 Duncan Avenue,<br />
                                Brooklyn, New York
                            </p>
                        </div>

                        <div className="footer-highlight-card">
                            <a href="mailto:Company@mail.com" className="footer-contact-link">
                                Company@mail.com
                            </a>
                            <a href="tel:+00123456789" className="footer-contact-link">
                                (+00)123456789
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation Links Row */}
                <div className="d-flex justify-content-between align-items-center">

                     {/* Large Watermark Brand Typography */}
                    <div className="footer-watermark-wrapper" aria-hidden="true">
                        <span className="footer-watermark-line">Trion</span>
                        {/* <span className="footer-watermark-line">Architecture</span> */}
                    </div> 

                    <div className="footer-nav-row">
                        <ul className="footer-nav-list">
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Service</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                   
                </div>

                {/* Bottom Bar: Copyright & Socials */}
                <div className="footer-bottom-bar">
                    <p className="footer-copyright">
                        © Trion.2026. All rights reserved
                    </p>

                    <div className="footer-bottom-right">
                        <div className="footer-social-links">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social-icon">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer-social-icon">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer-social-icon">
                                <FaInstagram />
                            </a>
                            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest" className="footer-social-icon">
                                <FaPinterestP />
                            </a>
                        </div>

                        {/* Scroll to Top Arrow */}
                        <button
                            type="button"
                            className="footer-scroll-top-btn"
                            onClick={scrollToTop}
                            aria-label="Scroll to top"
                        >
                            <IoArrowUp />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}