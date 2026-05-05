import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/common/FloatingWhatsApp';

const CapeTownPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openWhatsApp = () => {
        window.open('https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%20need%20web%20design%20in%20Cape%20Town.', '_blank');
    };

    const areas = [
        "Cape Town CBD", "V&A Waterfront", "Sea Point", "Camps Bay", "Clifton", "Bakoven",
        "Llandudno", "Hout Bay", "Rondebosch", "Claremont", "Newlands", "Kenilworth",
        "Wynberg", "Constantia", "Bishopscourt", "Table View", "Blouberg", "Parklands",
        "Milnerton", "Century City", "Durbanville", "Bellville", "Muizenberg", "Fish Hoek",
        "Simon's Town", "Noordhoek", "Kommetjie", "Kalk Bay", "Mitchells Plain", "Khayelitsha", "Athlone"
    ];

    return (
        <>
            <Helmet>
                <title>Web Design Cape Town from R1499 | Website Designer in CBD, Sea Point, Camps Bay</title>
                <meta name="description" content="Professional web design in Cape Town. Websites for businesses in CBD, Sea Point, Camps Bay, Rondebosch, Claremont, Constantia, Table View, and all Cape Town areas. Starting from R1,499. Get a free quote today!" />
                <meta name="keywords" content="web design Cape Town, website designer Cape Town, affordable web design Cape Town, web design Cape Town CBD, web design Sea Point, web design Camps Bay, web design Rondebosch, web design Claremont, web design Constantia, web design Table View" />
                <link rel="canonical" href="https://inkspiredigitaldesigns.co.za/cape-town-web-design" />
                <meta property="og:title" content="Web Design Cape Town from R1499 | Inkspire Digital" />
                <meta property="og:description" content="Get a custom, mobile-friendly website for your Cape Town business. Starting from R1499. Free hosting included. WhatsApp for a quote." />
                <meta property="og:url" content="https://inkspiredigitaldesigns.co.za/cape-town-web-design" />
                <meta name="twitter:title" content="Web Design Cape Town from R1499 | Inkspire Digital" />
                <meta name="twitter:description" content="Get a custom, mobile-friendly website for your Cape Town business. Starting from R1499." />
            </Helmet>

            <Header />
            
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>Web Design in Cape Town – From R1,499</h1>
                        <p>Professional, mobile-friendly websites for businesses in Cape Town, Sea Point, Camps Bay, Rondebosch, and across the Cape Peninsula. <strong>Starting from just R1,499 once-off</strong> with free hosting for the first year.</p>
                        <div className="hero-buttons" style={{ justifyContent: 'center' }}>
                            <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote on WhatsApp →</button>
                            <a href="/#portfolio" className="btn btn-orange">View Our Work</a>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '40px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Areas We Serve in Cape Town</h2>
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
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Web Design Packages for Cape Town Businesses</h2>
                    <div className="pricing-grid" style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div className="pricing-card">
                            <h3>BASIC</h3>
                            <div className="pricing-price">R1,499<small>/once off</small></div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check-circle"></i> 1 Page Website</li>
                                <li><i className="fas fa-check-circle"></i> Mobile Responsive</li>
                                <li><i className="fas fa-check-circle"></i> Basic SEO</li>
                                <li><i className="fas fa-check-circle"></i> Free Web Hosting (1 Year)</li>
                            </ul>
                            <button className="btn btn-primary" onClick={openWhatsApp}>Get Started</button>
                            <div className="price-monthly">+R200/month hosting after 1 year</div>
                        </div>
                        <div className="pricing-card featured">
                            <div className="popular-tag">⭐ MOST POPULAR</div>
                            <h3>STANDARD</h3>
                            <div className="pricing-price">R2,499<small>/once off</small></div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check-circle"></i> Up to 5 Pages</li>
                                <li><i className="fas fa-check-circle"></i> SEO Optimization</li>
                                <li><i className="fas fa-check-circle"></i> Fast Delivery (5-7 days)</li>
                                <li><i className="fas fa-check-circle"></i> Free Web Hosting (1 Year)</li>
                            </ul>
                            <button className="btn btn-primary" onClick={openWhatsApp}>Get Started</button>
                            <div className="price-monthly">+R200/month hosting after 1 year</div>
                        </div>
                        <div className="pricing-card">
                            <h3>PREMIUM</h3>
                            <div className="pricing-price">R4,999<small>/once off</small></div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check-circle"></i> Full Website (10+ pages)</li>
                                <li><i className="fas fa-check-circle"></i> Custom Design</li>
                                <li><i className="fas fa-check-circle"></i> Advanced Features</li>
                                <li><i className="fas fa-check-circle"></i> Free Web Hosting (1 Year)</li>
                            </ul>
                            <button className="btn btn-primary" onClick={openWhatsApp}>Get Started</button>
                            <div className="price-monthly">+R200/month hosting after 1 year</div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2>Ready for a Website That Brings Clients to Your Cape Town Business?</h2>
                    <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>Contact us today for a free, no-obligation quote. Serving Cape Town CBD, Sea Point, Camps Bay, Rondebosch, and all of the Cape Peninsula.</p>
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

export default CapeTownPage;