import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
            metaDesc: 'Web design vs web development explained for South African businesses. Learn the difference and what you need for your website.',
            item1: 'Web Design', item2: 'Web Development',
            content: 'Web design focuses on the look and feel of your website (colors, layout, fonts). Web development deals with the technical functionality (coding, databases, forms). Both are essential for a successful website.'
        },
        'wordpress-vs-shopify': {
            title: 'WordPress vs Shopify: Which is Better for Your Business?',
            metaDesc: 'WordPress vs Shopify comparison for South African businesses. Learn which platform is better for your e-commerce needs and budget.',
            item1: 'WordPress', item2: 'Shopify',
            content: 'WordPress is more flexible and cost-effective for most businesses. Shopify is better for pure e-commerce. As a designer, I recommend WordPress for its versatility and lower long-term costs.'
        },
        'wix-vs-professional-design': {
            title: 'Wix vs Professional Web Design: The Real Difference',
            metaDesc: 'Wix vs professional web design - why custom websites outperform templates for SEO and conversions. Get the facts from a South African expert.',
            item1: 'Wix', item2: 'Professional Design',
            content: 'Wix offers DIY templates but limits customization. Professional design gives you a unique, SEO-optimized website that stands out and performs better on Google.'
        },
        'static-vs-dynamic-website': {
            title: 'Static vs Dynamic Website: Which Do You Need?',
            metaDesc: 'Static vs dynamic websites explained for South African small businesses. Learn which type suits your needs, budget, and growth goals.',
            item1: 'Static Website', item2: 'Dynamic Website',
            content: 'Static sites are faster and cheaper. Dynamic sites allow user interaction and content updates. Most small businesses need a dynamic site for growth.'
        },
        'freelance-vs-agency': {
            title: 'Freelance Web Designer vs Agency: Pros and Cons',
            metaDesc: 'Freelance web designer vs agency - which is right for your South African business? Compare costs, service quality, and turnaround times.',
            item1: 'Freelance', item2: 'Agency',
            content: 'Freelancers offer personalized service and lower rates. Agencies charge more but offer teams. For most small businesses, a skilled freelancer is the better choice.'
        }
    };

    // ===== "FOR" PAGES =====
    const forPages = {
        'small-business': { audience: 'Small Business', description: 'tailored for entrepreneurs and small business owners', metaDesc: 'Custom web design for South African small businesses. Affordable packages from R1,499. Get online today.' },
        'startups': { audience: 'Startups', description: 'perfect for new companies launching their brand', metaDesc: 'Startup web design packages from R1,499. Get your brand online with a professional, mobile-friendly website.' },
        'nonprofits': { audience: 'Nonprofits', description: 'special rates for charitable organizations', metaDesc: 'Special web design rates for South African nonprofits and NGOs. Affordable, professional websites for organizations making a difference.' },
        'entrepreneurs': { audience: 'Entrepreneurs', description: 'designed for ambitious business owners', metaDesc: 'Web design for entrepreneurs in South Africa. Launch your business with a professional website from R1,499.' },
        'freelancers': { audience: 'Freelancers', description: 'portfolio websites that attract clients', metaDesc: 'Portfolio websites for freelancers in South Africa. Showcase your work and attract more clients with a professional online presence.' }
    };

    // ===== "WITHOUT" PAGES =====
    const withoutPages = {
        'coding': { task: 'coding', solution: 'I handle all the technical work so you don\'t have to', metaDesc: 'Get a professional website without coding. No technical skills needed. I build it for you from R1,499.' },
        'developer': { task: 'a developer', solution: 'I am the developer - you get direct access without agency overhead', metaDesc: 'Get a website without hiring a developer. Direct access to a professional web designer. No agency fees.' },
        'design-software': { task: 'design software', solution: 'I use professional tools, you just share your vision', metaDesc: 'No design software needed. Just share your vision and I create a professional website for your business.' },
        'monthly-fees': { task: 'monthly fees', solution: 'Affordable R149/month includes hosting, maintenance, and support - first 3 months free', metaDesc: 'Website with no hidden monthly fees. Hosting from R149/month with first 3 months free. Transparent pricing.' },
        'contract': { task: 'a long-term contract', solution: 'No lock-in contracts. Pay as you go.', metaDesc: 'No long-term contracts for web design. Pay once for your website or choose month-to-month hosting. Cancel anytime.' }
    };

    // ===== YEARS =====
    const years = {
        '2025': { year: '2025', description: 'current pricing and trends', metaDesc: '2025 web design prices in South Africa. See current rates and trends. Websites from R1,499.' },
        '2026': { year: '2026', description: 'upcoming trends and forecasts', metaDesc: '2026 web design trends and price forecasts for South Africa. Plan your website budget for next year.' }
    };

    // ===== PRICE RANGES =====
    const priceRanges = {
        'under-5000': { amount: 'R5,000', packages: 'Basic (R1,499) or Standard (R2,499)', metaDesc: 'Websites under R5000 in South Africa. Professional designs starting from R1,499. See packages.' },
        'under-3000': { amount: 'R3,000', packages: 'Basic package at R1,499 fits your budget', metaDesc: 'Websites under R3000 in South Africa. Professional websites from R1,499. Get a quote today.' },
        'under-2000': { amount: 'R2,000', packages: 'Basic package at R1,499', metaDesc: 'Websites under R2000 in South Africa. Professional website for R1,499. Includes hosting.' }
    };

    // ===== LANDMARKS (Local SEO) =====
    const landmarks = {
        'va-waterfront': { name: 'V&A Waterfront', city: 'Cape Town', metaDesc: 'Web designer near V&A Waterfront in Cape Town. Professional websites for businesses in this area. Get a free quote.' },
        'sandton-city': { name: 'Sandton City', city: 'Johannesburg', metaDesc: 'Web designer near Sandton City, Johannesburg. Professional websites for businesses in Sandton. Get a free quote.' },
        'gateway-mall': { name: 'Gateway Mall', city: 'Durban', metaDesc: 'Web designer near Gateway Mall, Umhlanga. Professional websites for Durban businesses. Get a free quote.' },
        'moses-mabhida': { name: 'Moses Mabhida Stadium', city: 'Durban', metaDesc: 'Web designer near Moses Mabhida Stadium, Durban. Professional websites for local businesses. Get a free quote.' },
        'table-mountain': { name: 'Table Mountain', city: 'Cape Town', metaDesc: 'Web designer near Table Mountain, Cape Town. Professional websites for Cape Town businesses. Get a free quote.' }
    };

    // ===== URGENCY TYPES =====
    const urgencyTypes = {
        'emergency': { type: 'Emergency', turnaround: '24-48 hours', badge: 'Urgent', metaDesc: 'Emergency web design in 24-48 hours. Need a website fast? Rush service available in South Africa.' },
        'urgent': { type: 'Urgent', turnaround: '48-72 hours', badge: 'Priority', metaDesc: 'Urgent web design in 48-72 hours. Priority service for businesses that need a website quickly.' },
        'same-day': { type: 'Same Day', turnaround: '24 hours or less', badge: 'Express', metaDesc: 'Same-day web design in South Africa. Get a professional website in 24 hours or less. Rush service available.' },
        'quick': { type: 'Quick', turnaround: '3-5 days', badge: 'Fast Track', metaDesc: 'Quick web design in 3-5 days. Fast turnaround for South African businesses. Get online quickly.' }
    };

    // ===== QUESTIONS =====
    const questions = {
        'how-much-does-a-website-cost': {
            title: 'How Much Does a Website Cost in South Africa?',
            metaDesc: 'Website costs in South Africa explained. Professional websites from R1,499 plus R149/month hosting (first 3 months free). Get transparent pricing.',
            answer: 'Websites start from R1,499 once-off plus R149/month for hosting.',
            longAnswer: 'My packages start at R1,499 for a basic website, R2,499 for standard, and R4,999 for premium. Hosting is R149/month with the first 3 months FREE. All packages include free hosting for the first year of the website package.'
        },
        'how-to-choose-a-web-designer': {
            title: 'How to Choose a Web Designer in South Africa',
            metaDesc: 'Expert tips on choosing a web designer in South Africa. Check portfolios, pricing, and local knowledge. Get the right designer for your business.',
            answer: 'Look for experience, portfolio, pricing transparency, and local knowledge.',
            longAnswer: 'Check portfolios, read reviews, ask about pricing upfront, and ensure they understand your industry. I offer free demos so you can see my work before committing.'
        },
        'do-i-need-a-website': {
            title: 'Do I Need a Website for My Small Business?',
            metaDesc: 'Why your South African small business needs a website. 81% of customers research online before buying. Get a professional website from R1,499.',
            answer: 'Yes! 81% of South Africans research online before purchasing.',
            longAnswer: 'A website builds credibility, helps customers find you, and works 24/7. Even with social media, a website is essential for growth.'
        },
        'what-is-best-website-builder': {
            title: 'What Is the Best Website Builder for Small Business?',
            metaDesc: 'Best website builder for South African small businesses. Compare custom design vs templates. Professional websites outperform DIY builders.',
            answer: 'Custom design beats templates for uniqueness and SEO.',
            longAnswer: 'While Wix and Squarespace offer templates, custom-designed websites perform better for SEO and look more professional.'
        }
    };

    // ===== "REVIEW" PAGES =====
    const reviewPages = {
        'reviews': { type: 'Client Reviews', showRating: true, metaDesc: 'Read client reviews for Inkspire Digital Designs. 4.9/5 rating based on real customer feedback. See what South African business owners say.' },
        'testimonials': { type: 'Client Testimonials', showRating: true, metaDesc: 'Client testimonials for web design services in South Africa. Real feedback from happy business owners. 4.9/5 rating.' },
        'ratings': { type: 'Client Ratings', showRating: true, metaDesc: 'Client ratings for Inkspire Digital Designs. 4.9 out of 5 stars. See why South African businesses trust us.' }
    };

    // ===== ALL LOCATIONS (93+) =====
    const locations = {
        'amanzimtoti': { name: 'Amanzimtoti', province: 'KwaZulu-Natal', metaDesc: 'Web design in Amanzimtoti from R1,499. Professional websites for local businesses. Free quote.' },
        'durban': { name: 'Durban', province: 'KwaZulu-Natal', metaDesc: 'Web design in Durban from R1,499. Professional websites for businesses in Umhlanga, Ballito, and all KZN. Free quote.' },
        'johannesburg': { name: 'Johannesburg', province: 'Gauteng', metaDesc: 'Web design in Johannesburg from R1,499. Professional websites for businesses in Sandton, Midrand, Soweto. Free quote.' },
        'cape-town': { name: 'Cape Town', province: 'Western Cape', metaDesc: 'Web design in Cape Town from R1,499. Professional websites for businesses in CBD, Sea Point, Camps Bay. Free quote.' },
        'pretoria': { name: 'Pretoria', province: 'Gauteng', metaDesc: 'Web design in Pretoria from R1,499. Professional websites for businesses in Centurion, Menlyn, Hatfield. Free quote.' },
        'sandton': { name: 'Sandton', province: 'Gauteng', metaDesc: 'Web design in Sandton from R1,499. Professional websites for businesses in this premier business district. Free quote.' },
        'midrand': { name: 'Midrand', province: 'Gauteng', metaDesc: 'Web design in Midrand from R1,499. Professional websites for local businesses. Free quote.' },
        'umhlanga': { name: 'Umhlanga', province: 'KwaZulu-Natal', metaDesc: 'Web design in Umhlanga from R1,499. Professional websites for businesses near Gateway Mall. Free quote.' },
        'ballito': { name: 'Ballito', province: 'KwaZulu-Natal', metaDesc: 'Web design in Ballito from R1,499. Professional websites for Dolphin Coast businesses. Free quote.' },
        'centurion': { name: 'Centurion', province: 'Gauteng', metaDesc: 'Web design in Centurion from R1,499. Professional websites for local businesses. Free quote.' }
    };

    // Add meta descriptions to objects that don't have them
    const enhancedServiceLocation = (serviceData, locationData) => {
        return {
            metaDesc: `${serviceData.name} in ${locationData.name}, ${locationData.province}. Professional ${serviceData.keyword} services from R1,499. Free quote available.`
        };
    };

    // ===== DETECT PAGE TYPE AND RENDER WITH HELMET =====
    
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/${data.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`;
    
    return (
        <>
            <Helmet>
                <title>{data.title} | Inkspire Digital South Africa</title>
                <meta name="description" content={data.metaDesc || `Compare ${data.item1} vs ${data.item2} for your South African business. Learn which option is best for your needs and budget.`} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={`${data.title} | Inkspire Digital`} />
                <meta property="og:description" content={`${data.item1} vs ${data.item2} comparison for South African businesses.`} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/${data.audience.toLowerCase().replace(/ /g, '-')}`;
    
    return (
        <>
            <Helmet>
                <title>Web Design for {data.audience} from R1,499 | Inkspire Digital</title>
                <meta name="description" content={data.metaDesc || `Professional web design for ${data.audience}s in South Africa. ${data.description}. Starting from R1,499. Get a free quote.`} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={`Web Design for ${data.audience} | Inkspire Digital`} />
                <meta property="og:description" content={`Professional websites for ${data.audience}s from R1,499. Get a free quote today.`} />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/without-${data.task}`;
    
    return (
        <>
            <Helmet>
                <title>Website Without {data.task} | Hassle-Free Web Design | Inkspire Digital</title>
                <meta name="description" content={data.metaDesc || `${data.solution}. Get a professional website without the usual hassle. Starting from R1,499. Free quote.`} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/${data.year}`;
    
    return (
        <>
            <Helmet>
                <title>Web Design Prices {data.year} - {data.description} | Inkspire Digital</title>
                <meta name="description" content={data.metaDesc || `Web design prices for ${data.year} in South Africa. ${data.description}. Transparent pricing from R1,499.`} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/${data.amount.replace('R', 'under-').replace(',', '')}`;
    
    return (
        <>
            <Helmet>
                <title>Website Under {data.amount} - {data.packages} | Inkspire Digital</title>
                <meta name="description" content={data.metaDesc || `Get a professional website under ${data.amount} in South Africa. ${data.packages}. Free quote available.`} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/${data.name.toLowerCase().replace(/ /g, '-')}`;
    
    return (
        <>
            <Helmet>
                <title>Web Designer Near {data.name} - Serving {data.city} | Inkspire Digital</title>
                <meta name="description" content={data.metaDesc || `Professional web designer near ${data.name} in ${data.city}. Websites from R1,499 for local businesses. Free quote.`} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/${data.type.toLowerCase()}`;
    
    return (
        <>
            <Helmet>
                <title>{data.type} Web Design - {data.turnaround} Turnaround | Inkspire Digital</title>
                <meta name="description" content={data.metaDesc || `Need a website fast? ${data.type} web design with ${data.turnaround} turnaround in South Africa. Rush service available. Get a quote now.`} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/${data.type.toLowerCase().replace(/ /g, '-')}`;
    
    return (
        <>
            <Helmet>
                <title>{data.type} | What Clients Say About Inkspire Digital | 4.9/5 Rating</title>
                <meta name="description" content={data.metaDesc || `Read ${data.type.toLowerCase()} for Inkspire Digital. 4.9/5 rating based on real customer feedback. See what South African business owners say.`} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/${data.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`;
    
    return (
        <>
            <Helmet>
                <title>{data.title} | Web Design FAQ | Inkspire Digital</title>
                <meta name="description" content={data.metaDesc || `${data.title}. ${data.answer} Get expert answers for South African businesses.`} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/${serviceData.keyword.replace(/ /g, '-')}/${locationData.name.toLowerCase()}`;
    
    return (
        <>
            <Helmet>
                <title>{serviceData.name} in {locationData.name} from R1,499 | Inkspire Digital</title>
                <meta name="description" content={`${serviceData.name} in ${locationData.name}, ${locationData.province}. Professional ${serviceData.keyword} services starting from R1,499. Free quote available.`} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/${modifierData.keyword}/${serviceData.keyword.replace(/ /g, '-')}/${locationData.name.toLowerCase()}`;
    
    return (
        <>
            <Helmet>
                <title>{modifierData.title} {serviceData.name} in {locationData.name} | Inkspire Digital</title>
                <meta name="description" content={`Looking for the ${modifierData.keyword} ${serviceData.keyword} in ${locationData.name}? ${modifierData.description} professional serving ${locationData.name}. Websites from R1,499.`} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/${serviceData.keyword.replace(/ /g, '-')}-near-me${locationData ? '/' + locationData.name.toLowerCase() : ''}`;
    
    return (
        <>
            <Helmet>
                <title>{serviceData.name} {locationText} - Find Local | Inkspire Digital</title>
                <meta name="description" content={`Find a ${serviceData.keyword} ${locationText} in South Africa. Professional ${serviceData.name.toLowerCase()} services. Free quote available.`} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
    const canonicalUrl = `https://inkspiredigitaldesigns.co.za/web-design-${industryData.keyword}s/${locationData.name.toLowerCase()}`;
    
    return (
        <>
            <Helmet>
                <title>Web Design for {industryData.name} in {locationData.name} | Inkspire Digital</title>
                <meta name="description" content={`Specialized ${industryData.service} for ${industryData.keyword}s in ${locationData.name}, ${locationData.province}. Professional web design from R1,499. Free quote.`} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
            <Helmet>
                <title>Page Not Found | Inkspire Digital Designs</title>
                <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to learn about our web design services." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            <Header />
            <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                <h1>Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <Link to="/" className="btn btn-primary">Go Home</Link>
            </div>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

// ===== PRICING SECTION WITH CORRECT RATES =====
const PricingSection = () => {
    const openWhatsApp = () => {
        window.open('https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%20need%20a%20website.%20Can%20you%20help%3F', '_blank');
    };

    return (
        <section style={{ padding: '60px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2>Web Design Packages</h2>
                    <p>Transparent pricing. No hidden fees.</p>
                </div>
                <div className="pricing-grid" style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <div className="pricing-card">
                        <h3>BASIC</h3>
                        <div className="pricing-price">R1,499<small>/once off</small></div>
                        <ul className="pricing-features">
                            <li><i className="fas fa-check-circle"></i> 1 Page Website</li>
                            <li><i className="fas fa-check-circle"></i> Mobile Responsive</li>
                            <li><i className="fas fa-check-circle"></i> Basic SEO</li>
                            <li><i className="fas fa-check-circle"></i> Free Hosting (1 Year)</li>
                        </ul>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Started</button>
                        <div className="price-monthly">Hosting: R149/month after 1 year (first 3 months free)</div>
                    </div>
                    <div className="pricing-card featured">
                        <div className="popular-tag">⭐ MOST POPULAR</div>
                        <h3>STANDARD</h3>
                        <div className="pricing-price">R2,499<small>/once off</small></div>
                        <ul className="pricing-features">
                            <li><i className="fas fa-check-circle"></i> Up to 5 Pages</li>
                            <li><i className="fas fa-check-circle"></i> SEO Optimization</li>
                            <li><i className="fas fa-check-circle"></i> Faster Delivery</li>
                            <li><i className="fas fa-check-circle"></i> Free Hosting (1 Year)</li>
                        </ul>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Started</button>
                        <div className="price-monthly">Hosting: R149/month after 1 year (first 3 months free)</div>
                    </div>
                    <div className="pricing-card">
                        <h3>PREMIUM</h3>
                        <div className="pricing-price">R4,999<small>/once off</small></div>
                        <ul className="pricing-features">
                            <li><i className="fas fa-check-circle"></i> Full Website (10+ pages)</li>
                            <li><i className="fas fa-check-circle"></i> Custom Design</li>
                            <li><i className="fas fa-check-circle"></i> Advanced Features</li>
                            <li><i className="fas fa-check-circle"></i> Free Hosting (1 Year)</li>
                        </ul>
                        <button className="btn btn-primary" onClick={openWhatsApp}>Get Started</button>
                        <div className="price-monthly">Hosting: R149/month after 1 year (first 3 months free)</div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '0.9rem', color: '#666' }}>
                    <p>🎉 Special: First 3 months of hosting are FREE with any website package</p>
                    <p>Graphic design services starting from R350</p>
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