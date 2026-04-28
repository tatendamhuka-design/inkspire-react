import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';

const SEOPage = () => {
    const { type, service, location, modifier, industry, question } = useParams();

    // ===== ALL SERVICES =====
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
        'experienced': { title: 'Experienced', keyword: 'experienced', description: 'skilled' }
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

    // ===== ALL LOCATIONS (93) =====
    const locations = {
        // KZN
        'amanzimtoti': { name: 'Amanzimtoti', province: 'KwaZulu-Natal' },
        'durban': { name: 'Durban', province: 'KwaZulu-Natal' },
        'durban-north': { name: 'Durban North', province: 'KwaZulu-Natal' },
        'umhlanga': { name: 'Umhlanga', province: 'KwaZulu-Natal' },
        'ballito': { name: 'Ballito', province: 'KwaZulu-Natal' },
        'westville': { name: 'Westville', province: 'KwaZulu-Natal' },
        'kloof': { name: 'Kloof', province: 'KwaZulu-Natal' },
        'hillcrest': { name: 'Hillcrest', province: 'KwaZulu-Natal' },
        'pinetown': { name: 'Pinetown', province: 'KwaZulu-Natal' },
        'queensburgh': { name: 'Queensburgh', province: 'KwaZulu-Natal' },
        'bluff': { name: 'Bluff', province: 'KwaZulu-Natal' },
        'glenwood': { name: 'Glenwood', province: 'KwaZulu-Natal' },
        'morningside': { name: 'Morningside', province: 'KwaZulu-Natal' },
        'berea': { name: 'Berea', province: 'KwaZulu-Natal' },
        'musgrave': { name: 'Musgrave', province: 'KwaZulu-Natal' },
        'gateway': { name: 'Gateway', province: 'KwaZulu-Natal' },
        'la-lucia': { name: 'La Lucia', province: 'KwaZulu-Natal' },
        'sibaya': { name: 'Sibaya', province: 'KwaZulu-Natal' },
        'mount-edgecombe': { name: 'Mount Edgecombe', province: 'KwaZulu-Natal' },
        'phoenix': { name: 'Phoenix', province: 'KwaZulu-Natal' },
        'chatsworth': { name: 'Chatsworth', province: 'KwaZulu-Natal' },
        'isipingo': { name: 'Isipingo', province: 'KwaZulu-Natal' },
        'umlazi': { name: 'Umlazi', province: 'KwaZulu-Natal' },
        'kwamashu': { name: 'KwaMashu', province: 'KwaZulu-Natal' },
        // Gauteng
        'johannesburg': { name: 'Johannesburg', province: 'Gauteng' },
        'sandton': { name: 'Sandton', province: 'Gauteng' },
        'midrand': { name: 'Midrand', province: 'Gauteng' },
        'randburg': { name: 'Randburg', province: 'Gauteng' },
        'fourways': { name: 'Fourways', province: 'Gauteng' },
        'bryanston': { name: 'Bryanston', province: 'Gauteng' },
        'rivonia': { name: 'Rivonia', province: 'Gauteng' },
        'sunninghill': { name: 'Sunninghill', province: 'Gauteng' },
        'woodmead': { name: 'Woodmead', province: 'Gauteng' },
        'rosebank': { name: 'Rosebank', province: 'Gauteng' },
        'melrose-arch': { name: 'Melrose Arch', province: 'Gauteng' },
        'houghton': { name: 'Houghton', province: 'Gauteng' },
        'parktown': { name: 'Parktown', province: 'Gauteng' },
        'braamfontein': { name: 'Braamfontein', province: 'Gauteng' },
        'soweto': { name: 'Soweto', province: 'Gauteng' },
        'benoni': { name: 'Benoni', province: 'Gauteng' },
        'boksburg': { name: 'Boksburg', province: 'Gauteng' },
        'germiston': { name: 'Germiston', province: 'Gauteng' },
        'kempton-park': { name: 'Kempton Park', province: 'Gauteng' },
        'edenvale': { name: 'Edenvale', province: 'Gauteng' },
        'bedfordview': { name: 'Bedfordview', province: 'Gauteng' },
        'alberton': { name: 'Alberton', province: 'Gauteng' },
        'roodepoort': { name: 'Roodepoort', province: 'Gauteng' },
        'randfontein': { name: 'Randfontein', province: 'Gauteng' },
        'krugersdorp': { name: 'Krugersdorp', province: 'Gauteng' },
        'lenasia': { name: 'Lenasia', province: 'Gauteng' },
        'pretoria': { name: 'Pretoria', province: 'Gauteng' },
        'centurion': { name: 'Centurion', province: 'Gauteng' },
        'hatfield': { name: 'Hatfield', province: 'Gauteng' },
        'brooklyn': { name: 'Brooklyn', province: 'Gauteng' },
        'menlyn': { name: 'Menlyn', province: 'Gauteng' },
        'waterkloof': { name: 'Waterkloof', province: 'Gauteng' },
        'lynnwood': { name: 'Lynnwood', province: 'Gauteng' },
        'faerie-glen': { name: 'Faerie Glen', province: 'Gauteng' },
        'garsfontein': { name: 'Garsfontein', province: 'Gauteng' },
        'moreleta-park': { name: 'Moreleta Park', province: 'Gauteng' },
        'silver-lakes': { name: 'Silver Lakes', province: 'Gauteng' },
        'pretoria-east': { name: 'Pretoria East', province: 'Gauteng' },
        'pretoria-north': { name: 'Pretoria North', province: 'Gauteng' },
        'wonderboom': { name: 'Wonderboom', province: 'Gauteng' },
        'soshanguve': { name: 'Soshanguve', province: 'Gauteng' },
        'mamelodi': { name: 'Mamelodi', province: 'Gauteng' },
        'atteridgeville': { name: 'Atteridgeville', province: 'Gauteng' },
        // Western Cape
        'cape-town': { name: 'Cape Town', province: 'Western Cape' },
        'sea-point': { name: 'Sea Point', province: 'Western Cape' },
        'camps-bay': { name: 'Camps Bay', province: 'Western Cape' },
        'clifton': { name: 'Clifton', province: 'Western Cape' },
        'rondebosch': { name: 'Rondebosch', province: 'Western Cape' },
        'claremont': { name: 'Claremont', province: 'Western Cape' },
        'newlands': { name: 'Newlands', province: 'Western Cape' },
        'kenilworth': { name: 'Kenilworth', province: 'Western Cape' },
        'wynberg': { name: 'Wynberg', province: 'Western Cape' },
        'constantia': { name: 'Constantia', province: 'Western Cape' },
        'table-view': { name: 'Table View', province: 'Western Cape' },
        'blouberg': { name: 'Blouberg', province: 'Western Cape' },
        'parklands': { name: 'Parklands', province: 'Western Cape' },
        'milnerton': { name: 'Milnerton', province: 'Western Cape' },
        'century-city': { name: 'Century City', province: 'Western Cape' },
        'durbanville': { name: 'Durbanville', province: 'Western Cape' },
        'bellville': { name: 'Bellville', province: 'Western Cape' },
        'muizenberg': { name: 'Muizenberg', province: 'Western Cape' },
        'fish-hoek': { name: 'Fish Hoek', province: 'Western Cape' },
        'simons-town': { name: "Simon's Town", province: 'Western Cape' },
        'noordhoek': { name: 'Noordhoek', province: 'Western Cape' },
        'hout-bay': { name: 'Hout Bay', province: 'Western Cape' }
    };

    // ===== QUESTIONS (for voice search) =====
    const questions = {
        'how-much-does-a-website-cost': {
            title: 'How Much Does a Website Cost in South Africa?',
            answer: 'Websites start from R1,499 once-off plus R200/month for hosting. No hidden fees.',
            longAnswer: 'The cost of a website in South Africa varies depending on complexity. My packages start at R1,499 for a basic 1-page website, R2,499 for a standard 5-page website, and R4,999 for a premium full website. All include hosting and maintenance.'
        },
        'how-to-choose-a-web-designer': {
            title: 'How to Choose a Web Designer in South Africa',
            answer: 'Look for experience, portfolio, pricing transparency, and local knowledge.',
            longAnswer: 'When choosing a web designer, check their portfolio, read client reviews, ask about pricing upfront, and ensure they understand your industry. As a local designer, I offer free demos so you can see my work before committing.'
        },
        'do-i-need-a-website-for-my-business': {
            title: 'Do I Need a Website for My Small Business?',
            answer: 'Yes! 81% of South Africans research online before making a purchase.',
            longAnswer: 'A website makes your business visible 24/7, builds credibility, and helps customers find you. Even with social media, a website is your digital home that you control completely.'
        },
        'what-is-the-best-website-builder': {
            title: 'What Is the Best Website Builder for Small Business?',
            answer: 'Professional custom design beats templates every time for uniqueness and SEO.',
            longAnswer: 'While platforms like Wix and Squarespace offer templates, custom-designed websites perform better for SEO, look more professional, and can be tailored exactly to your needs.'
        }
    };

    // ===== PRICE PAGES =====
    const pricePages = {
        'website-packages-comparison': {
            title: 'Website Packages Comparison South Africa',
            description: 'Compare all web design packages side by side',
            showComparison: true
        },
        'web-design-prices-south-africa': {
            title: 'Web Design Prices South Africa - Complete Guide 2025',
            description: 'Transparent pricing for professional websites',
            showComparison: true
        },
        'cheapest-website-designer': {
            title: 'Cheapest Website Designer in South Africa',
            description: 'Quality affordable websites from R1,499',
            showComparison: true
        },
        'website-cost-breakdown': {
            title: 'Website Cost Breakdown - What You Actually Pay',
            description: 'No hidden fees. See exactly what you pay for.',
            showComparison: true
        }
    };

    // ===== DETECT PAGE TYPE =====
    
    // Type 1: Service + Location (e.g., /web-designer/cape-town)
    if (service && locations[location]) {
        const serviceData = services[service];
        const locationData = locations[location];
        
        if (serviceData && locationData) {
            return <ServiceLocationPage serviceData={serviceData} locationData={locationData} openWhatsApp={openWhatsApp} />;
        }
    }
    
    // Type 2: Modifier + Service + Location (e.g., /best-web-designer/cape-town)
    if (modifier && service && locations[location] && modifiers[modifier]) {
        const modifierData = modifiers[modifier];
        const serviceData = services[service];
        const locationData = locations[location];
        
        if (modifierData && serviceData && locationData) {
            return <ModifierPage modifierData={modifierData} serviceData={serviceData} locationData={locationData} openWhatsApp={openWhatsApp} />;
        }
    }
    
    // Type 3: Near Me (e.g., /web-designer-near-me or /web-designer-near-me/durban)
    if (type === 'near-me' && service) {
        const serviceData = services[service];
        const locationData = location ? locations[location] : null;
        
        if (serviceData) {
            return <NearMePage serviceData={serviceData} locationData={locationData} openWhatsApp={openWhatsApp} />;
        }
    }
    
    // Type 4: Industry + Location (e.g., /web-design-plumbers/durban)
    if (industry && locations[location] && industries[industry]) {
        const industryData = industries[industry];
        const locationData = locations[location];
        
        if (industryData && locationData) {
            return <IndustryPage industryData={industryData} locationData={locationData} openWhatsApp={openWhatsApp} />;
        }
    }
    
    // Type 5: Question Pages (e.g., /how-much-does-a-website-cost)
    if (question && questions[question]) {
        const questionData = questions[question];
        return <QuestionPage questionData={questionData} openWhatsApp={openWhatsApp} />;
    }
    
    // Type 6: Price Pages (e.g., /web-design-prices-south-africa)
    if (pricePages[type]) {
        const priceData = pricePages[type];
        return <PricePage priceData={priceData} openWhatsApp={openWhatsApp} />;
    }
    
    // Fallback: 404
    return <NotFoundPage />;
};

