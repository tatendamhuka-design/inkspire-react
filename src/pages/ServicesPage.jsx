import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const openWhatsApp = () => {
        window.open('https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%27m%20interested%20in%20your%20services.', '_blank');
    };

    const services = [
        {
            id: 1,
            title: "Custom Web Design",
            icon: "fas fa-laptop-code",
            price: "From R1,499",
            description: "Get a unique, professional website that reflects your brand and converts visitors into customers.",
            features: [
                "Fully responsive design (works on all devices)",
                "SEO-optimized structure",
                "Fast loading speed",
                "User-friendly navigation",
                "Contact forms integration",
                "Social media integration"
            ],
            popular: true
        },
        {
            id: 2,
            title: "E-Commerce Development",
            icon: "fas fa-shopping-cart",
            price: "From R5,999",
            description: "Launch your online store and start selling products with a secure, feature-rich e-commerce platform.",
            features: [
                "Product catalog management",
                "Secure payment gateway integration",
                "Shopping cart functionality",
                "Inventory management",
                "Order tracking system",
                "Customer accounts"
            ],
            popular: false
        },
        {
            id: 3,
            title: "Graphic Design",
            icon: "fas fa-palette",
            price: "From R350",
            description: "Stand out with professional branding, logos, and marketing materials that capture your brand identity.",
            features: [
                "Logo design",
                "Business cards",
                "Social media graphics",
                "Flyers & brochures",
                "Brand identity packages",
                "Custom illustrations"
            ],
            popular: false
        },
        {
            id: 4,
            title: "Website Hosting",
            icon: "fas fa-server",
            price: "R149/month",
            description: "Fast, secure, and reliable hosting optimized for South African websites with 99.9% uptime guarantee.",
            features: [
                "99.9% uptime guarantee",
                "Free SSL certificate",
                "Daily backups",
                "24/7 monitoring",
                "Fast local servers",
                "Email hosting included",
                "🎁 First 3 months FREE"
            ],
            popular: false,
            specialOffer: "First 3 months free"
        },
        {
            id: 5,
            title: "SEO Optimization",
            icon: "fas fa-chart-line",
            price: "From R999",
            description: "Get found on Google with our comprehensive SEO services designed for South African businesses.",
            features: [
                "Keyword research",
                "On-page optimization",
                "Meta tag optimization",
                "Google Search Console setup",
                "Local SEO optimization",
                "Monthly performance reports"
            ],
            popular: false
        },
        {
            id: 6,
            title: "Website Maintenance",
            icon: "fas fa-tools",
            price: "From R499/month",
            description: "Keep your website secure, updated, and running smoothly with our maintenance packages.",
            features: [
                "Regular updates",
                "Security monitoring",
                "Bug fixes",
                "Content updates",
                "Performance optimization",
                "Emergency support"
            ],
            popular: false
        }
    ];

    return (
        <>
            <Helmet>
                <title>Web Design, Graphic Design & Hosting Services | Inkspire Digital South Africa</title>
                <meta name="description" content="Professional web design from R1,499, graphic design from R350, and hosting at R149/month with first 3 months free. Serving South African businesses. Free quote. WhatsApp us today." />
                <meta name="keywords" content="web design services South Africa, graphic design from R350, website hosting R149 per month, e-commerce development, SEO services, logo design, affordable hosting South Africa" />
                <link rel="canonical" href="https://inkspiredigitaldesigns.co.za/services" />
                <meta name="robots" content="index, follow" />
                
                {/* Open Graph */}
                <meta property="og:title" content="Professional Digital Services | Web Design, Graphic Design & Hosting" />
                <meta property="og:description" content="Web design from R1,499 | Graphic design from R350 | Hosting R149/month (first 3 months free). Get a free quote today." />
                <meta property="og:url" content="https://inkspiredigitaldesigns.co.za/services" />
                <meta property="og:type" content="website" />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Professional Digital Services | Inkspire Digital" />
                <meta name="twitter:description" content="Web design from R1,499 | Graphic design from R350 | Hosting R149/month with first 3 months free." />
            </Helmet>

            {/* Schema Markup for Services */}
            <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "ItemList",
                  "name": "Digital Services offered by Inkspire Digital Designs",
                  "description": "Complete digital solutions for South African businesses",
                  "numberOfItems": 6,
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Custom Web Design",
                      "description": "Professional, responsive websites from R1,499",
                      "url": "https://inkspiredigitaldesigns.co.za/services#web-design"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "E-Commerce Development",
                      "description": "Online stores with secure payment gateways from R5,999",
                      "url": "https://inkspiredigitaldesigns.co.za/services#ecommerce"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Graphic Design",
                      "description": "Logos, branding, and marketing materials from R350",
                      "url": "https://inkspiredigitaldesigns.co.za/services#graphic-design"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Website Hosting",
                      "description": "Fast, secure hosting at R149/month with first 3 months free",
                      "url": "https://inkspiredigitaldesigns.co.za/services#hosting"
                    },
                    {
                      "@type": "ListItem",
                      "position": 5,
                      "name": "SEO Optimization",
                      "description": "Get found on Google with local SEO from R999",
                      "url": "https://inkspiredigitaldesigns.co.za/services#seo"
                    },
                    {
                      "@type": "ListItem",
                      "position": 6,
                      "name": "Website Maintenance",
                      "description": "Keep your site secure and updated from R499/month",
                      "url": "https://inkspiredigitaldesigns.co.za/services#maintenance"
                    }
                  ]
                }
                `}
            </script>

            <Header />

            {/* Hero Section */}
            <section className="services-hero" style={{ 
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', 
                color: 'white', 
                padding: '80px 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Digital Services That Drive Growth
                    </h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
                        From custom websites starting at <strong>R1,499</strong> to graphic design from <strong>R350</strong> 
                        and hosting at <strong>R149/month</strong> with <strong>first 3 months free</strong> — 
                        everything your South African business needs to succeed online.
                    </p>
                    <div style={{ marginTop: '30px' }}>
                        <button onClick={openWhatsApp} style={{
                            backgroundColor: '#25D366',
                            color: 'white',
                            border: 'none',
                            padding: '14px 40px',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            marginRight: '15px'
                        }}>
                            <i className="fab fa-whatsapp"></i> Get Free Quote
                        </button>
                        <Link to="/#portfolio" style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '2px solid white',
                            padding: '14px 40px',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing Highlights Banner */}
            <section style={{ 
                backgroundColor: '#ff6b35', 
                color: 'white', 
                padding: '20px 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <p style={{ margin: 0, fontSize: '1.1rem' }}>
                        🎉 <strong>Special Offers:</strong> Web design from R1,499 | Graphic design from R350 | 
                        Hosting R149/month — <strong>First 3 months FREE!</strong> 🎉
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '15px' }}>
                        What We Offer
                    </h2>
                    <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '50px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Choose from our range of professional digital services
                    </p>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '30px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {services.map(service => (
                            <div key={service.id} style={{
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                padding: '30px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                position: 'relative',
                                border: service.popular ? '2px solid #ff6b35' : '1px solid #e0e0e0'
                            }}>
                                {service.popular && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        right: '20px',
                                        backgroundColor: '#ff6b35',
                                        color: 'white',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold'
                                    }}>
                                        MOST POPULAR
                                    </div>
                                )}
                                
                                {service.specialOffer && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        left: '20px',
                                        backgroundColor: '#10b981',
                                        color: 'white',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold'
                                    }}>
                                        {service.specialOffer}
                                    </div>
                                )}
                                
                                <i className={service.icon} style={{ fontSize: '3rem', color: '#ff6b35', marginBottom: '20px' }}></i>
                                
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
                                    {service.title}
                                </h3>
                                
                                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '15px' }}>
                                    {service.price}
                                </div>
                                
                                <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>
                                    {service.description}
                                </p>
                                
                                <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: '#333' }}>
                                    What's Included:
                                </h4>
                                
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '25px' }}>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#10b981', fontSize: '0.8rem' }}></i>
                                            <span style={{ fontSize: '0.9rem', color: '#555' }}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <button onClick={openWhatsApp} style={{
                                    width: '100%',
                                    backgroundColor: '#ff6b35',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#e55a2b'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b35'}>
                                    <i className="fab fa-whatsapp"></i> Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '15px' }}>
                        Why South African Businesses Choose Us
                    </h2>
                    <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '50px' }}>
                        We understand the local market and deliver results
                    </p>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            <i className="fas fa-clock" style={{ fontSize: '2.5rem', color: '#ff6b35', marginBottom: '15px' }}></i>
                            <h3>Fast Delivery</h3>
                            <p>Most websites delivered within 5-7 days, so you can launch quickly.</p>
                        </div>
                        
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            <i className="fas fa-wifi" style={{ fontSize: '2.5rem', color: '#ff6b35', marginBottom: '15px' }}></i>
                            <h3>Affordable Hosting</h3>
                            <p>R149/month with first 3 months free — plus free SSL and daily backups.</p>
                        </div>
                        
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            <i className="fas fa-mobile-alt" style={{ fontSize: '2.5rem', color: '#ff6b35', marginBottom: '15px' }}></i>
                            <h3>Mobile-Friendly</h3>
                            <p>All websites work perfectly on phones, tablets, and computers.</p>
                        </div>
                        
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            <i className="fas fa-headset" style={{ fontSize: '2.5rem', color: '#ff6b35', marginBottom: '15px' }}></i>
                            <h3>Local Support</h3>
                            <p>WhatsApp support from real humans, not chatbots or tickets.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
                        Frequently Asked Questions
                    </h2>
                    
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '25px' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>❓ How much does hosting cost?</h3>
                            <p style={{ color: '#666' }}>Hosting is R149/month, but we offer the <strong>first 3 months FREE</strong> with any website package. After that, it's just R149/month for fast, reliable hosting.</p>
                        </div>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>❓ What graphic design services do you offer from R350?</h3>
                            <p style={{ color: '#666' }}>Logo design starts from R350. Business cards, social media graphics, flyers, and full brand identity packages are available at competitive rates.</p>
                        </div>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>❓ How long does it take to build a website?</h3>
                            <p style={{ color: '#666' }}>Basic websites (3-5 pages) are completed within 5-7 days. E-commerce stores take 2-4 weeks.</p>
                        </div>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>❓ Can I update the website myself?</h3>
                            <p style={{ color: '#666' }}>Yes! We build on user-friendly platforms and provide training so you can easily update text, images, and pages.</p>
                        </div>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>❓ Do you offer payment plans?</h3>
                            <p style={{ color: '#666' }}>Yes, we require a 50% deposit to start and 50% upon completion. For larger projects, we can arrange customized payment schedules.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ 
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)', 
                color: 'white', 
                padding: '60px 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>
                        Ready to Grow Your Business Online?
                    </h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.95 }}>
                        Get a free, no-obligation quote today. No jargon. No pressure. Just honest advice.
                    </p>
                    <button onClick={openWhatsApp} style={{
                        backgroundColor: '#25D366',
                        color: 'white',
                        border: 'none',
                        padding: '16px 48px',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}>
                        <i className="fab fa-whatsapp"></i> Chat on WhatsApp Now
                    </button>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default ServicesPage;