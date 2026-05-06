import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DarkModeToggle from '../common/DarkModeToggle';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    // Check current theme on mount
    useEffect(() => {
        const theme = document.documentElement.getAttribute('data-theme');
        setIsDarkMode(theme === 'dark');
    }, []);

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

    // Listen for theme changes
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const theme = document.documentElement.getAttribute('data-theme');
            setIsDarkMode(theme === 'dark');
        });
        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="logo">
                    <img 
                        src="/android-chrome-192x192.png" 
                        alt="Inkspire Digital Designs Logo" 
                        className="logo-img"
                        width="45"
                        height="45"
                    />
                    <span className="logo-text">Inkspire Digital Designs</span>
                </Link>
                
                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {/* Home - stays as scroll */}
                    <a onClick={() => scrollToSection('home')}>Home</a>
                    
                    {/* SERVICES - POINTS TO DEDICATED PAGE */}
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
                             <Link to="/notion-setup-services">Notion Setup</Link>  {/* NEW */}
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
                    
                    {/* Dark Mode Toggle with Text - MOVED TO FAR RIGHT */}
                    <div className="dark-mode-wrapper">
                        <DarkModeToggle />
                        <span className="dark-mode-text">
                            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                        </span>
                    </div>
                </div>
                
                <div className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;