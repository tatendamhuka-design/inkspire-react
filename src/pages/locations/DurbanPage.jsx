import { useEffect } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/common/FloatingWhatsApp';

const DurbanPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Update page title
        document.title = "Web Design Durban | Website Designer in Umhlanga, Ballito, Amanzimtoti | Inkspire Digital";
        
        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Professional web design in Durban, Umhlanga, Ballito, Amanzimtoti, and across KwaZulu-Natal. Affordable websites starting from R1,499. Get a free quote today!');
        } else {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            metaDesc.content = 'Professional web design in Durban, Umhlanga, Ballito, Amanzimtoti, and across KwaZulu-Natal. Affordable websites starting from R1,499. Get a free quote today!';
            document.head.appendChild(metaDesc);
        }
        
        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'web design Durban, website designer Durban, affordable web design Durban, web design Umhlanga, web design Ballito, web design Amanzimtoti, web design Durban North, web design Westville, web design KZN');
        } else {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            metaKeywords.content = 'web design Durban, website designer Durban, affordable web design Durban, web design Umhlanga, web design Ballito, web design Amanzimtoti, web design Durban North, web design Westville, web design KZN';
            document.head.appendChild(metaKeywords);
        }
    }, []);

    const openWhatsApp = () => {
        window.open('https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%20need%20web%20design%20in%20Durban.', '_blank');
    };

    const areas = [
        "Amanzimtoti", "Durban CBD", "Durban North", "Umhlanga", "Ballito", "Westville",
        "Kloof", "Hillcrest", "Pinetown", "Queensburgh", "Bluff", "Glenwood",
        "Morningside", "Berea", "Musgrave", "Gateway", "La Lucia", "uMhlanga Rocks",
        "Sibaya", "Mount Edgecombe", "Phoenix", "Chatsworth", "Isipingo", "Umlazi", "KwaMashu"
    ];

    return (
        <>
            <Header />
            
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>Web Design in Durban & Surrounding Areas</h1>
                        <p>Professional websites for businesses in Durban, Umhlanga, Ballito, Amanzimtoti, and all of KwaZulu-Natal. Starting from R1,499.</p>
                        <div className="hero-buttons" style={{ justifyContent: 'center' }}>
                            <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                            <a href="/#portfolio" className="btn btn-orange">View Our Work</a>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '40px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Areas We Serve in KwaZulu-Natal</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                        {areas.map((area, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <i className="fas fa-check-circle" style={{ color: '#10b981', fontSize: '0.8rem' }}></i>
                                <span>{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: '#f8fafc' }}>
                <div className="container">
                    <div className="pricing-grid" style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div className="pricing-card">
                            <h3>BASIC</h3>
                            <div className="pricing-price">R1,499<small>/once off</small></div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check-circle"></i> 1 Page Website</li>
                                <li><i className="fas fa-check-circle"></i> Mobile Responsive</li>
                                <li><i className="fas fa-check-circle"></i> Basic SEO</li>
                                <li><i className="fas fa-check-circle"></i> Web Hosting</li>
                            </ul>
                            <button className="btn btn-primary" onClick={openWhatsApp}>Get Started</button>
                            <div className="price-monthly">+R200/month</div>
                        </div>
                        <div className="pricing-card featured">
                            <div className="popular-tag">⭐ MOST POPULAR</div>
                            <h3>STANDARD</h3>
                            <div className="pricing-price">R2,499<small>/once off</small></div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check-circle"></i> Up to 5 Pages</li>
                                <li><i className="fas fa-check-circle"></i> SEO Optimization</li>
                                <li><i className="fas fa-check-circle"></i> Fast Delivery</li>
                                <li><i className="fas fa-check-circle"></i> Web Hosting</li>
                            </ul>
                            <button className="btn btn-primary" onClick={openWhatsApp}>Get Started</button>
                            <div className="price-monthly">+R200/month</div>
                        </div>
                        <div className="pricing-card">
                            <h3>PREMIUM</h3>
                            <div className="pricing-price">R4,999<small>/once off</small></div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check-circle"></i> Full Website</li>
                                <li><i className="fas fa-check-circle"></i> Custom Design</li>
                                <li><i className="fas fa-check-circle"></i> Advanced Features</li>
                                <li><i className="fas fa-check-circle"></i> Web Hosting</li>
                            </ul>
                            <button className="btn btn-primary" onClick={openWhatsApp}>Get Started</button>
                            <div className="price-monthly">+R200/month</div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2>Ready for a Website That Brings Clients?</h2>
                    <p style={{ marginBottom: '30px' }}>Contact us today for a free quote. Serving Durban, Umhlanga, Ballito, Amanzimtoti, and all of KZN.</p>
                    <button className="btn btn-whatsapp" onClick={openWhatsApp} style={{ padding: '14px 40px', fontSize: '1.1rem' }}>
                        <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                    </button>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default DurbanPage;