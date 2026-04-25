import { useParams, Link } from 'react-router-dom';  // ← ADDED Link import
import { useEffect } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/common/FloatingWhatsApp';
import { getPostBySlug } from './posts';

const BlogPost = () => {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (post) {
            document.title = `${post.title} | Inkspire Digital Designs Blog`;
        }
    }, [slug, post]);

    if (!post) {
        return (
            <>
                <Header />
                <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
                    <h1>Post Not Found</h1>
                    <p>Sorry, the blog post you're looking for doesn't exist.</p>
                    <Link to="/#blog" className="btn btn-primary">Back to Blog</Link>
                </div>
                <Footer />
                <FloatingWhatsApp />
            </>
        );
    }

    return (
        <>
            <Header />
            <article className="blog-post-page">
                <div className="container">
                    {/* Hero Section */}
                    <div className="blog-post-hero">
                        <div className="blog-post-meta">
                            <span className="post-date">{post.date}</span>
                            <span className="post-read-time">{post.readTime}</span>
                            <span className="post-category">{post.category}</span>
                        </div>
                        <h1>{post.title}</h1>
                        <div className="post-author">
                            <div className="author-avatar-placeholder">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="author-info">
                                <span className="author-name">Inkspire Digital Designs</span>
                                <span className="author-title">Web Designer & Developer</span>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="blog-post-image">
                        <img src={post.image} alt={post.title} />
                    </div>

                    {/* Content */}
                    <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                    {/* Share Section */}
                    <div className="blog-post-share">
                        <h4>Share this post</h4>
                        <div className="share-buttons">
                            <a href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="share-whatsapp">
                                <i className="fab fa-whatsapp"></i> WhatsApp
                            </a>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="share-facebook">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="share-twitter">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="share-linkedin">
                                <i className="fab fa-linkedin-in"></i> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Back to Blog Button */}
                    <div className="blog-post-back">
                        <Link to="/#blog" className="btn btn-primary">
                            ← Back to Blog
                        </Link>
                    </div>
                </div>
            </article>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default BlogPost;