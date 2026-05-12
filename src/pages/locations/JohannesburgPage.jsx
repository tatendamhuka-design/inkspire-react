import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, ShoppingCart, Layout, Sparkles, ArrowRight, Shield, Users, Headphones, Truck } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/common/FloatingWhatsApp';
import '../../styles/globals.css';  // 🆕 ADD THIS LINE

const JohannesburgPage = () => {
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does web design cost in Johannesburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our web design packages in Johannesburg start from R1,499 for a Basic 1-3 page website. Standard websites are R2,499 (4-6 pages), Premium is R4,999 (10+ pages), and E-commerce starts at R6,999. All include 3 months free hosting."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website in Johannesburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard website for a Johannesburg business typically takes 5-7 days from concept to launch. E-commerce websites take 2-3 weeks. We provide a free demo before payment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer website hosting for Johannesburg businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer reliable website hosting at R149/month, and your first 3 months are free with any website package. All hosting is optimized for speed and security."
        }
      },
      {
        "@type": "Question",
        "name": "Can you redesign my old website in Johannesburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We specialize in website redesigns for Johannesburg businesses. We'll modernize your old website, make it mobile-friendly, improve loading speeds, and optimize it for SEO."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build online stores for Johannesburg businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We build e-commerce websites for Johannesburg retailers, boutiques, and service providers. Our online stores include payment gateways, product management, and secure checkout."
        }
      }
    ]
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Inkspire Digital Designs",
    "alternateName": "Inkspire Digital",
    "url": "https://inkspiredigitaldesigns.co.za",
    "logo": "https://inkspiredigitaldesigns.co.za/favicon.ico",
    "image": "https://inkspiredigitaldesigns.co.za/images/hero.png",
    "description": "Affordable web design and graphic design services for businesses in Johannesburg, Sandton, Midrand, and across Gauteng. Websites from R1,499 with free hosting included.",
    "priceRange": "R1499 - R9999",
    "telephone": "+27761050485",
    "email": "hello@inkspiredigitaldesigns.co.za",
    "areaServed": [
      "Johannesburg",
      "Sandton",
      "Midrand",
      "Randburg",
      "Rosebank",
      "Fourways",
      "Bryanston",
      "Gauteng",
      "South Africa"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
      "https://www.facebook.com/inkspiredigital",
      "https://www.instagram.com/inkspiredigital"
    ]
  };

  const openWhatsApp = (packageName) => {
    const messages = {
      basic: "Hi! I'm interested in the BASIC Web Design Package (R1,499 once-off) for my Johannesburg business. What's included?",
      standard: "Hi! I'm interested in the STANDARD Web Design Package (R2,499 once-off) for my Johannesburg business. What's included?",
      premium: "Hi! I'm interested in the PREMIUM Web Design Package (R4,999 once-off) for my Johannesburg business. What's included?",
      ecommerce: "Hi! I'm interested in the ECOMMERCE Website Package (R6,999 once-off) for my Johannesburg business. What's included?"
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
    }
  ];

  // Inline Styles
  const styles = {
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 20px',
    },
    hero: {
      background: 'linear-gradient(135deg, #0B0F1A 0%, #0F172A 100%)',
      padding: '80px 0 60px',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: '48px',
      marginBottom: '20px',
      background: 'linear-gradient(90deg, #F97316, #FB923C)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    heroP: {
      fontSize: '18px',
      color: '#9CA3AF',
      maxWidth: '700px',
      margin: '0 auto 30px',
      lineHeight: '1.6',
    },
    heroButtons: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    btnPrimary: {
      display: 'inline-block',
      padding: '14px 28px',
      background: '#F97316',
      color: '#FFFFFF',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    btnSecondary: {
      display: 'inline-block',
      padding: '14px 28px',
      background: 'transparent',
      border: '1px solid #F97316',
      color: '#F97316',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    section: {
      padding: '60px 0',
    },
    sectionDark: {
      padding: '60px 0',
      background: '#0F172A',
    },
    heading2: {
      fontSize: '36px',
      color: '#FFFFFF',
      marginBottom: '20px',
      textAlign: 'center',
    },
    heading3: {
      fontSize: '24px',
      color: '#F97316',
      marginBottom: '16px',
    },
    paragraph: {
      color: '#9CA3AF',
      lineHeight: '1.7',
      marginBottom: '20px',
      fontSize: '16px',
    },
    trustBadges: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      justifyContent: 'center',
      margin: '30px 0',
    },
    badge: {
      background: 'rgba(249, 115, 22, 0.1)',
      border: '1px solid rgba(249, 115, 22, 0.3)',
      padding: '8px 16px',
      borderRadius: '40px',
      fontSize: '14px',
      color: '#F97316',
    },
    pricingGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      marginTop: '40px',
      marginBottom: '48px',
    },
    pricingCard: {
      background: 'linear-gradient(135deg, rgba(31,41,55,0.8), rgba(17,24,39,0.8))',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      padding: '24px',
      border: '1px solid rgba(75,85,99,0.3)',
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    pricingCardPopular: {
      border: '2px solid rgba(139,92,246,0.5)',
      boxShadow: '0 0 30px rgba(139,92,246,0.2)',
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
      whiteSpace: 'nowrap',
    },
    iconWrapper: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg, #F97316, #EA580C)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    packageName: {
      fontSize: '20px',
      fontWeight: 700,
      color: 'white',
      marginBottom: '12px',
    },
    price: {
      fontSize: '32px',
      fontWeight: 700,
      color: 'white',
      marginBottom: '16px',
    },
    priceUnit: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#94a3b8',
      marginLeft: '4px',
    },
    description: {
      fontSize: '14px',
      color: '#94a3b8',
      lineHeight: 1.5,
      marginBottom: '20px',
    },
    divider: {
      height: '1px',
      background: 'linear-gradient(90deg, transparent, #4b5563, transparent)',
      margin: '16px 0',
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      marginBottom: '20px',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '13px',
      color: '#cbd5e1',
      marginBottom: '10px',
    },
    hostingNote: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '12px',
      color: '#94a3b8',
    },
    freeOffer: {
      color: '#10b981',
      fontSize: '11px',
      marginTop: '4px',
    },
    pricingButton: {
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
      transition: 'all 0.3s ease',
    },
    pricingButtonPopular: {
      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      boxShadow: '0 4px 15px rgba(139,92,246,0.3)',
    },
    trustSection: {
      textAlign: 'center',
      marginTop: '48px',
    },
    trustGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '24px',
      marginBottom: '24px',
    },
    trustItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      color: '#94a3b8',
    },
    footerNote: {
      fontSize: '12px',
      color: '#64748b',
    },
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '20px',
      marginTop: '40px',
    },
    faqItem: {
      background: '#111827',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      padding: '20px',
    },
    faqQuestion: {
      fontSize: '18px',
      color: '#F97316',
      marginBottom: '12px',
    },
    faqAnswer: {
      color: '#9CA3AF',
      lineHeight: '1.6',
    },
    linksGrid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      marginTop: '30px',
    },
    linkCard: {
      background: '#111827',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      padding: '16px 24px',
      color: '#FFFFFF',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    locationList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '12px',
      marginTop: '20px',
    },
    locationBadge: {
      background: 'rgba(249, 115, 22, 0.1)',
      border: '1px solid rgba(249, 115, 22, 0.2)',
      padding: '6px 14px',
      borderRadius: '8px',
      fontSize: '13px',
      color: '#F97316',
    },
  };

  return (
    <>
      <Helmet>
        <title>Web Design Johannesburg | Affordable Website Design in Sandton & Midrand</title>
        <meta name="description" content="Affordable web design in Johannesburg, Sandton, Midrand, Randburg and across Gauteng. Mobile-friendly business websites from R1499. SEO optimized, fast loading and built to generate leads." />
        <meta name="keywords" content="web design Johannesburg, website designer Johannesburg, affordable web design Johannesburg, web design Sandton, web design Midrand, Johannesburg web development, Johannesburg website company, web design Gauteng" />
        <link rel="canonical" href="https://inkspiredigitaldesigns.co.za/johannesburg-web-design" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inkspiredigitaldesigns.co.za/johannesburg-web-design" />
        <meta property="og:title" content="Web Design Johannesburg | Affordable Website Design in Gauteng" />
        <meta property="og:description" content="Professional web design services for Johannesburg businesses. Affordable packages starting from R1,499. Free hosting included." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Johannesburg" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
       <Header />           {/* 🆕 ADD THIS */}
       <FloatingWhatsApp />

      <main>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.container}>
            <h1 style={styles.heroH1}>Affordable Web Design in Johannesburg</h1>
            <p style={styles.heroP}>Get a professional, mobile-friendly website for your Johannesburg business starting from just R1,499. Free hosting included. SEO optimized. WhatsApp support.</p>
            <div style={styles.heroButtons}>
              <a href="https://wa.me/27761050485" style={styles.btnPrimary}>Get a Free Quote →</a>
              <Link to="/portfolio" style={styles.btnSecondary}>View Our Portfolio</Link>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.heading2}>Web Design Johannesburg | Websites That Grow Your Business</h2>
            
            <p style={styles.paragraph}>Inkspire Digital Designs is a leading <strong>web design agency in Johannesburg</strong>, specializing in creating high-quality, affordable websites for small businesses, startups, and entrepreneurs across <strong>Johannesburg, Sandton, Midrand, Randburg, Rosebank, Fourways, and Bryanston</strong>. We build websites that attract local customers and generate leads.</p>
            
            <h3 style={styles.heading3}>Why Johannesburg Businesses Need a Professional Website</h3>
            <p style={styles.paragraph}>Johannesburg is the economic hub of South Africa and a highly competitive market. Customers search online before making purchasing decisions. A well-designed, <strong>SEO-optimized website</strong> helps your Johannesburg business stand out from competitors, build trust, and convert visitors into paying clients.</p>
            
            <h3 style={styles.heading3}>Mobile-Responsive Websites for Johannesburg's Mobile-First Audience</h3>
            <p style={styles.paragraph}>Over 80% of South Africans browse the internet on their phones. That's why we build <strong>mobile-responsive websites</strong> that look stunning on smartphones, tablets, and desktops. Whether your customers are in <strong>Sandton, Midrand, Rosebank, or Fourways</strong>, they'll have a seamless experience on any device.</p>
            
            <h3 style={styles.heading3}>SEO Optimized Websites That Rank in Johannesburg</h3>
            <p style={styles.paragraph}>We build websites with <strong>local SEO best practices</strong> to help you rank for searches like <strong>"web design Johannesburg," "website designer Sandton,"</strong> and <strong>"affordable web design Midrand."</strong> Every website is optimized for Google to attract more local customers.</p>
            
            <h3 style={styles.heading3}>E-Commerce Websites for Johannesburg Retailers</h3>
            <p style={styles.paragraph}>Looking to sell online? We build <strong>e-commerce websites</strong> that make it easy for Johannesburg businesses to sell products, accept payments, and manage inventory. Whether you run a boutique in <strong>Sandton</strong>, a restaurant in <strong>Rosebank</strong>, or a service-based business in <strong>Fourways</strong>, we'll help you start selling online quickly.</p>
            
            <div style={styles.locationList}>
              <span style={styles.locationBadge}>📍 Johannesburg</span>
              <span style={styles.locationBadge}>📍 Sandton</span>
              <span style={styles.locationBadge}>📍 Midrand</span>
              <span style={styles.locationBadge}>📍 Randburg</span>
              <span style={styles.locationBadge}>📍 Rosebank</span>
              <span style={styles.locationBadge}>📍 Fourways</span>
              <span style={styles.locationBadge}>📍 Bryanston</span>
            </div>
            
            <div style={styles.trustBadges}>
              <span style={styles.badge}>✓ Free Demo Before Payment</span>
              <span style={styles.badge}>✓ 5-7 Day Delivery</span>
              <span style={styles.badge}>✓ Mobile Responsive</span>
              <span style={styles.badge}>✓ SEO Optimized</span>
              <span style={styles.badge}>✓ WhatsApp Support</span>
              <span style={styles.badge}>✓ Affordable Pricing</span>
            </div>
          </div>
        </section>

        {/* Pricing Section - Matching Your Component */}
        <section style={styles.sectionDark}>
          <div style={styles.container}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(249,115,22,0.15)', backdropFilter: 'blur(8px)', padding: '8px 20px', borderRadius: '50px', border: '1px solid rgba(249,115,22,0.3)', marginBottom: '24px' }}>
                <Sparkles size={16} color="#F97316" />
                <span style={{ fontSize: '13px', fontWeight: 500, color: '#F97316' }}>FREE DEMO WEBSITE BEFORE PAYMENT</span>
              </div>
              <h2 style={styles.heading2}>Affordable Website Packages for Johannesburg Businesses</h2>
              <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                Professional websites designed to grow your business online.
                Serving small businesses across Johannesburg, Sandton, Midrand & Randburg.
              </p>
            </div>

            <div style={styles.pricingGrid}>
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
                      ...styles.pricingCard,
                      ...(isPopular && styles.pricingCardPopular),
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
                        ...styles.pricingButton,
                        ...(isPopular && styles.pricingButtonPopular)
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
                <div style={styles.trustItem}><Shield size={16} color="#F97316" /> <span>50+ Websites Delivered</span></div>
                <div style={styles.trustItem}><Users size={16} color="#F97316" /> <span>30+ Happy Clients</span></div>
                <div style={styles.trustItem}><Headphones size={16} color="#F97316" /> <span>WhatsApp Support</span></div>
                <div style={styles.trustItem}><Truck size={16} color="#F97316" /> <span>5-7 Day Delivery</span></div>
              </div>
              <p style={styles.footerNote}>💳 50% deposit required to start | Balance on completion | No lock-in contracts</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.heading2}>Frequently Asked Questions About Web Design in Johannesburg</h2>
            <div style={styles.faqGrid}>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>How much does web design cost in Johannesburg?</h3>
                <p style={styles.faqAnswer}>Our web design packages in Johannesburg start from R1,499 for a Basic 1-3 page website. Standard websites are R2,499 (4-6 pages), Premium is R4,999 (10+ pages), and E-commerce starts at R6,999. All include 3 months free hosting.</p>
              </div>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>How long does it take to build a website in Johannesburg?</h3>
                <p style={styles.faqAnswer}>A standard website for a Johannesburg business typically takes 5-7 days from concept to launch. E-commerce websites take 2-3 weeks. We provide a free demo before payment.</p>
              </div>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>Do you offer website hosting for Johannesburg businesses?</h3>
                <p style={styles.faqAnswer}>Yes, we offer reliable website hosting at R149/month, and your first 3 months are free with any website package.</p>
              </div>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>Can you redesign my old website in Johannesburg?</h3>
                <p style={styles.faqAnswer}>Absolutely! We specialize in website redesigns for Johannesburg businesses. We'll modernize your old website, make it mobile-friendly, and optimize it for SEO.</p>
              </div>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>Do you build online stores for Johannesburg businesses?</h3>
                <p style={styles.faqAnswer}>Yes! We build e-commerce websites for Johannesburg retailers with payment gateways, product management, and secure checkout.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section style={styles.sectionDark}>
          <div style={styles.container}>
            <h2 style={styles.heading2}>Explore Our Web Design Services in Johannesburg</h2>
            <div style={styles.linksGrid}>
              <Link to="/portfolio" style={styles.linkCard}>📁 View Our Web Design Portfolio →</Link>
              <Link to="/services" style={styles.linkCard}>📦 See Our Website Packages →</Link>
              <Link to="/contact" style={styles.linkCard}>💬 Contact Our Johannesburg Web Designers →</Link>
              <Link to="/faq" style={styles.linkCard}>❓ Read Our FAQ →</Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section style={styles.hero}>
          <div style={styles.container}>
            <h2 style={styles.heading2}>Ready to Grow Your Johannesburg Business Online?</h2>
            <p style={styles.heroP}>Get a professional website today. WhatsApp us for a free quote.</p>
            <a href="https://wa.me/27761050485" style={styles.btnPrimary}>Start Your Project →</a>
          </div>
        </section>
      </main>
      <Footer />  
    </>
  );
};

export default JohannesburgPage;