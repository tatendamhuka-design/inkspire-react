const Pricing = () => {
    const openWhatsApp = (packageName) => {
        const messages = {
            basic: "Hi! I'm interested in the BASIC Web Design Package (R1,499 once-off). What's included?",
            standard: "Hi! I interested in the STANDARD Web Design Package (R2,499 once-off). What's included?",
            premium: "Hi! I'm interested in the PREMIUM Web Design Package (R4,999 once-off). What's included?",
            hosting: "Hi! I'm interested in hosting at R149/month with first 3 months free.",
            graphic: "Hi! I'm interested in Graphic Design services starting from R350."
        };
        window.open(`https://wa.me/27761050485?text=${encodeURIComponent(messages[packageName])}`, '_blank');
    };

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="section-header">
                    <h2>Web Design & Digital Services</h2>
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
                        </ul>
                        <button className="btn btn-primary" onClick={() => openWhatsApp('basic')}>Get Started</button>
                        <div className="price-monthly">+ R149/month hosting</div>
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
                        </ul>
                        <button className="btn btn-primary" onClick={() => openWhatsApp('standard')}>Get Started</button>
                        <div className="price-monthly">+ R149/month hosting</div>
                    </div>

                    <div className="pricing-card">
                        <h3>PREMIUM</h3>
                        <div className="pricing-price">R4,999<small>/once off</small></div>
                        <ul className="pricing-features">
                            <li><i className="fas fa-check-circle"></i> Full Website (10+ pages)</li>
                            <li><i className="fas fa-check-circle"></i> Custom Design</li>
                            <li><i className="fas fa-check-circle"></i> Advanced Features</li>
                            <li><i className="fas fa-check-circle"></i> Mobile Friendly</li>
                        </ul>
                        <button className="btn btn-primary" onClick={() => openWhatsApp('premium')}>Get Started</button>
                        <div className="price-monthly">+ R149/month hosting</div>
                    </div>
                </div>

                {/* Hosting Section */}
                <div style={{ 
                    marginTop: '40px', 
                    padding: '30px', 
                    backgroundColor: '#f0fdf4', 
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid #bbf7d0'
                }}>
                    <h3 style={{ marginBottom: '10px' }}>🚀 Website Hosting</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '10px' }}>
                        R149<span style={{ fontSize: '1rem' }}>/month</span>
                    </div>
                    <p style={{ marginBottom: '15px' }}>
                        Fast, secure hosting optimized for South African websites. 99.9% uptime guarantee.
                    </p>
                    <div style={{ 
                        backgroundColor: '#10b981', 
                        color: 'white', 
                        display: 'inline-block', 
                        padding: '8px 20px', 
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        marginBottom: '20px'
                    }}>
                        🎁 First 3 months FREE
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={() => openWhatsApp('hosting')}>
                            Get Hosting
                        </button>
                    </div>
                </div>

                {/* Graphic Design Section */}
                <div style={{ 
                    marginTop: '30px', 
                    padding: '30px', 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '12px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ marginBottom: '15px' }}>🎨 Graphic Design Services</h3>
                    <p style={{ marginBottom: '10px' }}>
                        Logos, business cards, social media graphics, flyers, and full brand identity.
                    </p>
                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '20px' }}>
                        From R350
                    </div>
                    <button className="btn btn-primary" onClick={() => openWhatsApp('graphic')}>
                        Request Quote
                    </button>
                </div>

                {/* Footer Notes */}
                <div style={{ 
                    marginTop: '30px', 
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    color: '#666'
                }}>
                    <p>🎉 First 3 months of hosting are FREE with any package</p>
                    <p>💳 50% deposit required to start | Balance on completion</p>
                    <p>🔒 No long-term contracts | Cancel anytime</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;