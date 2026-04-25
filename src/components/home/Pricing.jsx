const Pricing = () => {
    const openWhatsApp = (packageName) => {
        const messages = {
            basic: "Hi! I'm interested in the BASIC Web Design Package (R1,499 + R200/month). Can you tell me more?",
            standard: "Hi! I'm interested in the STANDARD Web Design Package (R2,499 + R200/month). Can you tell me more?",
            premium: "Hi! I'm interested in the PREMIUM Web Design Package (R4,999 + R200/month). Can you tell me more?"
        };
        window.open(`https://wa.me/27761050485?text=${encodeURIComponent(messages[packageName])}`, '_blank');
    };

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="section-header">
                    <h2>Web Design Packages</h2>
                    <p>Choose the perfect plan for your business needs</p>
                </div>

                <div className="pricing-grid">
                    <div className="pricing-card">
                        <h3>BASIC</h3>
                        <div className="pricing-price">R1,499<small>/once off</small></div>
                        <ul className="pricing-features">
                            <li><i className="fas fa-check-circle"></i> 1 Page Website</li>
                            <li><i className="fas fa-check-circle"></i> Responsive Design</li>
                            <li><i className="fas fa-check-circle"></i> Basic SEO</li>
                            <li><i className="fas fa-check-circle"></i> Mobile Friendly</li>
                            <li><i className="fas fa-check-circle"></i> Web Hosting</li>
                            <li><i className="fas fa-check-circle"></i> Maintenance & Support</li>
                        </ul>
                        <button className="btn btn-primary" onClick={() => openWhatsApp('basic')}>Get Started</button>
                        <div className="price-monthly">+R200/month</div>
                    </div>

                    <div className="pricing-card featured">
                        <div className="popular-tag">⭐ MOST POPULAR</div>
                        <h3>STANDARD</h3>
                        <div className="pricing-price">R2,499<small>/once off</small></div>
                        <ul className="pricing-features">
                            <li><i className="fas fa-check-circle"></i> Up to 5 Pages</li>
                            <li><i className="fas fa-check-circle"></i> SEO Optimization</li>
                            <li><i className="fas fa-check-circle"></i> Faster Delivery</li>
                            <li><i className="fas fa-check-circle"></i> Mobile Friendly</li>
                            <li><i className="fas fa-check-circle"></i> Web Hosting</li>
                            <li><i className="fas fa-check-circle"></i> Maintenance & Support</li>
                        </ul>
                        <button className="btn btn-primary" onClick={() => openWhatsApp('standard')}>Get Started</button>
                        <div className="price-monthly">+R200/month</div>
                    </div>

                    <div className="pricing-card">
                        <h3>PREMIUM</h3>
                        <div className="pricing-price">R4,999<small>/once off</small></div>
                        <ul className="pricing-features">
                            <li><i className="fas fa-check-circle"></i> Full Website</li>
                            <li><i className="fas fa-check-circle"></i> Custom Design</li>
                            <li><i className="fas fa-check-circle"></i> Advanced Features</li>
                            <li><i className="fas fa-check-circle"></i> Mobile Friendly</li>
                            <li><i className="fas fa-check-circle"></i> Web Hosting</li>
                            <li><i className="fas fa-check-circle"></i> Maintenance & Support</li>
                        </ul>
                        <button className="btn btn-primary" onClick={() => openWhatsApp('premium')}>Get Started</button>
                        <div className="price-monthly">+R200/month</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;