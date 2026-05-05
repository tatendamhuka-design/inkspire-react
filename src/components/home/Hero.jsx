const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const openWhatsApp = () => {
        window.open('https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%27m%20interested%20in%20your%20services.', '_blank');
    };

    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    {/* H1 - Centered, clean, SEO optimized */}
                    <h1>Web Design from R1,499 </h1>
                    <h1 style={{ fontSize: '1.8rem', marginTop: '-10px' }}>Cape Town • Johannesburg • Durban • Pretoria</h1>
                    
                    {/* Subtitle - Clean and scannable */}
                    <p>Professional Web Design | Hosting R149/month (first 3 months free) | Graphic Design from R350</p>
                    
                    <div className="hero-tagline">
                        <span>Helping South African small businesses</span>
                    </div>
                    
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => scrollToSection('pricing')}>View Packages</button>
                        <button className="btn btn-orange" onClick={() => scrollToSection('portfolio')}>View My Work</button>
                        <button className="btn btn-whatsapp" onClick={openWhatsApp}>Contact Me</button>
                    </div>
                    
                    <div className="hero-stats">
                        <div><h3>50+</h3><p>Projects</p></div>
                        <div><h3>30+</h3><p>Happy Clients</p></div>
                        <div><h3>4.9★</h3><p>Rating</p></div>
                    </div>
                </div>
                
                <div className="bubbles-container">
                    <div className="bubble bubble-1">Web Design</div>
                    <div className="bubble bubble-2">Notion</div>
                    <div className="bubble bubble-3">Graphic Design</div>
                    <div className="bubble bubble-4">Branding</div>
                    <div className="bubble bubble-5">SEO</div>
                    <div className="bubble bubble-6">E-commerce</div>
                    <div className="bubble bubble-7">UI/UX</div>
                    <div className="bubble bubble-8">Logo Design</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;