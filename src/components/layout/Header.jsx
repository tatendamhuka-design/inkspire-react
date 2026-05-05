import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DarkModeToggle from '../common/DarkModeToggle';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false);
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openWhatsApp = () => {
        window.open('https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%27m%20interested%20in%20your%20services.', '_blank');
    };

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="logo">
                    <span className="logo-text">Inkspire Digital Designs</span>
                </Link>
                
                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {/* Home - stays as scroll or Link? Keeping original scroll behavior */}
                    <a onClick={() => scrollToSection('home')}>Home</a>
                    
                    {/* SERVICES - NOW POINTS TO DEDICATED PAGE */}
                    <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
                    
                    <a onClick={() => scrollToSection('pricing')}>Pricing</a>
                    <a onClick={() => scrollToSection('contact')}>Contact</a>
                    
                    {/* MORE DROPDOWN */}
                    <div className="dropdown">
                        <a className="dropbtn">More <i className="fas fa-chevron-down"></i></a>
                        <div className="dropdown-content">
                            <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
                            <a onClick={() => scrollToSection('testimonials')}>Testimonials</a>
                            <a onClick={() => scrollToSection('blog')}>Blog</a>
                            <a onClick={() => scrollToSection('referral')}>Refer & Earn</a>
                            <Link to="/cape-town-web-design">Cape Town</Link>
                            <Link to="/johannesburg-web-design">Johannesburg</Link>
                            <Link to="/pretoria-web-design">Pretoria</Link>
                            <Link to="/durban-web-design">Durban</Link>
                        </div>
                    </div>
                    
                    {/* Request Demo Button */}
                    <button className="btn btn-demo" onClick={openWhatsApp}>
                        <i className="fab fa-whatsapp"></i> Request Demo
                    </button>
                </div>
                
                <div className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <DarkModeToggle />
            </nav>
        </header>
    );
};

export default Header;