// ===== COMPONENT: Service + Location Page =====
const ServiceLocationPage = ({ serviceData, locationData, openWhatsApp }) => {
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
            <PricingSection openWhatsApp={openWhatsApp} />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Modifier Page (Best/Top/Cheap) =====
const ModifierPage = ({ modifierData, serviceData, locationData, openWhatsApp }) => {
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
                        <p>Looking for the {modifierData.keyword} {serviceData.keyword} in {locationData.name}? I'm a {modifierData.description} professional serving {locationData.name} and surrounding areas.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                    </div>
                </div>
            </section>
            <PricingSection openWhatsApp={openWhatsApp} />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Near Me Page =====
const NearMePage = ({ serviceData, locationData, openWhatsApp }) => {
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
                        <p>Looking for a {serviceData.keyword} close to you? I serve {locationData ? locationData.name : 'all areas of South Africa'} with fast response times and affordable rates.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                    </div>
                </div>
            </section>
            <PricingSection openWhatsApp={openWhatsApp} />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Industry Page =====
const IndustryPage = ({ industryData, locationData, openWhatsApp }) => {
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
                        <p>Specialized {industryData.service} solutions for {industryData.keyword}s in {locationData.name}. Get more customers with a professional online presence.</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                    </div>
                </div>
            </section>
            <PricingSection openWhatsApp={openWhatsApp} />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Question Page =====
const QuestionPage = ({ questionData, openWhatsApp }) => {
    useEffect(() => {
        document.title = `${questionData.title} | Inkspire Digital`;
    }, [questionData]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>{questionData.title}</h1>
                        <p>{questionData.answer}</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                    </div>
                </div>
            </section>
            <section style={{ padding: '40px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p>{questionData.longAnswer}</p>
                    </div>
                </div>
            </section>
            <PricingSection openWhatsApp={openWhatsApp} />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== COMPONENT: Price Page =====
const PricePage = ({ priceData, openWhatsApp }) => {
    useEffect(() => {
        document.title = `${priceData.title} | Inkspire Digital`;
    }, [priceData]);

    return (
        <>
            <Header />
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>{priceData.title}</h1>
                        <p>{priceData.description}</p>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                    </div>
                </div>
            </section>
            <PricingSection openWhatsApp={openWhatsApp} showComparison={priceData.showComparison} />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== PRICING SECTION (Reusable) =====
const PricingSection = ({ openWhatsApp, showComparison }) => {
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

// ===== 404 Page =====
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

// ===== Helper Functions =====
const openWhatsApp = () => {
    window.open('https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%20need%20a%20website.%20Can%20you%20help%3F', '_blank');
};

export default SEOPage;