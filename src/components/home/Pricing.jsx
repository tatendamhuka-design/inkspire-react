import { motion } from 'framer-motion';
import { 
  CheckCircle, Zap, ShoppingCart, Layout, Sparkles, ArrowRight,
  Shield, Users, Headphones, Truck
} from 'lucide-react';

const Pricing = () => {
  const openWhatsApp = (packageName) => {
    const messages = {
      basic: "Hi! I'm interested in the BASIC Web Design Package (R1,499 once-off). What's included?",
      standard: "Hi! I'm interested in the STANDARD Web Design Package (R2,499 once-off). What's included?",
      premium: "Hi! I'm interested in the PREMIUM Web Design Package (R4,999 once-off). What's included?",
      ecommerce: "Hi! I'm interested in the ECOMMERCE Website Package (R6,999 once-off). What's included?"
    };
    window.open(`https://wa.me/27761050485?text=${encodeURIComponent(messages[packageName])}`, '_blank');
  };

  const packages = [
    {
      id: 'basic',
      name: 'BASIC',
      price: 'R1,499',
      badge: null,
      description: 'Perfect for startups and small businesses needing a professional online presence.',
      features: [
        '1–3 Pages Website', 'Responsive Design', 'Basic SEO Setup', 'Mobile-Friendly',
        'WhatsApp Button Integration', 'Contact Page', 'Free Demo Preview', 'Free Consultation'
      ],
      icon: Layout,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'standard',
      name: 'STANDARD',
      price: 'R2,499',
      badge: 'MOST POPULAR',
      description: 'Best for growing businesses that need better visibility and more website content.',
      features: [
        '4–6 Pages Website', 'SEO Optimization', 'Faster Delivery', 'Mobile-Friendly',
        'WhatsApp Integration', 'Contact Form Page', 'Google Maps Integration',
        'Free Homepage Demo', 'Free Consultation'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      price: 'R4,999',
      badge: null,
      description: 'Ideal for businesses needing a custom professional website with advanced features.',
      features: [
        'Full Website (10+ Pages)', 'Custom Design', 'Advanced Features', 'Mobile-Friendly',
        'Advanced SEO Setup', 'Blog or Portfolio Section', 'Speed Optimization',
        'Custom Demo Design Before Payment', 'Priority Support'
      ],
      icon: Sparkles,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ecommerce',
      name: 'ECOMMERCE',
      price: 'R6,999',
      badge: null,
      description: 'Professional online store for businesses that want to sell products online.',
      features: [
        'Full Ecommerce Website', 'Product Uploads', 'Shopping Cart', 'Secure Checkout',
        'Payment Gateway Integration', 'Mobile-Friendly Store', 'WhatsApp Support Button',
        'SEO Optimization', 'Order Management', 'Customer Accounts', 'Contact Page',
        'Free Store Demo Preview', 'Training & Support'
      ],
      icon: ShoppingCart,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="pricing-section" id="pricing" style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.header}>
          <div style={styles.badge}>
            <Sparkles size={16} />
            <span>FREE DEMO WEBSITE BEFORE PAYMENT</span>
          </div>
          <h2 style={styles.title}>Affordable Website Packages</h2>
          <p style={styles.subtitle}>
            Professional websites designed to grow your business online.
            Serving small businesses across Cape Town, Johannesburg, Durban & Pretoria.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={styles.grid}>
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            const isPopular = pkg.badge === 'MOST POPULAR';
            
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                style={{
                  ...styles.card,
                  ...(isPopular && styles.cardPopular),
                  background: isPopular 
                    ? 'linear-gradient(135deg, rgba(31,41,55,0.95), rgba(17,24,39,0.95))'
                    : 'linear-gradient(135deg, rgba(31,41,55,0.8), rgba(17,24,39,0.8))'
                }}
              >
                {isPopular && (
                  <div style={styles.popularBadge}>
                    <Zap size={12} />
                    {pkg.badge}
                  </div>
                )}

                <div style={styles.iconWrapper}>
                  <Icon size={24} color="white" />
                </div>

                <h3 style={styles.packageName}>{pkg.name}</h3>
                <div style={styles.price}>
                  {pkg.price}<span style={styles.priceUnit}>once-off</span>
                </div>
                <p style={styles.description}>{pkg.description}</p>
                <div style={styles.divider} />

                <ul style={styles.featuresList}>
                  {pkg.features.map((feature, i) => (
                    <li key={i} style={styles.featureItem}>
                      <CheckCircle size={14} color="#10b981" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div style={styles.divider} />
                
                <div style={styles.hostingNote}>
                  <span>+ R149/month hosting</span>
                  <div style={styles.freeOffer}>🎁 First 3 months free</div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openWhatsApp(pkg.id)}
                  style={{
                    ...styles.button,
                    ...(isPopular && styles.buttonPopular)
                  }}
                >
                  {pkg.id === 'basic' && 'Start Your Website'}
                  {pkg.id === 'standard' && 'Grow My Business'}
                  {pkg.id === 'premium' && 'Get Premium Website'}
                  {pkg.id === 'ecommerce' && 'Launch My Store'}
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div style={styles.trustSection}>
          <div style={styles.trustGrid}>
            <div style={styles.trustItem}><Shield size={16} /> <span>50+ Websites Delivered</span></div>
            <div style={styles.trustItem}><Users size={16} /> <span>30+ Happy Clients</span></div>
            <div style={styles.trustItem}><Headphones size={16} /> <span>WhatsApp Support</span></div>
            <div style={styles.trustItem}><Truck size={16} /> <span>5-7 Day Delivery</span></div>
          </div>
          <p style={styles.footerNote}>💳 50% deposit required to start | Balance on completion | No lock-in contracts</p>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .pricing-section {
          background: linear-gradient(180deg, #0a0a1a 0%, #0f0f23 100%);
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
        }
        .pricing-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(99,102,241,0.15), transparent 50%);
          pointer-events: none;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    background: 'linear-gradient(180deg, #0a0a1a 0%, #0f0f23 100%)',
    padding: '80px 24px',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(139,92,246,0.15)',
    backdropFilter: 'blur(8px)',
    padding: '8px 20px',
    borderRadius: '50px',
    border: '1px solid rgba(139,92,246,0.3)',
    marginBottom: '24px',
    fontSize: '13px',
    fontWeight: 500,
    color: '#a78bfa'
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '16px'
  },
  subtitle: {
    fontSize: '18px',
    color: '#94a3b8',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '48px'
  },
  card: {
    background: 'linear-gradient(135deg, rgba(31,41,55,0.8), rgba(17,24,39,0.8))',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    padding: '24px',
    border: '1px solid rgba(75,85,99,0.3)',
    transition: 'all 0.3s ease',
    position: 'relative'
  },
  cardPopular: {
    border: '2px solid rgba(139,92,246,0.5)',
    boxShadow: '0 0 30px rgba(139,92,246,0.2)'
  },
  popularBadge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    padding: '6px 16px',
    borderRadius: '50px',
    fontSize: '11px',
    fontWeight: 700,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    whiteSpace: 'nowrap'
  },
  iconWrapper: {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  packageName: {
    fontSize: '20px',
    fontWeight: 700,
    color: 'white',
    marginBottom: '12px'
  },
  price: {
    fontSize: '32px',
    fontWeight: 700,
    color: 'white',
    marginBottom: '16px'
  },
  priceUnit: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#94a3b8',
    marginLeft: '4px'
  },
  description: {
    fontSize: '14px',
    color: '#94a3b8',
    lineHeight: 1.5,
    marginBottom: '20px'
  },
  divider: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #4b5563, transparent)',
    margin: '16px 0'
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginBottom: '20px'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '13px',
    color: '#cbd5e1',
    marginBottom: '10px'
  },
  hostingNote: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '12px',
    color: '#94a3b8'
  },
  freeOffer: {
    color: '#10b981',
    fontSize: '11px',
    marginTop: '4px'
  },
  button: {
    width: '100%',
    padding: '12px',
    background: '#374151',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease'
  },
  buttonPopular: {
    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    boxShadow: '0 4px 15px rgba(139,92,246,0.3)'
  },
  trustSection: {
    textAlign: 'center',
    marginTop: '48px'
  },
  trustGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '24px',
    marginBottom: '24px'
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#94a3b8'
  },
  footerNote: {
    fontSize: '12px',
    color: '#64748b'
  }
};

export default Pricing;