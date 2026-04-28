import { Link } from 'react-router-dom';
import LocationLinks from '../common/LocationLinks';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>Inkspire Digital Designs</h4>
                        <p>Professional web design and graphic design by a freelance designer in Amanzimtoti, Durban, serving clients across South Africa nationwide.</p>
                        <div className="social-links">
                            <a href="https://facebook.com/inkspiredigitaldesigns" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com/inkspire0000" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com/company/inkspire-digital-designs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://twitter.com/inkspiredigitaldesigns" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://tiktok.com/@inkspiredigitaldesigns" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <i className="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Service Areas</h4>
                        <ul>
                            <li><Link to="/cape-town-web-design">Cape Town</Link></li>
                            <li><Link to="/johannesburg-web-design">Johannesburg</Link></li>
                            <li><Link to="/pretoria-web-design">Pretoria</Link></li>
                            <li><Link to="/durban-web-design">Durban</Link></li>
                            <li>South Africa Nationwide</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><i className="fab fa-whatsapp"></i> +27 76 105 0485</li>
                            <li><i className="far fa-envelope"></i> hello@inkspiredigitaldesigns.co.za</li>
                            <li><i className="fas fa-map-marker-alt"></i> Amanzimtoti, Durban</li>
                        </ul>
                    </div>
                </div>

                {/* Location Links - Internal linking for SEO */}
                <div className="footer-location-links">
                    <LocationLinks />
                </div>

                <div className="copyright">
                    <p>&copy; 2026 Inkspire Digital Designs. All rights reserved. | Web Design South Africa | Serving Nationwide</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
