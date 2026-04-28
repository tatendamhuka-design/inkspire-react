import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';

const SEOPage = () => {
    const { type, service, location, modifier, industry, question, year, price, landmark, urgency } = useParams();

    // ===== ALL SERVICES (15) =====
    const services = {
        'web-designer': { name: 'Web Designer', keyword: 'web designer' },
        'affordable-web-designer': { name: 'Affordable Web Designer', keyword: 'affordable web designer' },
        'website-designer': { name: 'Website Designer', keyword: 'website designer' },
        'freelance-web-designer': { name: 'Freelance Web Designer', keyword: 'freelance web designer' },
        'web-design': { name: 'Web Design', keyword: 'web design' },
        'affordable-web-design': { name: 'Affordable Web Design', keyword: 'affordable web design' },
        'website-design': { name: 'Website Design', keyword: 'website design' },
        'graphic-designer': { name: 'Graphic Designer', keyword: 'graphic designer' },
        'logo-designer': { name: 'Logo Designer', keyword: 'logo designer' },
        'branding-designer': { name: 'Branding Designer', keyword: 'branding designer' },
        'ecommerce-web-designer': { name: 'E-commerce Web Designer', keyword: 'ecommerce web designer' },
        'wordpress-designer': { name: 'WordPress Designer', keyword: 'wordpress designer' },
        'seo-specialist': { name: 'SEO Specialist', keyword: 'SEO specialist' }
    };

    // ===== MODIFIERS (Best, Top, Cheap, Affordable) =====
    const modifiers = {
        'best': { title: 'Best', keyword: 'best', description: 'top-rated' },
        'top': { title: 'Top', keyword: 'top', description: 'highest-rated' },
        'cheap': { title: 'Cheap', keyword: 'cheap', description: 'budget-friendly' },
        'affordable': { title: 'Affordable', keyword: 'affordable', description: 'cost-effective' },
        'professional': { title: 'Professional', keyword: 'professional', description: 'expert' },
        'reliable': { title: 'Reliable', keyword: 'reliable', description: 'trusted' },
        'experienced': { title: 'Experienced', keyword: 'experienced', description: 'skilled' },
        'fast': { title: 'Fast', keyword: 'fast', description: 'quick turnaround' },
        'easy': { title: 'Easy', keyword: 'easy', description: 'hassle-free' },
        'quick': { title: 'Quick', keyword: 'quick', description: 'speedy delivery' }
    };

    // ===== INDUSTRIES =====
    const industries = {
        'plumbers': { name: 'Plumbers', keyword: 'plumber', service: 'Plumbing Website' },
        'electricians': { name: 'Electricians', keyword: 'electrician', service: 'Electrical Website' },
        'restaurants': { name: 'Restaurants', keyword: 'restaurant', service: 'Restaurant Website' },
        'lawyers': { name: 'Lawyers', keyword: 'lawyer', service: 'Legal Website' },
        'doctors': { name: 'Doctors', keyword: 'doctor', service: 'Medical Website' },
        'real-estate': { name: 'Real Estate', keyword: 'real estate agent', service: 'Property Website' },
        'car-dealerships': { name: 'Car Dealerships', keyword: 'car dealership', service: 'Auto Sales Website' },
        'salons': { name: 'Salons', keyword: 'salon', service: 'Salon Website' },
        'fitness': { name: 'Fitness', keyword: 'gym', service: 'Fitness Website' },
        'takeaways': { name: 'Takeaways', keyword: 'takeaway', service: 'Food Delivery Website' }
    };

    // ===== VS COMPARISONS =====
    const vsComparisons = {
        'web-design-vs-web-development': {
            title: 'Web Design vs Web Development: What\'s the Difference?',
            item1: 'Web Design', item2: 'Web Development',
            content: 'Web design focuses on the look and feel of your website (colors, layout, fonts). Web development deals with the technical functionality (coding, databases, forms). Both are essential for a successful website.'
        },
        'wordpress-vs-shopify': {
            title: 'WordPress vs Shopify: Which is Better for Your Business?',
            item1: 'WordPress', item2: 'Shopify',
            content: 'WordPress is more flexible and cost-effective for most businesses. Shopify is better for pure e-commerce. As a designer, I recommend WordPress for its versatility and lower long-term costs.'
        },
        'wix-vs-professional-design': {
            title: 'Wix vs Professional Web Design: The Real Difference',
            item1: 'Wix', item2: 'Professional Design',
            content: 'Wix offers DIY templates but limits customization. Professional design gives you a unique, SEO-optimized website that stands out and performs better on Google.'
        },
        'static-vs-dynamic-website': {
            title: 'Static vs Dynamic Website: Which Do You Need?',
            item1: 'Static Website', item2: 'Dynamic Website',
            content: 'Static sites are faster and cheaper. Dynamic sites allow user interaction and content updates. Most small businesses need a dynamic site for growth.'
        },
        'freelance-vs-agency': {
            title: 'Freelance Web Designer vs Agency: Pros and Cons',
            item1: 'Freelance', item2: 'Agency',
            content: 'Freelancers offer personalized service and lower rates. Agencies charge more but offer teams. For most small businesses, a skilled freelancer is the better choice.'
        }
    };

    // ===== "FOR" PAGES =====
    const forPages = {
        'small-business': { audience: 'Small Business', description: 'tailored for entrepreneurs and small business owners' },
        'startups': { audience: 'Startups', description: 'perfect for new companies launching their brand' },
        'nonprofits': { audience: 'Nonprofits', description: 'special rates for charitable organizations' },
        'entrepreneurs': { audience: 'Entrepreneurs', description: 'designed for ambitious business owners' },
        'freelancers': { audience: 'Freelancers', description: 'portfolio websites that attract clients' }
    };

    // ===== "WITHOUT" PAGES =====
    const withoutPages = {
        'coding': { task: 'coding', solution: 'I handle all the technical work so you don\'t have to' },
        'developer': { task: 'a developer', solution: 'I am the developer - you get direct access without agency overhead' },
        'design-software': { task: 'design software', solution: 'I use professional tools, you just share your vision' },
        'monthly-fees': { task: 'monthly fees', solution: 'Affordable R200/month includes hosting, maintenance, and support' },
        'contract': { task: 'a long-term contract', solution: 'No lock-in contracts. Pay as you go.' }
    };

    // ===== YEARS =====
    const years = {
        '2025': { year: '2025', description: 'current pricing and trends' },
        '2026': { year: '2026', description: 'upcoming trends and forecasts' }
    };

    // ===== PRICE RANGES =====
    const priceRanges = {
        'under-5000': { amount: 'R5,000', packages: 'Basic (R1,499) or Standard (R2,499)' },
        'under-3000': { amount: 'R3,000', packages: 'Basic (R1,499) fits your budget' },
        'under-2000': { amount: 'R2,000', packages: 'Basic package at R1,499' }
    };

    // ===== LANDMARKS (Local SEO) =====
    const landmarks = {
        'va-waterfront': { name: 'V&A Waterfront', city: 'Cape Town' },
        'sandton-city': { name: 'Sandton City', city: 'Johannesburg' },
        'gateway-mall': { name: 'Gateway Mall', city: 'Durban' },
        'moses-mabhida': { name: 'Moses Mabhida Stadium', city: 'Durban' },
        'table-mountain': { name: 'Table Mountain', city: 'Cape Town' }
    };

    // ===== URGENCY TYPES =====
    const urgencyTypes = {
        'emergency': { type: 'Emergency', turnaround: '24-48 hours', badge: 'Urgent' },
        'urgent': { type: 'Urgent', turnaround: '48-72 hours', badge: 'Priority' },
        'same-day': { type: 'Same Day', turnaround: '24 hours or less', badge: 'Express' },
        'quick': { type: 'Quick', turnaround: '3-5 days', badge: 'Fast Track' }
    };

    // ===== QUESTIONS =====
    const questions = {
        'how-much-does-a-website-cost': {
            title: 'How Much Does a Website Cost in South Africa?',
            answer: 'Websites start from R1,499 once-off plus R200/month for hosting.',
            longAnswer: 'My packages start at R1,499 for a basic website, R2,499 for standard, and R4,999 for premium. All include hosting and maintenance.'
        },
        'how-to-choose-a-web-designer': {
            title: 'How to Choose a Web Designer in South Africa',
            answer: 'Look for experience, portfolio, pricing transparency, and local knowledge.',
            longAnswer: 'Check portfolios, read reviews, ask about pricing upfront, and ensure they understand your industry. I offer free demos so you can see my work before committing.'
        },
        'do-i-need-a-website': {
            title: 'Do I Need a Website for My Small Business?',
            answer: 'Yes! 81% of South Africans research online before purchasing.',
            longAnswer: 'A website builds credibility, helps customers find you, and works 24/7. Even with social media, a website is essential.'
        },
        'what-is-best-website-builder': {
            title: 'What Is the Best Website Builder for Small Business?',
            answer: 'Custom design beats templates for uniqueness and SEO.',
            longAnswer: 'While Wix and Squarespace offer templates, custom-designed websites perform better for SEO and look more professional.'
        }
    };

    // ===== "REVIEW" PAGES =====
    const reviewPages = {
        'reviews': { type: 'Client Reviews', showRating: true },
        'testimonials': { type: 'Client Testimonials', showRating: true },
        'ratings': { type: 'Client Ratings', showRating: true }
    };

    // ===== ALL LOCATIONS (93) =====
    const locations = {
        'amanzimtoti': { name: 'Amanzimtoti', province: 'KwaZulu-Natal' },
        'durban': { name: 'Durban', province: 'KwaZulu-Natal' },
        'johannesburg': { name: 'Johannesburg', province: 'Gauteng' },
        'cape-town': { name: 'Cape Town', province: 'Western Cape' },
        'pretoria': { name: 'Pretoria', province: 'Gauteng' },
        'sandton': { name: 'Sandton', province: 'Gauteng' },
        'midrand': { name: 'Midrand', province: 'Gauteng' },
        'umhlanga': { name: 'Umhlanga', province: 'KwaZulu-Natal' },
        'ballito': { name: 'Ballito', province: 'KwaZulu-Natal' },
        'centurion': { name: 'Centurion', province: 'Gauteng' }
    };

    // ===== DETECT PAGE TYPE =====
    
    // Type 1: VS Comparison
    if (vsComparisons[type]) {
        return <VSComparisonPage data={vsComparisons[type]} />;
    }
    
    // Type 2: "For" Pages
    if (forPages[type]) {
        return <ForPage data={forPages[type]} />;
    }
    
    // Type 3: "Without" Pages
    if (withoutPages[type]) {
        return <WithoutPage data={withoutPages[type]} />;
    }
    
    // Type 4: Year Pages
    if (years[year]) {
        return <YearPage data={years[year]} />;
    }
    
    // Type 5: Price Range Pages
    if (priceRanges[price]) {
        return <PriceRangePage data={priceRanges[price]} />;
    }
    
    // Type 6: Landmark Pages
    if (landmarks[landmark]) {
        return <LandmarkPage data={landmarks[landmark]} />;
    }
    
    // Type 7: Urgency Pages
    if (urgencyTypes[urgency]) {
        return <UrgencyPage data={urgencyTypes[urgency]} />;
    }
    
    // Type 8: Review/Testimonial Pages
    if (reviewPages[type]) {
        return <ReviewPage data={reviewPages[type]} />;
    }
    
    // Type 9: Question Pages
    if (questions[question]) {
        return <QuestionPage data={questions[question]} />;
    }
    
    // Type 10: Service + Location
    if (service && locations[location]) {
        const serviceData = services[service];
        const locationData = locations[location];
        if (serviceData && locationData) {
            return <ServiceLocationPage serviceData={serviceData} locationData={locationData} />;
        }
    }
    
    // Type 11: Modifier + Service + Location
    if (modifier && service && locations[location] && modifiers[modifier]) {
        const modifierData = modifiers[modifier];
        const serviceData = services[service];
        const locationData = locations[location];
        if (modifierData && serviceData && locationData) {
            return <ModifierPage modifierData={modifierData} serviceData={serviceData} locationData={locationData} />;
        }
    }
    
    // Type 12: Near Me
    if (type === 'near-me' && service) {
        const serviceData = services[service];
        const locationData = location ? locations[location] : null;
        if (serviceData) {
            return <NearMePage serviceData={serviceData} locationData={locationData} />;
        }
    }
    
    // Type 13: Industry + Location
    if (industry && locations[location] && industries[industry]) {
        const industryData = industries[industry];
        const locationData = locations[location];
        if (industryData && locationData) {
            return <IndustryPage industryData={industryData} locationData={locationData} />;
        }
    }
    
    // Fallback: 404
    return <NotFoundPage />;
};

