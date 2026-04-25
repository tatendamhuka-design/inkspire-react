import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            id: 1,
            date: "April 15, 2025",
            title: "10 Reasons Your Business Needs a Website in South Africa",
            excerpt: "In today's digital age, having a website isn't optional - it's essential for businesses nationwide. Here's why...",
            image: "/images/blog/Blog-1.jpg",
            slug: "10-reasons-business-needs-website-south-africa",
            readTime: "5 min read"
        },
        {
            id: 2,
            date: "April 10, 2025",
            title: "How to Choose the Right Color Scheme for Your Brand",
            excerpt: "Colors evoke emotions. Learn how to pick the perfect palette for your business that resonates with customers...",
            image: "/images/blog/Blog-2.jpg",
            slug: "how-to-choose-right-color-scheme-brand",
            readTime: "4 min read"
        },
        {
            id: 3,
            date: "April 5, 2025",
            title: "Website vs Social Media: Why You Need Both",
            excerpt: "Social media is great, but your website is your digital home. Here's why you need both for success...",
            image: "/images/blog/Blog-3.jpg",
            slug: "website-vs-social-media-why-need-both",
            readTime: "6 min read"
        }
    ];

    return (
        <section className="blog" id="blog">
            <div className="container">
                <div className="section-header">
                    <h2>Latest from the Blog</h2>
                    <p>Design tips, industry insights, and web design advice</p>
                </div>

                <div className="blog-grid">
                    {posts.map(post => (
                        <div className="blog-card" key={post.id}>
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} loading="lazy" />
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-date">{post.date}</span>
                                    <span className="blog-read-time">{post.readTime}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <Link to={`/blog/${post.slug}`} className="blog-link">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;