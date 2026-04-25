const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Dlamini",
            business: "Dlamini Enterprises",
            location: "Johannesburg",
            service: "Web Design",
            text: "Inkspire Digital Designs transformed our online presence completely. The website is beautiful and has already brought us new customers nationwide. Highly recommended!",
            image: "/images/clients/Client-1.jpg"
        },
        {
            id: 2,
            name: "Sarah van der Merwe",
            business: "Cape Coffee Co.",
            location: "Cape Town",
            service: "E-commerce Website",
            text: "Professional, creative, and delivered exactly what I wanted. The demo helped me visualize my site before committing. Best web designer in South Africa!",
            image: "/images/clients/Client-2.jpg"
        },
        {
            id: 3,
            name: "Michael Omondi",
            business: "Omondi Marketing",
            location: "Durban",
            service: "Logo & Branding",
            text: "The referral program is a great bonus! I referred a friend and earned commission while they got a stunning website. Win-win for everyone in SA!",
            image: "/images/clients/Client-3.jpg"
        },
        {
            id: 4,
            name: "Thabo Nkosi",
            business: "Nkosi Plumbing",
            location: "Amanzimtoti",
            service: "Local Business Website",
            text: "Best web designer in Amanzimtoti! The attention to detail and customer support is outstanding. My website loads fast and looks great on mobile.",
            image: "/images/clients/Client-4.jpg"
        }
    ];

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>Client Testimonials</h2>
                    <p>What my clients say about working with me</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map(t => (
                        <div className="testimonial-card" key={t.id}>
                            <div className="rating-stars">
                                ★★★★★
                            </div>
                            <i className="fas fa-quote-left"></i>
                            <p>"{t.text}"</p>
                            <div className="testimonial-meta">
                                <span className="service-tag">{t.service}</span>
                                <span className="location-tag">{t.location}</span>
                            </div>
                            <div className="testimonial-author">
                                <img 
                                    src={t.image} 
                                    alt={t.name} 
                                    className="author-img" 
                                    onError={(e) => e.target.style.backgroundColor = '#6366f1'} 
                                />
                                <div className="author-info">
                                    <h4>{t.name}</h4>
                                    <p>{t.business}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;