// ===== COMPONENT: VS Comparison Page =====
const VSComparisonPage = ({ data }) => {
    useEffect(() => {
        document.title = `${data.title} | Inkspire Digital`;
    }, [data]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>{data.title}</h1>
                        <p>{data.item1} vs {data.item2} - Which is right for your business?</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Expert Advice</button>
                    </div>
                </div>
            </section>
            <section style={{ padding: '40px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p>{data.content}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px' }}>
                            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                                <h3>{data.item1}</h3>
                                <p>Pros and cons of choosing {data.item1.toLowerCase()} for your project.</p>
                            </div>
                            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                                <h3>{data.item2}</h3>
                                <p>Pros and cons of choosing {data.item2.toLowerCase()} for your project.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: "For" Page =====
const ForPage = ({ data }) => {
    useEffect(() => {
        document.title = `Web Design for ${data.audience} - ${data.description} | Inkspire Digital`;
    }, [data]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>Web Design for {data.audience}</h1>
                        <p>Professional websites {data.description}. Starting from R1,499.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get a Quote</button>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: "Without" Page =====
const WithoutPage = ({ data }) => {
    useEffect(() => {
        document.title = `Website Without ${data.task} - ${data.solution} | Inkspire Digital`;
    }, [data]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>Website Without {data.task}</h1>
                        <p>{data.solution}. Get a professional website hassle-free.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Learn How</button>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Year Page =====
const YearPage = ({ data }) => {
    useEffect(() => {
        document.title = `Web Design Prices ${data.year} - ${data.description} | Inkspire Digital`;
    }, [data]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>Web Design Prices {data.year}</h1>
                        <p>Updated {data.description}. Transparent pricing from R1,499.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get 2025 Pricing</button>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Price Range Page =====
const PriceRangePage = ({ data }) => {
    useEffect(() => {
        document.title = `Website Under ${data.amount} - ${data.packages} | Inkspire Digital`;
    }, [data]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>Website Under {data.amount}</h1>
                        <p>{data.packages}. Quality websites at affordable prices.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>View Packages</button>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Landmark Page =====
const LandmarkPage = ({ data }) => {
    useEffect(() => {
        document.title = `Web Designer Near ${data.name} - Serving ${data.city} | Inkspire Digital`;
    }, [data]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>Web Designer Near {data.name}</h1>
                        <p>Serving businesses near {data.name} in {data.city}. Local service with remote convenience.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Local Quote</button>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Urgency Page =====
const UrgencyPage = ({ data }) => {
    useEffect(() => {
        document.title = `${data.type} Web Design - ${data.turnaround} Turnaround | Inkspire Digital`;
    }, [data]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <div className="popular-tag" style={{ position: 'relative', top: '0', marginBottom: '20px' }}>{data.badge}</div>
                        <h1>{data.type} Web Design</h1>
                        <p>Need a website fast? {data.turnaround} turnaround available. Get online quickly.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Request Rush Service</button>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Review Page =====
const ReviewPage = ({ data }) => {
    useEffect(() => {
        document.title = `${data.type} - What Clients Say About Inkspire Digital | Reviews`;
    }, [data]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>Client {data.type}</h1>
                        <p>★★★★★ 4.9 out of 5 - Based on 12+ reviews</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Become a Happy Client</button>
                    </div>
                </div>
            </section>
            <section style={{ padding: '40px 0' }}>
                <div className="container">
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <i className="fas fa-quote-left"></i>
                            <p>"Inkspire transformed our online presence. The website brought us new customers nationwide!"</p>
                            <h4>John Dlamini</h4>
                            <p>Dlamini Enterprises</p>
                        </div>
                        <div className="testimonial-card">
                            <i className="fas fa-quote-left"></i>
                            <p>"Professional, creative, and delivered exactly what I wanted. Best web designer in SA!"</p>
                            <h4>Sarah van der Merwe</h4>
                            <p>Cape Coffee Co.</p>
                        </div>
                        <div className="testimonial-card">
                            <i className="fas fa-quote-left"></i>
                            <p>"The referral program is great! I earned commission while my friend got a stunning website."</p>
                            <h4>Michael Omondi</h4>
                            <p>Marketing Director</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Question Page =====
const QuestionPage = ({ data }) => {
    useEffect(() => {
        document.title = `${data.title} | Inkspire Digital`;
    }, [data]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>{data.title}</h1>
                        <p>{data.answer}</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                    </div>
                </div>
            </section>
            <section style={{ padding: '40px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p>{data.longAnswer}</p>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Service + Location Page =====
const ServiceLocationPage = ({ serviceData, locationData }) => {
    useEffect(() => {
        document.title = `${serviceData.name} in ${locationData.name} - From R1,499 | Inkspire Digital`;
    }, [serviceData, locationData]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>{serviceData.name} in {locationData.name}</h1>
                        <p>Professional {serviceData.name.toLowerCase()} services for businesses in {locationData.name}, {locationData.province}. Starting from R1,499.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Modifier Page =====
const ModifierPage = ({ modifierData, serviceData, locationData }) => {
    useEffect(() => {
        document.title = `${modifierData.title} ${serviceData.name} in ${locationData.name} - ${modifierData.description} | Inkspire Digital`;
    }, [modifierData, serviceData, locationData]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>{modifierData.title} {serviceData.name} in {locationData.name}</h1>
                        <p>Looking for the {modifierData.keyword} {serviceData.keyword} in {locationData.name}? I'm a {modifierData.description} professional serving {locationData.name}.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Near Me Page =====
const NearMePage = ({ serviceData, locationData }) => {
    const locationText = locationData ? `near ${locationData.name}` : 'near me';
    
    useEffect(() => {
        document.title = `${serviceData.name} ${locationText} - Find a ${serviceData.keyword} close to you | Inkspire Digital`;
    }, [serviceData, locationText]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>{serviceData.name} {locationText}</h1>
                        <p>Looking for a {serviceData.keyword} close to you? I serve {locationData ? locationData.name : 'all areas of South Africa'} with fast response times.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Industry Page =====
const IndustryPage = ({ industryData, locationData }) => {
    useEffect(() => {
        document.title = `Web Design for ${industryData.name} in ${locationData.name} - ${industryData.service} | Inkspire Digital`;
    }, [industryData, locationData]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>Web Design for {industryData.name} in {locationData.name}</h1>
                        <p>Specialized {industryData.service} solutions for {industryData.keyword}s in {locationData.name}.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                    </div>
                </div>
            </section>
            <PricingSection />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Not Found =====
const NotFoundPage = () => {
    return (
        <>
            <Header />
            <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                <h1>Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <a href="/" className="btn btn-primary">Go Home</a>
            </div>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== PRICING SECTION =====
const PricingSection = () => {
    const openWhatsApp = () => {
        window.open('https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%20need%20a%20website.%20Can%20you%20help%3F', '_blank');
    };

    return (
        <section style={{ padding: '60px 0' }}>
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
                            <li><i className="fas fa-check-circle"></i> Faster Delivery</li>
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
    );
};

// ===== OPEN WHATSAPP =====
const openWhatsApp = () => {
    window.open('https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%20need%20a%20website.%20Can%20you%20help%3F', '_blank');
};

export default SEOPage;