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
                    <h1>I Build Websites That Bring Clients</h1>
                    <p>Web Design | Notion Systems | Graphic Design</p>
                    <div className="hero-tagline">
                        <span>Click. Convert. Grow.</span>
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