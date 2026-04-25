import { useState } from 'react';

const Portfolio = () => {
    const [filter, setFilter] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Plants Store",
            slug: "plants-store",
            category: "ecommerce",
            description: "E-commerce website for indoor plant shop",
            fullDescription: "A complete e-commerce solution for a local plant nursery. Features include product catalog, shopping cart, secure checkout, and inventory management. The website helped the client increase online sales by 150% within three months.",
            image: "/images/portfolio/plants-store.jpg",
            liveDemo: "https://tatendamhuka-design.github.io/bloom-and-grow/",
            altText: "Plants store e-commerce website design showcase - online plant shop with shopping cart feature and product gallery",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            features: ["Shopping Cart", "Product Filters", "Customer Reviews", "Mobile Responsive", "Wishlist", "Order Tracking"],
            client: "Green Haven Plants",
            date: "2025",
            location: "Cape Town"
        },
        {
            id: 2,
            title: "Construction Company",
            slug: "construction",
            category: "corporate",
            description: "Corporate website for building and construction company",
            fullDescription: "Professional corporate website for a leading construction company. Includes project portfolio, service pages, client testimonials, and contact forms. The website showcases past projects and helps generate qualified leads.",
            image: "/images/portfolio/construction.jpg",
            liveDemo: "https://tatendamhuka-design.github.io/construction-website/",
            altText: "Construction company corporate website design - building contractor professional site with project gallery",
            technologies: ["WordPress", "PHP", "MySQL", "Bootstrap"],
            features: ["Project Gallery", "Service Pages", "Quote Request", "SEO Optimized", "Team Profiles", "Testimonials"],
            client: "BuildRight Construction",
            date: "2025",
            location: "Johannesburg"
        },
        {
            id: 3,
            title: "Preschool & Daycare",
            slug: "preschool",
            category: "education",
            description: "Bright, colorful website for preschool and aftercare center",
            fullDescription: "Warm and inviting website for a preschool and daycare center. Features include parent portal, photo gallery, enrollment forms, and activity calendar. Parents can easily register their children online.",
            image: "/images/portfolio/preschool.jpg",
            liveDemo: "https://tatendamhuka-design.github.io/preschool-website/",
            altText: "Preschool and daycare center website design - colorful educational site for children with parent portal",
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
            features: ["Parent Portal", "Event Calendar", "Photo Gallery", "Enrollment Forms", "Newsletter", "Staff Directory"],
            client: "Little Learners Academy",
            date: "2025",
            location: "Durban"
        },
        {
            id: 4,
            title: "Plumbing Services",
            slug: "plumber",
            category: "service",
            description: "Local plumber service website with emergency booking",
            fullDescription: "Professional service website for a plumbing company. Features include emergency booking, service area pages, pricing tables, and customer reviews. The website helped the client receive 200% more emergency calls.",
            image: "/images/portfolio/plumber.jpg",
            liveDemo: "https://tatendamhuka-design.github.io/plumbing-company-website/",
            altText: "Plumbing services website design - local plumber emergency booking system and service area maps",
            technologies: ["React", "Firebase", "Tailwind CSS"],
            features: ["Emergency Booking", "Service Areas", "Price Calculator", "Customer Portal", "Live Chat", "Review System"],
            client: "QuickFlow Plumbing",
            date: "2025",
            location: "Pretoria"
        },
        {
            id: 5,
            title: "Real Estate Agency",
            slug: "real-estate",
            category: "realestate",
            description: "Property listings website with advanced search filters",
            fullDescription: "Comprehensive real estate website with property listings, mortgage calculator, agent profiles, and virtual tour integration. The site makes it easy for buyers to find their dream home.",
            image: "/images/portfolio/real-estate.jpg",
            liveDemo: "https://tatendamhuka-design.github.io/real-estate-website/",
            altText: "Real estate agency property listings website - home search with advanced filters and mortgage calculator",
            technologies: ["Next.js", "PostgreSQL", "Mapbox", "Cloudinary"],
            features: ["Property Search", "Mortgage Calculator", "Virtual Tours", "Agent Directory", "Saved Searches", "Email Alerts"],
            client: "Prime Properties SA",
            date: "2025",
            location: "Sandton"
        },
        {
            id: 6,
            title: "Car Dealership",
            slug: "car-dealership",
            category: "automotive",
            description: "Vehicle inventory website with financing options",
            fullDescription: "Modern car dealership website featuring vehicle inventory, financing applications, trade-in valuations, and service booking. The site helped the dealership increase test drive requests by 75%.",
            image: "/images/portfolio/car-dealership.jpg",
            liveDemo: "https://tatendamhuka-design.github.io/car-dealership-website/",
            altText: "Car dealership auto sales website - vehicle inventory with financing calculator and trade-in valuation tool",
            technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
            features: ["Vehicle Inventory", "Finance Calculator", "Trade-in Form", "Service Booking", "Compare Vehicles", "Test Drive scheduling"],
            client: "AutoMax Motors",
            date: "2025",
            location: "Centurion"
        }
    ];

    const categories = [
        { value: "all", label: "All Projects" },
        { value: "ecommerce", label: "E-commerce" },
        { value: "corporate", label: "Corporate" },
        { value: "education", label: "Education" },
        { value: "service", label: "Service" },
        { value: "realestate", label: "Real Estate" },
        { value: "automotive", label: "Automotive" }
    ];

    const filteredProjects = filter === "all" 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header">
                    <h2>Our Work</h2>
                    <p>Check out our recent web design projects across various industries</p>
                </div>

                {/* Category Filter Buttons */}
                <div className="portfolio-filter">
                    {categories.map(cat => (
                        <button
                            key={cat.value}
                            className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
                            onClick={() => setFilter(cat.value)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="portfolio-grid">
                    {filteredProjects.map(project => (
                        <div className="portfolio-item" key={project.id} data-category={project.category}>
                            <div className="portfolio-image">
                                <img 
                                    src={project.image} 
                                    alt={project.altText}
                                    title={`${project.title} - Web Design by Inkspire Digital Designs`}
                                    loading="lazy"
                                    width="800"
                                    height="500"
                                />
                                <div className="portfolio-overlay">
                                    <button 
                                        className="live-demo-btn"
                                        onClick={() => window.open(project.liveDemo, '_blank')}
                                    >
                                        Live Demo →
                                    </button>
                                    <button 
                                        className="details-btn"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="portfolio-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="portfolio-tags">
                                    <span className="project-category">{project.category}</span>
                                    <span className="project-date">{project.date}</span>
                                    <span className="project-location">{project.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
                        <div className="modal-image">
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.altText}
                                loading="lazy"
                            />
                        </div>
                        <div className="modal-info">
                            <h2>{selectedProject.title}</h2>
                            <p className="client-meta">
                                <strong>Client:</strong> {selectedProject.client} | 
                                <strong> Location:</strong> {selectedProject.location} | 
                                <strong> Year:</strong> {selectedProject.date}
                            </p>
                            <p className="full-description">{selectedProject.fullDescription}</p>
                            
                            <div className="tech-stack">
                                <strong>Technologies Used:</strong>
                                <div className="tech-tags">
                                    {selectedProject.technologies.map((tech, idx) => (
                                        <span key={idx}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="features-list">
                                <strong>Key Features:</strong>
                                <ul>
                                    {selectedProject.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check-circle"></i> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <button 
                                className="btn btn-primary" 
                                onClick={() => window.open(selectedProject.liveDemo, '_blank')}
                                style={{ width: '100%', marginTop: '20px' }}
                            >
                                View Live Demo →
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;