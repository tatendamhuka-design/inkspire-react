const Services = () => {
    const openWhatsApp = (service) => {
        const messages = {
            'web-design': "Hi! I'm interested in your Web Design services. Can you tell me more?",
            'notion': "Hi! I'm interested in your Notion Setup services. Can you tell me more?",
            'graphic-design': "Hi! I'm interested in your Graphic Design services. Can you tell me more?"
        };
        window.open(`https://wa.me/27761050485?text=${encodeURIComponent(messages[service])}`, '_blank');
    };

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>Our Services</h2>
                    <p>Professional design solutions tailored to your business needs</p>
                </div>

                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon"><i className="fas fa-code"></i></div>
                        <h3>Web Design</h3>
                        <p>Modern, responsive websites that convert visitors into customers.</p>
                        <ul className="service-features">
                            <li><i className="fas fa-check-circle"></i> Mobile Friendly</li>
                            <li><i className="fas fa-check-circle"></i> Web Hosting Included</li>
                            <li><i className="fas fa-check-circle"></i> Maintenance & Support</li>
                        </ul>
                        <div className="price-monthly"><i className="fas fa-calendar-alt"></i> +R200/month</div>
                        <button className="whatsapp-link" onClick={() => openWhatsApp('web-design')}>
                            <i className="fab fa-whatsapp"></i> Inquire on WhatsApp
                        </button>
                    </div>

                    <div className="service-card">
                        <div className="service-icon"><i className="fas fa-database"></i></div>
                        <h3>Notion Setup</h3>
                        <p>Dashboards & automation to streamline your business workflow.</p>
                        <ul className="service-features">
                            <li><i className="fas fa-check-circle"></i> Custom Dashboards</li>
                            <li><i className="fas fa-check-circle"></i> Automation Setup</li>
                            <li><i className="fas fa-check-circle"></i> Training Included</li>
                        </ul>
                        <div className="price-monthly"><i className="fas fa-tag"></i> From R500/setup</div>
                        <button className="whatsapp-link" onClick={() => openWhatsApp('notion')}>
                            <i className="fab fa-whatsapp"></i> Inquire on WhatsApp
                        </button>
                    </div>

                    <div className="service-card">
                        <div className="service-icon"><i className="fas fa-paint-brush"></i></div>
                        <h3>Graphic Design</h3>
                        <p>Logos, branding, social media graphics that stand out.</p>
                        <ul className="service-features">
                            <li><i className="fas fa-check-circle"></i> Unlimited Revisions</li>
                            <li><i className="fas fa-check-circle"></i> Brand Guidelines</li>
                            <li><i className="fas fa-check-circle"></i> Print Ready Files</li>
                        </ul>
                        <div className="price-monthly"><i className="fas fa-tag"></i> From R149/project</div>
                        <button className="whatsapp-link" onClick={() => openWhatsApp('graphic-design')}>
                            <i className="fab fa-whatsapp"></i> Inquire on WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;