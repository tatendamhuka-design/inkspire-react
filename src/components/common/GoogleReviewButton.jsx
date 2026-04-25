const GoogleReviewButton = ({ size = 'normal' }) => {
    // 🔴 REPLACE THIS WITH YOUR ACTUAL GOOGLE REVIEW LINK
    // Get it from: google.com/business → "Get more reviews"
    const googleReviewLink = "https://g.page/r/CUw4DCVJ-X01EBM/review";
    
    const openGoogleReview = () => {
        window.open(googleReviewLink, '_blank');
    };
    
    // Your current Google rating - update this when you get reviews
    const averageRating = 4.9;
    const reviewCount = 12;
    
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ color: '#fbbf24', fontSize: '0.9rem' }}>
                    {'★'.repeat(Math.floor(averageRating))}
                    {'☆'.repeat(5 - Math.floor(averageRating))}
                </span>
                <span style={{ fontWeight: 600 }}>{averageRating} ★</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>({reviewCount} reviews)</span>
            </div>
            <button 
                onClick={openGoogleReview} 
                className={`google-review-btn ${size === 'small' ? 'google-review-small' : ''}`}
                style={{
                    background: 'linear-gradient(135deg, #4285f4, #ea4335, #fbbc04, #34a853)',
                    backgroundSize: '200% 200%',
                    color: 'white',
                    border: 'none',
                    padding: size === 'small' ? '8px 16px' : '12px 24px',
                    borderRadius: '50px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.3s ease',
                    fontSize: size === 'small' ? '0.8rem' : '0.95rem',
                    animation: 'googleGradient 4s ease infinite'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(66, 133, 244, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                <i className="fab fa-google"></i> 
                {size === 'small' ? 'Rate us' : 'Write a Google Review'}
            </button>
        </div>
    );
};

export default GoogleReviewButton;