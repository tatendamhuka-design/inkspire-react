import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';
import { Link } from 'react-router-dom';

const NotionServicesPage = () => {
    const openWhatsApp = (serviceType = 'notion') => {
        const messages = {
            notion: "Hi! I'm interested in Notion setup and automation services. Can you help me build a custom workspace?",
            basic: "Hi! I'm interested in the BASIC Notion Package (from R500). What's included?",
            standard: "Hi! I'm interested in the STANDARD Notion Package (from R1,499). What's included?",
            premium: "Hi! I'm interested in the PREMIUM Notion Package (from R2,999). What's included?"
        };
        window.open(`https://wa.me/27761050485?text=${encodeURIComponent(messages[serviceType])}`, '_blank');
    };

    return (
        <>
            <Helmet>
                <title>Notion Setup & Automation Services South Africa | Inkspire Digital</title>
                <meta name="description" content="Professional Notion setup and automation services in South Africa. Custom dashboards, CRM systems, workflows, and productivity systems from R500. Get organized today." />
                <meta name="keywords" content="Notion setup services, Notion automation, Notion CRM, Notion consultant South Africa, productivity systems, business automation, workflow setup, Notion workspace, task management Notion" />
                <link rel="canonical" href="https://inkspiredigitaldesigns.co.za/notion-setup-services" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Notion Setup & Automation Services South Africa | Inkspire Digital" />
                <meta property="og:description" content="Custom Notion workspaces, CRM systems, and automations for South African businesses. From R500. Free consultation." />
                <meta property="og:url" content="https://inkspiredigitaldesigns.co.za/notion-setup-services" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Notion Setup & Automation Services South Africa" />
                <meta name="twitter:description" content="Custom Notion workspaces and automations from R500. Get organized and save time." />
            </Helmet>

            {/* FAQ Schema */}
            <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How long does Notion setup take?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Basic setups take 2-3 days. Custom workspaces with automations take 5-7 days. Complexity depends on your specific needs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you offer revisions?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we include 2 rounds of revisions in all packages to ensure the system works exactly for your business."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you customize Notion for any business type?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. We've built systems for freelancers, agencies, real estate, e-commerce, consultants, and service-based businesses."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do I need technical skills to use the Notion system?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. We design systems that are user-friendly and provide training so you and your team can use it easily."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What automation tools can Notion connect with?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We integrate Notion with Google Drive, Slack, Zapier, Make (Integromat), email systems, and custom webhooks."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you offer ongoing support?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We offer maintenance packages starting from R200/month for updates, backups, and ongoing support."
                      }
                    }
                  ]
                }
                `}
            </script>

            {/* Service Schema */}
            <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "serviceType": "Notion Setup and Automation",
                  "provider": {
                    "@type": "ProfessionalService",
                    "name": "Inkspire Digital Designs",
                    "url": "https://inkspiredigitaldesigns.co.za"
                  },
                  "areaServed": "South Africa",
                  "priceRange": "R500 - R5000",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Notion Services Packages",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Basic Notion Setup"
                        },
                        "price": "500",
                        "priceCurrency": "ZAR"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Standard Notion Workspace"
                        },
                        "price": "1499",
                        "priceCurrency": "ZAR"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Premium Notion + Automation"
                        },
                        "price": "2999",
                        "priceCurrency": "ZAR"
                      }
                    ]
                  }
                }
                `}
            </script>

            <Header />

            {/* Hero Section */}
            <section className="notion-hero" style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                color: 'white',
                padding: '80px 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>
                        Notion Setup & Automation Services in South Africa
                    </h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
                        Custom Notion workspaces, CRM systems, and automations that save time, 
                        improve productivity, and keep your business organized. <strong>From just R500.</strong>
                    </p>
                    <div style={{ marginTop: '30px' }}>
                        <button onClick={() => openWhatsApp('notion')} style={{
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
                            <i className="fab fa-whatsapp"></i> Free Consultation
                        </button>
                        <Link to="#pricing" style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '2px solid white',
                            padding: '14px 40px',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}>
                            View Packages
                        </Link>
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '15px' }}>
                        What We Offer
                    </h2>
                    <p style={{ textAlign: 'center', marginBottom: '50px', color: 'var(--text-secondary)' }}>
                        Powerful Notion systems built for South African businesses
                    </p>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        <div style={{ background: 'var(--card-bg)', padding: '25px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <i className="fas fa-layer-group" style={{ fontSize: '2.5rem', color: '#ff6b35', marginBottom: '15px' }}></i>
                            <h3>Custom Notion Workspaces</h3>
                            <p>Tailored dashboards designed specifically for your business needs, industry, and team size.</p>
                        </div>
                        
                        <div style={{ background: 'var(--card-bg)', padding: '25px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <i className="fas fa-chart-line" style={{ fontSize: '2.5rem', color: '#ff6b35', marginBottom: '15px' }}></i>
                            <h3>CRM Systems in Notion</h3>
                            <p>Track leads, manage clients, and monitor sales pipelines all in one organized workspace.</p>
                        </div>
                        
                        <div style={{ background: 'var(--card-bg)', padding: '25px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <i className="fas fa-tasks" style={{ fontSize: '2.5rem', color: '#ff6b35', marginBottom: '15px' }}></i>
                            <h3>Project Management Systems</h3>
                            <p>Manage tasks, deadlines, and team projects efficiently with custom workflows.</p>
                        </div>
                        
                        <div style={{ background: 'var(--card-bg)', padding: '25px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <i className="fas fa-calendar-alt" style={{ fontSize: '2.5rem', color: '#ff6b35', marginBottom: '15px' }}></i>
                            <h3>Content & Social Media Planners</h3>
                            <p>Plan, schedule, and track your marketing content in one organized dashboard.</p>
                        </div>
                        
                        <div style={{ background: 'var(--card-bg)', padding: '25px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <i className="fas fa-robot" style={{ fontSize: '2.5rem', color: '#ff6b35', marginBottom: '15px' }}></i>
                            <h3>Automation & Integrations</h3>
                            <p>Connect Notion with Google Drive, Slack, Zapier, email, and more.</p>
                        </div>
                        
                        <div style={{ background: 'var(--card-bg)', padding: '25px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <i className="fas fa-chalkboard-teacher" style={{ fontSize: '2.5rem', color: '#ff6b35', marginBottom: '15px' }}></i>
                            <h3>Training & Support</h3>
                            <p>One-on-one training sessions and ongoing support for you and your team.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section style={{ padding: '60px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '40px' }}>
                        Who This Is For
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {['Small Businesses', 'Freelancers', 'Startups', 'Agencies', 'Consultants', 'E-commerce Owners'].map(item => (
                            <span key={item} style={{
                                background: 'var(--primary)',
                                color: 'white',
                                padding: '10px 25px',
                                borderRadius: '50px',
                                fontWeight: '500'
                            }}>{item}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '15px' }}>
                        Notion Service Packages
                    </h2>
                    <p style={{ textAlign: 'center', marginBottom: '50px', color: 'var(--text-secondary)' }}>
                        Affordable pricing for every business size
                    </p>
                    
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                        flexWrap: 'wrap'
                    }}>
                        {/* Basic Package */}
                        <div className="pricing-card" style={{ maxWidth: '300px', width: '100%' }}>
                            <h3>BASIC</h3>
                            <div className="pricing-price">R500<small>/once off</small></div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check-circle"></i> Single dashboard</li>
                                <li><i className="fas fa-check-circle"></i> Task manager</li>
                                <li><i className="fas fa-check-circle"></i> Content planner</li>
                                <li><i className="fas fa-check-circle"></i> 1 hour training</li>
                            </ul>
                            <button className="btn btn-primary" onClick={() => openWhatsApp('basic')}>Get Started</button>
                        </div>

                        {/* Standard Package - Featured */}
                        <div className="pricing-card featured" style={{ maxWidth: '300px', width: '100%' }}>
                            <div className="popular-tag">⭐ MOST POPULAR</div>
                            <h3>STANDARD</h3>
                            <div className="pricing-price">R1,499<small>/once off</small></div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check-circle"></i> CRM + Project Management</li>
                                <li><i className="fas fa-check-circle"></i> Custom automations</li>
                                <li><i className="fas fa-check-circle"></i> Client portal</li>
                                <li><i className="fas fa-check-circle"></i> 2 hours training</li>
                            </ul>
                            <button className="btn btn-primary" onClick={() => openWhatsApp('standard')}>Get Started</button>
                        </div>

                        {/* Premium Package */}
                        <div className="pricing-card" style={{ maxWidth: '300px', width: '100%' }}>
                            <h3>PREMIUM</h3>
                            <div className="pricing-price">R2,999<small>/once off</small></div>
                            <ul className="pricing-features">
                                <li><i className="fas fa-check-circle"></i> Full Business OS</li>
                                <li><i className="fas fa-check-circle"></i> Multi-system integrations</li>
                                <li><i className="fas fa-check-circle"></i> API & webhook setup</li>
                                <li><i className="fas fa-check-circle"></i> Full team training</li>
                            </ul>
                            <button className="btn btn-primary" onClick={() => openWhatsApp('premium')}>Get Started</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section style={{ padding: '60px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>
                        Why Choose Inkspire Digital?
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-pencil-ruler" style={{ fontSize: '2rem', color: '#ff6b35' }}></i>
                            <h3 style={{ marginTop: '15px' }}>Custom Built</h3>
                            <p>No templates — every system is built for your unique business</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-wallet" style={{ fontSize: '2rem', color: '#ff6b35' }}></i>
                            <h3 style={{ marginTop: '15px' }}>Affordable</h3>
                            <p>Packages starting from R500 with transparent pricing</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-rocket" style={{ fontSize: '2rem', color: '#ff6b35' }}></i>
                            <h3 style={{ marginTop: '15px' }}>Fast Delivery</h3>
                            <p>Most setups completed within 3-7 days</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-headset" style={{ fontSize: '2rem', color: '#ff6b35' }}></i>
                            <h3 style={{ marginTop: '15px' }}>Ongoing Support</h3>
                            <p>We're here to help after delivery</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>
                        Our Simple Process
                    </h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {[
                            { step: '1', name: 'Consultation', desc: 'We discuss your needs' },
                            { step: '2', name: 'System Planning', desc: 'Map out your workspace' },
                            { step: '3', name: 'Build & Setup', desc: 'We build your system' },
                            { step: '4', name: 'Revisions', desc: 'We refine based on feedback' },
                            { step: '5', name: 'Delivery + Training', desc: 'You get a working system' }
                        ].map((item, idx) => (
                            <div key={idx} style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: '#ff6b35',
                                    color: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    margin: '0 auto 15px'
                                }}>{item.step}</div>
                                <h4>{item.name}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '60px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="faq-item" style={{ marginBottom: '20px', padding: '15px', background: 'var(--card-bg)', borderRadius: '12px' }}>
                            <h3>❓ How long does Notion setup take?</h3>
                            <p>Basic setups take 2-3 days. Custom workspaces with automations take 5-7 days.</p>
                        </div>
                        <div className="faq-item" style={{ marginBottom: '20px', padding: '15px', background: 'var(--card-bg)', borderRadius: '12px' }}>
                            <h3>❓ Do you offer revisions?</h3>
                            <p>Yes, we include 2 rounds of revisions in all packages to ensure the system works exactly for your business.</p>
                        </div>
                        <div className="faq-item" style={{ marginBottom: '20px', padding: '15px', background: 'var(--card-bg)', borderRadius: '12px' }}>
                            <h3>❓ Can you customize Notion for any business type?</h3>
                            <p>Absolutely. We've built systems for freelancers, agencies, real estate, e-commerce, consultants, and service-based businesses.</p>
                        </div>
                        <div className="faq-item" style={{ marginBottom: '20px', padding: '15px', background: 'var(--card-bg)', borderRadius: '12px' }}>
                            <h3>❓ Do I need technical skills to use Notion?</h3>
                            <p>No. We design user-friendly systems and provide training so you and your team can use it easily.</p>
                        </div>
                        <div className="faq-item" style={{ marginBottom: '20px', padding: '15px', background: 'var(--card-bg)', borderRadius: '12px' }}>
                            <h3>❓ What automation tools can Notion connect with?</h3>
                            <p>We integrate Notion with Google Drive, Slack, Zapier, Make (Integromat), email systems, and custom webhooks.</p>
                        </div>
                        <div className="faq-item" style={{ marginBottom: '20px', padding: '15px', background: 'var(--card-bg)', borderRadius: '12px' }}>
                            <h3>❓ Do you offer ongoing support?</h3>
                            <p>Yes. We offer maintenance packages starting from R200/month for updates, backups, and support.</p>
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
                        Ready to Organize Your Business with Notion?
                    </h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.95 }}>
                        Get a free, no-obligation consultation today. We'll discuss your needs and build the perfect system.
                    </p>
                    <button onClick={() => openWhatsApp('notion')} style={{
                        backgroundColor: '#25D366',
                        color: 'white',
                        border: 'none',
                        padding: '16px 48px',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}>
                        <i className="fab fa-whatsapp"></i> Get Free Quote
                    </button>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default NotionServicesPage;