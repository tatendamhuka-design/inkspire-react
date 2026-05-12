const About = () => {
  // Inline styles object
  const styles = {
    section: {
      padding: '80px 0',
      background: '#0B0F1A',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
    },
    tag: {
      display: 'inline-block',
      fontSize: '14px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#F97316',
      marginBottom: '16px',
    },
    heading: {
      fontSize: '36px',
      lineHeight: '1.2',
      marginBottom: '20px',
      color: '#FFFFFF',
    },
    paragraph: {
      color: '#9CA3AF',
      lineHeight: '1.6',
      marginBottom: '16px',
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '60px',
      margin: '40px 0',
      padding: '30px 0',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    },
    stat: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#F97316',
      display: 'block',
    },
    statLabel: {
      fontSize: '14px',
      color: '#9CA3AF',
      marginTop: '8px',
      display: 'block',
    },
    featuresContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      margin: '32px 0',
      flexWrap: 'wrap',
    },
    badge: {
      background: 'rgba(249, 115, 22, 0.1)',
      border: '1px solid rgba(249, 115, 22, 0.3)',
      padding: '10px 20px',
      borderRadius: '40px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#F97316',
    },
    button: {
      display: 'inline-block',
      padding: '14px 28px',
      background: '#F97316',
      color: '#FFFFFF',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <span style={styles.tag}>Who We Are</span>
          <h2 style={styles.heading}>We Build High-Converting Websites That Grow South African Businesses</h2>
          
          <p style={styles.paragraph}>
            Inkspire Digital Designs is a Durban-based web design and graphic design agency helping small businesses, 
            startups, and entrepreneurs across South Africa build powerful online brands that attract customers 
            and generate real revenue.
          </p>
          
          <p style={styles.paragraph}>
            We don't just create websites — we design strategic digital assets built for growth, visibility, and conversions. 
            Every project is crafted with a balance of modern UI design, SEO structure, and user experience that turns 
            visitors into paying clients.
          </p>
          
          <div style={styles.statsContainer}>
            <div style={styles.stat}>
              <span style={styles.statNumber}>50+</span>
              <span style={styles.statLabel}>Projects Completed</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>4</span>
              <span style={styles.statLabel}>Major Cities Served</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>100%</span>
              <span style={styles.statLabel}>Client Satisfaction</span>
            </div>
          </div>
          
          <div style={styles.featuresContainer}>
            <span style={styles.badge}>✓ SEO-Optimized</span>
            <span style={styles.badge}>✓ Mobile-First Designs</span>
          </div>
          
          <a href="/portfolio" style={styles.button}>View Our Work →</a>
        </div>
      </div>
    </section>
  );
};

export default About;