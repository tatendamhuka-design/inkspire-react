import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';

const DynamicServicePage = () => {
    const { service, location } = useParams();

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
        'affordable-graphic-designer': { name: 'Affordable Graphic Designer', keyword: 'affordable graphic designer' },
        'logo-designer': { name: 'Logo Designer', keyword: 'logo designer' },
        'affordable-logo-designer': { name: 'Affordable Logo Designer', keyword: 'affordable logo designer' },
        'branding-designer': { name: 'Branding Designer', keyword: 'branding designer' },
        'ecommerce-web-designer': { name: 'E-commerce Web Designer', keyword: 'ecommerce web designer' },
        'wordpress-designer': { name: 'WordPress Designer', keyword: 'wordpress designer' },
        'seo-specialist': { name: 'SEO Specialist', keyword: 'SEO specialist' }
    };

    // ===== ALL LOCATIONS (93) =====
    const locations = {
        // KwaZulu-Natal (25)
        'amanzimtoti': { name: 'Amanzimtoti', province: 'KwaZulu-Natal', areas: ['Amanzimtoti CBD', 'Kingsburgh', 'Doonside', 'Winklespruit'] },
        'durban': { name: 'Durban', province: 'KwaZulu-Natal', areas: ['Durban CBD', 'Point', 'The Bluff', 'Glenwood'] },
        'durban-north': { name: 'Durban North', province: 'KwaZulu-Natal', areas: ['Durban North CBD', 'Glenashley', 'La Lucia', 'Umgeni Park'] },
        'umhlanga': { name: 'Umhlanga', province: 'KwaZulu-Natal', areas: ['Umhlanga Ridge', 'Umhlanga Rocks', 'La Lucia', 'Gateway'] },
        'ballito': { name: 'Ballito', province: 'KwaZulu-Natal', areas: ['Ballito CBD', 'Simbithi', 'Zimbali', 'Salt Rock'] },
        'westville': { name: 'Westville', province: 'KwaZulu-Natal', areas: ['Westville CBD', 'Westville North', 'Westville South'] },
        'kloof': { name: 'Kloof', province: 'KwaZulu-Natal', areas: ['Kloof CBD', 'Kloof Village', 'Forest Hills'] },
        'hillcrest': { name: 'Hillcrest', province: 'KwaZulu-Natal', areas: ['Hillcrest CBD', 'Everton', 'Waterfall'] },
        'pinetown': { name: 'Pinetown', province: 'KwaZulu-Natal', areas: ['Pinetown CBD', 'New Germany', 'Cowies Hill'] },
        'queensburgh': { name: 'Queensburgh', province: 'KwaZulu-Natal', areas: ['Queensburgh CBD', 'Malvern', 'Escombe'] },
        'bluff': { name: 'Bluff', province: 'KwaZulu-Natal', areas: ['Bluff CBD', 'Brighton Beach', 'Ocean View'] },
        'glenwood': { name: 'Glenwood', province: 'KwaZulu-Natal', areas: ['Glenwood CBD', 'Bulwer', 'Sparks Estate'] },
        'morningside': { name: 'Morningside', province: 'KwaZulu-Natal', areas: ['Morningside CBD', 'Windermere', 'Musgrave'] },
        'berea': { name: 'Berea', province: 'KwaZulu-Natal', areas: ['Berea CBD', 'The Berea', 'Essenwood'] },
        'musgrave': { name: 'Musgrave', province: 'KwaZulu-Natal', areas: ['Musgrave Road', 'Bulwer Park'] },
        'gateway': { name: 'Gateway', province: 'KwaZulu-Natal', areas: ['Gateway Precinct', 'Umhlanga Ridge'] },
        'la-lucia': { name: 'La Lucia', province: 'KwaZulu-Natal', areas: ['La Lucia CBD', 'La Lucia Ridge'] },
        'umhlanga-rocks': { name: 'uMhlanga Rocks', province: 'KwaZulu-Natal', areas: ['uMhlanga Rocks CBD', 'The Village'] },
        'sibaya': { name: 'Sibaya', province: 'KwaZulu-Natal', areas: ['Sibaya Casino', 'Mount Edgecombe'] },
        'mount-edgecombe': { name: 'Mount Edgecombe', province: 'KwaZulu-Natal', areas: ['Mount Edgecombe Country Club', 'The Views'] },
        'phoenix': { name: 'Phoenix', province: 'KwaZulu-Natal', areas: ['Phoenix CBD', 'Phoenix Industrial Park'] },
        'chatsworth': { name: 'Chatsworth', province: 'KwaZulu-Natal', areas: ['Chatsworth CBD', 'Crossmoor', 'Havenside'] },
        'isipingo': { name: 'Isipingo', province: 'KwaZulu-Natal', areas: ['Isipingo CBD', 'Isipingo Beach'] },
        'umlazi': { name: 'Umlazi', province: 'KwaZulu-Natal', areas: ['Umlazi CBD', 'Umlazi Mega City'] },
        'kwamashu': { name: 'KwaMashu', province: 'KwaZulu-Natal', areas: ['KwaMashu CBD', 'Mbumbulu'] },

        // Gauteng (43)
        'johannesburg': { name: 'Johannesburg', province: 'Gauteng', areas: ['Johannesburg CBD', 'Braamfontein', 'Parktown', 'Melville'] },
        'sandton': { name: 'Sandton', province: 'Gauteng', areas: ['Sandton CBD', 'Bryanston', 'Rivonia', 'Morningside'] },
        'midrand': { name: 'Midrand', province: 'Gauteng', areas: ['Midrand CBD', 'Carlswald', 'Kyalami', 'Halfway House'] },
        'randburg': { name: 'Randburg', province: 'Gauteng', areas: ['Randburg CBD', 'Ferndale', 'Blairgowrie', 'Bordeaux'] },
        'fourways': { name: 'Fourways', province: 'Gauteng', areas: ['Fourways CBD', 'Dainfern', 'Broadacres'] },
        'bryanston': { name: 'Bryanston', province: 'Gauteng', areas: ['Bryanston CBD', 'Bryanston East', 'Bryanston West'] },
        'rivonia': { name: 'Rivonia', province: 'Gauteng', areas: ['Rivonia CBD', 'Rivonia Extension'] },
        'sunninghill': { name: 'Sunninghill', province: 'Gauteng', areas: ['Sunninghill CBD', 'Sunninghill Gardens'] },
        'woodmead': { name: 'Woodmead', province: 'Gauteng', areas: ['Woodmead CBD', 'Woodmead Office Park'] },
        'rosebank': { name: 'Rosebank', province: 'Gauteng', areas: ['Rosebank CBD', 'The Zone', 'Rosebank Mall'] },
        'melrose-arch': { name: 'Melrose Arch', province: 'Gauteng', areas: ['Melrose Arch Precinct', 'Melrose North'] },
        'houghton': { name: 'Houghton', province: 'Gauteng', areas: ['Houghton Estate', 'Houghton Ridge'] },
        'parktown': { name: 'Parktown', province: 'Gauteng', areas: ['Parktown CBD', 'Westcliff', 'Forest Town'] },
        'braamfontein': { name: 'Braamfontein', province: 'Gauteng', areas: ['Braamfontein CBD', 'Smit Street', 'Juta Street'] },
        'soweto': { name: 'Soweto', province: 'Gauteng', areas: ['Orlando', 'Diepkloof', 'Meadowlands', 'Protea'] },
        'benoni': { name: 'Benoni', province: 'Gauteng', areas: ['Benoni CBD', 'Rynfield', 'Northmead'] },
        'boksburg': { name: 'Boksburg', province: 'Gauteng', areas: ['Boksburg CBD', 'Sunward Park', 'Parkrand'] },
        'germiston': { name: 'Germiston', province: 'Gauteng', areas: ['Germiston CBD', 'Primrose', 'Lambton'] },
        'kempton-park': { name: 'Kempton Park', province: 'Gauteng', areas: ['Kempton Park CBD', 'Rhodesfield', 'Bonaero Park'] },
        'edenvale': { name: 'Edenvale', province: 'Gauteng', areas: ['Edenvale CBD', 'Hurlyvale', 'Dowerglen'] },
        'bedfordview': { name: 'Bedfordview', province: 'Gauteng', areas: ['Bedfordview CBD', 'Morninghill', 'Skeen'] },
        'alberton': { name: 'Alberton', province: 'Gauteng', areas: ['Alberton CBD', 'Randhart', 'Brackenhurst'] },
        'roodepoort': { name: 'Roodepoort', province: 'Gauteng', areas: ['Roodepoort CBD', 'Florida', 'Constantia Kloof'] },
        'randfontein': { name: 'Randfontein', province: 'Gauteng', areas: ['Randfontein CBD', 'Westonaria'] },
        'krugersdorp': { name: 'Krugersdorp', province: 'Gauteng', areas: ['Krugersdorp CBD', 'Mogale City'] },
        'lenasia': { name: 'Lenasia', province: 'Gauteng', areas: ['Lenasia CBD', 'Lenasia South', 'Lenasia Extension'] },
        'pretoria': { name: 'Pretoria', province: 'Gauteng', areas: ['Pretoria CBD', 'Arcadia', 'Sunnyside', 'Brooklyn'] },
        'centurion': { name: 'Centurion', province: 'Gauteng', areas: ['Centurion CBD', 'Lyttelton', 'Eldoraigne', 'Rooihuiskraal'] },
        'hatfield': { name: 'Hatfield', province: 'Gauteng', areas: ['Hatfield CBD', 'Hatfield Village'] },
        'brooklyn': { name: 'Brooklyn', province: 'Gauteng', areas: ['Brooklyn CBD', 'Brooklyn Circle'] },
        'menlyn': { name: 'Menlyn', province: 'Gauteng', areas: ['Menlyn CBD', 'Menlyn Park', 'Menlyn Maine'] },
        'waterkloof': { name: 'Waterkloof', province: 'Gauteng', areas: ['Waterkloof CBD', 'Waterkloof Ridge', 'Waterkloof Heights'] },
        'lynnwood': { name: 'Lynnwood', province: 'Gauteng', areas: ['Lynnwood CBD', 'Lynnwood Ridge', 'Lynnwood Glen'] },
        'faerie-glen': { name: 'Faerie Glen', province: 'Gauteng', areas: ['Faerie Glen CBD', 'Faerie Glen Nature Reserve'] },
        'garsfontein': { name: 'Garsfontein', province: 'Gauteng', areas: ['Garsfontein CBD', 'Garsfontein Road'] },
        'moreleta-park': { name: 'Moreleta Park', province: 'Gauteng', areas: ['Moreleta Park CBD', 'Moreleta Kloof'] },
        'silver-lakes': { name: 'Silver Lakes', province: 'Gauteng', areas: ['Silver Lakes Golf Estate', 'Silver Lakes Village'] },
        'pretoria-east': { name: 'Pretoria East', province: 'Gauteng', areas: ['Pretoria East CBD', 'Wapadrand', 'Wingate Park'] },
        'pretoria-north': { name: 'Pretoria North', province: 'Gauteng', areas: ['Pretoria North CBD', 'Wonderboom', 'Villieria'] },
        'wonderboom': { name: 'Wonderboom', province: 'Gauteng', areas: ['Wonderboom CBD', 'Wonderboom South'] },
        'soshanguve': { name: 'Soshanguve', province: 'Gauteng', areas: ['Soshanguve CBD', 'Block KK', 'Block L'] },
        'mamelodi': { name: 'Mamelodi', province: 'Gauteng', areas: ['Mamelodi CBD', 'Mamelodi East', 'Mamelodi West'] },
        'atteridgeville': { name: 'Atteridgeville', province: 'Gauteng', areas: ['Atteridgeville CBD', 'Saulsville'] },

        // Western Cape (25)
        'cape-town': { name: 'Cape Town', province: 'Western Cape', areas: ['Cape Town CBD', 'Foreshore', 'Gardens', 'Vredehoek'] },
        'cape-town-cbd': { name: 'Cape Town CBD', province: 'Western Cape', areas: ['Cape Town CBD', 'Company Gardens', 'St Georges Mall'] },
        'va-waterfront': { name: 'V&A Waterfront', province: 'Western Cape', areas: ['V&A Waterfront', 'Clock Tower', 'Breakwater Point'] },
        'sea-point': { name: 'Sea Point', province: 'Western Cape', areas: ['Sea Point CBD', 'Mouille Point', 'Three Anchor Bay'] },
        'camps-bay': { name: 'Camps Bay', province: 'Western Cape', areas: ['Camps Bay CBD', 'Bakoven', 'Glen Beach'] },
        'clifton': { name: 'Clifton', province: 'Western Cape', areas: ['Clifton Beach', 'Fourth Beach', 'Clifton Road'] },
        'rondebosch': { name: 'Rondebosch', province: 'Western Cape', areas: ['Rondebosch CBD', 'Rondebosch East', 'University Estate'] },
        'claremont': { name: 'Claremont', province: 'Western Cape', areas: ['Claremont CBD', 'Claremont Upper', 'Harfield Village'] },
        'newlands': { name: 'Newlands', province: 'Western Cape', areas: ['Newlands CBD', 'Newlands Forest', 'Rugby Stadium'] },
        'kenilworth': { name: 'Kenilworth', province: 'Western Cape', areas: ['Kenilworth CBD', 'Kenilworth Racecourse'] },
        'wynberg': { name: 'Wynberg', province: 'Western Cape', areas: ['Wynberg CBD', 'Wynberg Hill', 'Plumstead'] },
        'constantia': { name: 'Constantia', province: 'Western Cape', areas: ['Constantia CBD', 'Constantia Heights', 'Constantia Village'] },
        'bishops-court': { name: 'Bishopscourt', province: 'Western Cape', areas: ['Bishopscourt Village', 'Bishopscourt Estate'] },
        'table-view': { name: 'Table View', province: 'Western Cape', areas: ['Table View CBD', 'Flora Park', 'West Riding'] },
        'blouberg': { name: 'Blouberg', province: 'Western Cape', areas: ['Bloubergstrand', 'Bloubergrant', 'Big Bay'] },
        'parklands': { name: 'Parklands', province: 'Western Cape', areas: ['Parklands CBD', 'Parklands North', 'Sandown'] },
        'milnerton': { name: 'Milnerton', province: 'Western Cape', areas: ['Milnerton CBD', 'Milnerton Ridge', 'Summer Greens'] },
        'century-city': { name: 'Century City', province: 'Western Cape', areas: ['Century City', 'Bridgewater', 'Intrepid'] },
        'durbanville': { name: 'Durbanville', province: 'Western Cape', areas: ['Durbanville CBD', 'Durbanville Hills', 'Sonstraal'] },
        'bellville': { name: 'Bellville', province: 'Western Cape', areas: ['Bellville CBD', 'Bellville South', 'Bellville Park'] },
        'muizenberg': { name: 'Muizenberg', province: 'Western Cape', areas: ['Muizenberg CBD', 'Muizenberg Beach', 'St James'] },
        'fish-hoek': { name: 'Fish Hoek', province: 'Western Cape', areas: ['Fish Hoek CBD', 'Fish Hoek Beach', 'Clovelly'] },
        'simons-town': { name: 'Simon\'s Town', province: 'Western Cape', areas: ['Simon\'s Town CBD', 'Jubilee Square', 'Naval Base'] },
        'noordhoek': { name: 'Noordhoek', province: 'Western Cape', areas: ['Noordhoek Beach', 'Noordhoek Village', 'Chapmans Peak'] },
        'hout-bay': { name: 'Hout Bay', province: 'Western Cape', areas: ['Hout Bay CBD', 'Hout Bay Beach', 'Harbour'] }
    };

    const serviceData = services[service];
    const locationData = locations[location];
    
    // If invalid service or location, show 404
    if (!serviceData || !locationData) {
        return (
            <>
                <Header />
                <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                    <h1>Page Not Found</h1>
                    <p>The service or location you're looking for doesn't exist.</p>
                    <a href="/" className="btn btn-primary">Go Home</a>
                </div>
                <Footer />
                <FloatingWhatsApp />
            </>
        );
    }

    const { name: serviceName, keyword } = serviceData;
    const { name: locationName, province, areas } = locationData;

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `${serviceName} in ${locationName} - Affordable Rates from R1,499 | Inkspire Digital`;
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', `Looking for a ${keyword} in ${locationName}? Professional websites from R1,499. Free demo available. Serving ${locationName} and surrounding areas. Call or WhatsApp today!`);
        }
    }, [service, location, serviceName, keyword, locationName]);

    const openWhatsApp = () => {
        window.open(`https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%20need%20a%20${encodeURIComponent(serviceName.toLowerCase())}%20in%20${encodeURIComponent(locationName)}.%20Can%20you%20help%3F`, '_blank');
    };

    return (
        <>
            <Header />
            
            <section className="hero" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1>{serviceName} in {locationName}</h1>
                        <p>Professional {serviceName.toLowerCase()} services for businesses in {locationName}, {province}. Starting from R1,499. Free demo available.</p>
                        <div className="hero-buttons" style={{ justifyContent: 'center' }}>
                            <button className="btn btn-primary" onClick={openWhatsApp}>Get Free Quote</button>
                            <a href="/#portfolio" className="btn btn-orange">View My Work</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas Served */}
            <section style={{ padding: '40px 0', background: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Areas I Serve in {locationName}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', maxWidth: '800px', margin: '0 auto' }}>
                        {areas.map((area, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <i className="fas fa-check-circle" style={{ color: '#10b981', fontSize: '0.8rem' }}></i>
                                <span>{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center' }}>Affordable {serviceName} Packages</h2>
                    <p style={{ textAlign: 'center', maxWidth: '600px', margin: '20px auto' }}>Choose the perfect plan for your business in {locationName}</p>
                    
                    <div className="pricing-grid" style={{ marginTop: '40px' }}>
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

            {/* Why Choose Me */}
            <section style={{ padding: '40px 0', background: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center' }}>Why Choose Me as Your {serviceName} in {locationName}?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            <i className="fas fa-rocket" style={{ fontSize: '2rem', color: '#6366f1', marginBottom: '15px' }}></i>
                            <h3>Fast Delivery</h3>
                            <p>Most websites completed within 7-14 days</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            <i className="fas fa-tag" style={{ fontSize: '2rem', color: '#6366f1', marginBottom: '15px' }}></i>
                            <h3>Affordable Pricing</h3>
                            <p>Quality work at prices you can afford</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            <i className="fas fa-headset" style={{ fontSize: '2rem', color: '#6366f1', marginBottom: '15px' }}></i>
                            <h3>24/7 Support</h3>
                            <p>Ongoing maintenance and support</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '20px' }}>
                            <i className="fas fa-mobile-alt" style={{ fontSize: '2rem', color: '#6366f1', marginBottom: '15px' }}></i>
                            <h3>Mobile Friendly</h3>
                            <p>Websites that look great on all devices</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section for Local SEO */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
                    <div style={{ maxWidth: '800px', margin: '40px auto' }}>
                        <div style={{ marginBottom: '25px' }}>
                            <h3>How much does {serviceName.toLowerCase()} cost in {locationName}?</h3>
                            <p>My {serviceName.toLowerCase()} packages start from R1,499 for a basic website, R2,499 for a standard website, and R4,999 for a premium website. All packages include hosting, maintenance, and support for R200 per month.</p>
                        </div>
                        <div style={{ marginBottom: '25px' }}>
                            <h3>Do you serve clients outside {locationName}?</h3>
                            <p>Yes! I serve clients nationwide across South Africa including Cape Town, Johannesburg, Durban, Pretoria, and all major cities. I'm based in Amanzimtoti but work with clients remotely across the country.</p>
                        </div>
                        <div style={{ marginBottom: '25px' }}>
                            <h3>How long does it take to build a website?</h3>
                            <p>Most websites are completed within 7-14 days depending on the package and complexity of the project.</p>
                        </div>
                        <div style={{ marginBottom: '25px' }}>
                            <h3>Do you offer a free demo?</h3>
                            <p>Yes! I offer a free demo preview before you pay, so you can see exactly how your website will look.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '60px 0', textAlign: 'center', background: '#f8fafc' }}>
                <div className="container">
                    <h2>Ready for a Website That Brings Clients?</h2>
                    <p style={{ marginBottom: '30px' }}>Contact me today for a free quote. Serving {locationName} and all of South Africa.</p>
                    <button className="btn btn-whatsapp" onClick={openWhatsApp} style={{ padding: '14px 40px', fontSize: '1.1rem' }}>
                        <i className="fab fa-whatsapp"></i> Get Your Free Quote
                    </button>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default DynamicServicePage;