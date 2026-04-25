const Marquee = () => {
    const items = [
        { icon: "fas fa-rocket", text: "Fast Delivery" },
        { icon: "fas fa-tag", text: "Affordable Pricing" },
        { icon: "fas fa-palette", text: "Modern Design" },
        { icon: "fas fa-mobile-alt", text: "Mobile Friendly" },
        { icon: "fas fa-server", text: "Hosting Included" },
        { icon: "fas fa-headset", text: "24/7 Support" },
        { icon: "fas fa-shield-alt", text: "Reliable Service" },
        { icon: "fas fa-chart-line", text: "SEO Optimized" }
    ];

    return (
        <div className="marquee-section">
            <div className="marquee-wrapper">
                <div className="marquee">
                    <div className="marquee-content">
                        {[...items, ...items].map((item, index) => (
                            <div className="marquee-item" key={index}>
                                <i className={item.icon}></i> {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marquee;