import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';

const ServicesPage = () => {
  const openWhatsApp = (serviceName = 'general') => {
    const messages = {
      general: 'Hi Inkspire Digital Designs! I\'m interested in your services.',
      web: 'Hi! I\'m interested in your Web Design services for my South African business.',
      ecommerce: 'Hi! I\'m interested in your Ecommerce Development services.',
      graphic: 'Hi! I\'m interested in your Graphic Design services.',
      hosting: 'Hi! I\'m interested in your Website Hosting services.',
      seo: 'Hi! I\'m interested in your SEO services.',
      maintenance: 'Hi! I\'m interested in your Website Maintenance services.'
    };
    const message = messages[serviceName] || messages.general;
    window.open(`https://wa.me/27761050485?text=${encodeURIComponent(message)}`, '_blank');
  };

  const styles = {
    // Hero Section
    heroSection: {
      background: 'linear-gradient(135deg, #0B0F1A 0%, #0F172A 100%)',
      padding: '100px 0 80px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    heroH1: {
      fontSize: '52px',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, #FFFFFF, #F97316, #FB923C)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    heroP: {
      fontSize: '18px',
      color: '#94A3B8',
      maxWidth: '700px',
      margin: '0 auto 32px',
      lineHeight: '1.7',
    },
    heroStrong: { color: '#F97316' },
    heroButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    btnWhatsapp: {
      background: 'linear-gradient(135deg, #25D366, #128C7E)',
      color: 'white',
      border: 'none',
      padding: '14px 36px',
      fontSize: '1rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
    },
    btnOutline: {
      background: 'transparent',
      border: '2px solid #F97316',
      color: '#F97316',
      padding: '12px 32px',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
    // Trust Stats
    trustSection: {
      padding: '40px 0',
      background: 'rgba(15, 23, 42, 0.5)',
    },
    trustGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    trustCard: {
      padding: '20px',
      background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.6))',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(249, 115, 22, 0.2)',
    },
    trustValue: { fontSize: '32px', fontWeight: '700', color: '#FFFFFF' },
    trustLabel: { fontSize: '14px', color: '#94A3B8' },
    // Pricing Banner
    pricingBanner: {
      background: 'linear-gradient(135deg, #F97316, #EA580C)',
      padding: '16px 0',
      textAlign: 'center',
    },
    pricingBannerText: { margin: 0, fontSize: '1rem', color: 'white' },
    // Services Grid
    servicesSection: { padding: '80px 0', background: '#0F172A' },
    sectionHeader: { textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' },
    sectionHeaderH2: { fontSize: '38px', color: '#FFFFFF', marginBottom: '16px' },
    sectionHeaderP: { color: '#94A3B8', fontSize: '16px' },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    serviceCard: (isPopular) => ({
      background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      padding: '30px',
      border: isPopular ? '2px solid #F97316' : '1px solid rgba(249, 115, 22, 0.2)',
      transition: 'all 0.3s ease',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }),
    popularBadge: {
      position: 'absolute',
      top: '-12px',
      right: '20px',
      background: 'linear-gradient(135deg, #F97316, #EA580C)',
      color: 'white',
      padding: '6px 16px',
      borderRadius: '50px',
      fontSize: '12px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    offerBadge: {
      position: 'absolute',
      top: '-12px',
      left: '20px',
      background: '#10B981',
      color: 'white',
      padding: '6px 16px',
      borderRadius: '50px',
      fontSize: '11px',
      fontWeight: '600',
    },
    serviceIcon: {
      width: '70px',
      height: '70px',
      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(249, 115, 22, 0.1))',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
    },
    serviceIconText: { fontSize: '32px' },
    serviceTitle: { fontSize: '24px', color: '#FFFFFF', marginBottom: '12px' },
    servicePrice: { fontSize: '28px', fontWeight: '700', color: '#F97316', marginBottom: '16px' },
    originalPrice: { fontSize: '16px', color: '#64748B', textDecoration: 'line-through', marginLeft: '8px' },
    packageTags: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' },
    packageTag: {
      background: 'rgba(249, 115, 22, 0.1)',
      border: '1px solid rgba(249, 115, 22, 0.3)',
      padding: '4px 12px',
      borderRadius: '50px',
      fontSize: '11px',
      color: '#F97316',
    },
    serviceDesc: { color: '#94A3B8', lineHeight: '1.6', marginBottom: '20px', fontSize: '14px' },
    featuresTitle: { fontSize: '14px', color: '#FFFFFF', marginBottom: '12px' },
    featuresList: { listStyle: 'none', padding: 0, margin: '0 0 20px 0' },
    featureItem: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '13px', color: '#94A3B8' },
    checkIcon: { color: '#10B981' },
    btnService: {
      width: '100%',
      background: 'linear-gradient(135deg, #F97316, #EA580C)',
      color: 'white',
      border: 'none',
      padding: '14px',
      borderRadius: '12px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: 'auto',
    },
    // Local SEO Section
    localSeoSection: { padding: '80px 0', background: '#0B0F1A' },
    localSeoContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 0.5fr',
      gap: '50px',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    localBadge: {
      display: 'inline-block',
      background: 'rgba(249, 115, 22, 0.15)',
      border: '1px solid rgba(249, 115, 22, 0.3)',
      padding: '6px 16px',
      borderRadius: '50px',
      fontSize: '12px',
      color: '#F97316',
      marginBottom: '20px',
    },
    localSeoH2: { fontSize: '36px', color: '#FFFFFF', marginBottom: '20px' },
    localSeoP: { color: '#94A3B8', lineHeight: '1.7', marginBottom: '24px' },
    localCities: { display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '30px' },
    localCityItem: { display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontSize: '14px' },
    btnLocal: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'transparent',
      border: '1px solid #F97316',
      color: '#F97316',
      padding: '12px 28px',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    localStats: { display: 'flex', gap: '30px', justifyContent: 'center' },
    statCircle: {
      textAlign: 'center',
      padding: '30px',
      background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.6))',
      borderRadius: '50%',
      width: '180px',
      height: '180px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(249, 115, 22, 0.2)',
    },
    statCircleH3: { fontSize: '28px', color: '#FFFFFF', marginBottom: '4px' },
    statCircleP: { fontSize: '12px', color: '#94A3B8' },
    // Features Grid
    featuresSection: { padding: '80px 0', background: '#0F172A' },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    featureCard: {
      background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.6))',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '30px',
      textAlign: 'center',
      border: '1px solid rgba(249, 115, 22, 0.2)',
    },
    featureIcon: { fontSize: '40px', marginBottom: '16px' },
    featureTitle: { fontSize: '20px', color: '#FFFFFF', marginBottom: '12px' },
    featureDesc: { color: '#94A3B8', lineHeight: '1.6', fontSize: '14px' },
    // FAQ Section
    faqSection: { padding: '80px 0', background: '#0B0F1A' },
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    faqItem: {
      background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid rgba(249, 115, 22, 0.2)',
    },
    faqQuestion: { display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' },
    faqIcon: { fontSize: '24px' },
    faqQuestionText: { fontSize: '18px', color: '#F97316', margin: 0, lineHeight: '1.4' },
    faqAnswer: { color: '#94A3B8', lineHeight: '1.6', fontSize: '14px', marginLeft: '36px' },
    // Final CTA
    finalCta: {
      padding: '80px 0',
      background: 'linear-gradient(135deg, #0F172A 0%, #0B0F1A 100%)',
      textAlign: 'center',
    },
    ctaContent: { maxWidth: '700px', margin: '0 auto' },
    ctaH2: { fontSize: '40px', color: '#FFFFFF', marginBottom: '16px' },
    ctaP: { fontSize: '18px', color: '#94A3B8', marginBottom: '32px' },
    ctaButtons: { display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' },
    ctaTrust: { fontSize: '13px', color: '#64748B' },
  };

  const services = [
    {
      id: 'web',
      title: 'Web Design',
      price: 'From R1,499',
      originalPrice: 'R2,999',
      description: 'Professional, responsive websites that convert visitors into customers.',
      features: ['1–3 Pages (Basic) or 4–6 Pages (Standard)', 'Fully responsive & mobile-friendly', 'SEO-optimized structure', 'WhatsApp button integration', 'Free demo preview', '3 months free hosting'],
      popular: true,
      packages: [{ name: 'Basic', price: 'R1,499' }, { name: 'Standard', price: 'R2,499' }, { name: 'Premium', price: 'R4,999' }],
      icon: '💻'
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce',
      price: 'From R6,999',
      originalPrice: 'R12,999',
      description: 'Launch your online store with secure payments and inventory tracking.',
      features: ['Full ecommerce website', 'Product catalog management', 'Secure payment gateway', 'Shopping cart', 'Order tracking', 'Free store demo'],
      popular: false,
      icon: '🛒'
    },
    {
      id: 'graphic',
      title: 'Graphic Design',
      price: 'From R350',
      originalPrice: 'R800',
      description: 'Stand out with professional branding, logos, and marketing materials.',
      features: ['Logo design', 'Business cards', 'Social media graphics', 'Flyers & brochures', 'Brand identity', 'Custom illustrations'],
      popular: false,
      icon: '🎨'
    },
    {
      id: 'hosting',
      title: 'Hosting',
      price: 'R149/month',
      originalPrice: 'R299/month',
      description: 'Fast, secure hosting optimized for South African websites.',
      features: ['99.9% uptime', 'Free SSL certificate', 'Daily backups', '24/7 monitoring', 'Fast local servers', 'Email hosting'],
      popular: false,
      specialOffer: '🎁 First 3 months FREE',
      icon: '🖥️'
    },
    {
      id: 'seo',
      title: 'SEO',
      price: 'From R999',
      originalPrice: 'R1,999',
      description: 'Get found on Google with our comprehensive SEO services.',
      features: ['Keyword research', 'On-page optimization', 'Meta tag optimization', 'Google Search Console', 'Local SEO', 'Monthly reports'],
      popular: false,
      icon: '📈'
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      price: 'From R499/month',
      originalPrice: 'R999/month',
      description: 'Keep your website secure, updated, and running smoothly.',
      features: ['Security updates', '24/7 monitoring', 'Bug fixes', 'Content updates', 'Performance optimization', 'Emergency support'],
      popular: false,
      icon: '🛡️'
    }
  ];

  const faqs = [
    { question: 'How much does web design cost in South Africa?', answer: 'Our web design packages start from R1,499 for Basic, R2,499 for Standard, R4,999 for Premium, and E-commerce from R6,999. All include 3 months free hosting.' },
    { question: 'Do you offer web design in Durban, Cape Town, and Johannesburg?', answer: 'Yes! We serve businesses across Durban, Cape Town, Johannesburg, and Pretoria with local SEO services for each city.' },
    { question: 'How long does it take to build a website?', answer: 'Basic websites take 5-7 days. Standard takes 7-10 days. E-commerce stores take 2-4 weeks. Free demo before payment.' },
    { question: 'Can I update the website myself?', answer: 'Yes! We build on user-friendly platforms and provide free training for easy updates without coding.' }
  ];

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Affordable Web Design, Ecommerce & Graphic Design Services in South Africa | Inkspire Digital Designs</title>
        <meta name="description" content="Professional web design, ecommerce development, graphic design, SEO, and hosting services for businesses across South Africa. Websites from R1,499 with free demo previews." />
        <link rel="canonical" href="https://inkspiredigitaldesigns.co.za/services" />
        <meta property="og:title" content="Affordable Web Design & Digital Services in South Africa" />
        <meta property="og:description" content="Web design from R1,499 | Graphic design from R350 | Hosting R149/month with first 3 months free." />
        <meta name="geo.region" content="ZA-KZN" />
        <meta name="geo.placename" content="Durban" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={styles.heroH1}>Affordable Web Design & Digital Services in South Africa</h1>
          <p style={styles.heroP}>We create professional websites, ecommerce stores, SEO strategies, and branding solutions for businesses in <strong style={styles.heroStrong}>Durban, Cape Town, Johannesburg, Pretoria</strong>, and across South Africa.</p>
          <div style={styles.heroButtons}>
            <button onClick={() => openWhatsApp('general')} style={styles.btnWhatsapp}>📱 Get Free Quote</button>
            <Link to="/portfolio" style={styles.btnOutline}>View Our Work →</Link>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <div style={styles.trustSection}>
        <div style={styles.trustGrid}>
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '30+', label: 'Happy Clients' },
            { value: '4.9', label: 'Client Rating', suffix: '★' },
            { value: '100%', label: 'Free Demo' }
          ].map((stat, i) => (
            <div key={i} style={styles.trustCard}>
              <div style={styles.trustValue}>{stat.value}{stat.suffix || ''}</div>
              <div style={styles.trustLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Banner */}
      <div style={styles.pricingBanner}>
        <p style={styles.pricingBannerText}>🎉 <strong>Special Offers:</strong> Web design from R1,499 | Graphic design from R350 | Hosting R149/month — <strong>First 3 months FREE!</strong> 🎉</p>
      </div>

      {/* Services Grid */}
      <div style={styles.servicesSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionHeaderH2}>Comprehensive Digital Services</h2>
          <p style={styles.sectionHeaderP}>Everything your South African business needs to succeed online</p>
        </div>
        <div style={styles.servicesGrid}>
          {services.map((service, idx) => (
            <div key={idx} style={styles.serviceCard(service.popular)}>
              {service.popular && <div style={styles.popularBadge}>⭐ MOST POPULAR</div>}
              {service.specialOffer && <div style={styles.offerBadge}>{service.specialOffer}</div>}
              <div style={styles.serviceIcon}><span style={styles.serviceIconText}>{service.icon}</span></div>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <div style={styles.servicePrice}>{service.price}<span style={styles.originalPrice}>{service.originalPrice}</span></div>
              {service.packages && (
                <div style={styles.packageTags}>
                  {service.packages.map((pkg, pIdx) => (
                    <span key={pIdx} style={styles.packageTag}>{pkg.name}: {pkg.price}</span>
                  ))}
                </div>
              )}
              <p style={styles.serviceDesc}>{service.description}</p>
              <h4 style={styles.featuresTitle}>What's Included:</h4>
              <ul style={styles.featuresList}>
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} style={styles.featureItem}>
                    <span style={styles.checkIcon}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button onClick={() => openWhatsApp(service.id)} style={styles.btnService}>📱 Get Started →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Local SEO Section */}
      <div style={styles.localSeoSection}>
        <div style={styles.localSeoContent}>
          <div>
            <span style={styles.localBadge}>🇿🇦 Serving South Africa</span>
            <h2 style={styles.localSeoH2}>Web Design Services Across South Africa</h2>
            <p style={styles.localSeoP}>We help businesses in <strong>Durban, Cape Town, Johannesburg, Pretoria, Sandton, Centurion</strong>, and across South Africa build professional websites that attract customers and grow online.</p>
            <div style={styles.localCities}>
              <span style={styles.localCityItem}>📱 Web Design Durban</span>
              <span style={styles.localCityItem}>📱 Web Design Cape Town</span>
              <span style={styles.localCityItem}>🛒 Ecommerce Johannesburg</span>
              <span style={styles.localCityItem}>💰 Affordable Web Design Pretoria</span>
            </div>
            <Link to="/contact" style={styles.btnLocal}>Get a Free Quote for Your City →</Link>
          </div>
          <div style={styles.localStats}>
            <div style={styles.statCircle}>
              <span style={{ fontSize: '40px' }}>🏙️</span>
              <h3 style={styles.statCircleH3}>4 Cities</h3>
              <p style={styles.statCircleP}>Major metros covered</p>
            </div>
            <div style={styles.statCircle}>
              <span style={{ fontSize: '40px' }}>🏆</span>
              <h3 style={styles.statCircleH3}>50+</h3>
              <p style={styles.statCircleP}>Websites launched</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={styles.featuresSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionHeaderH2}>Why South African Businesses Choose Us</h2>
          <p style={styles.sectionHeaderP}>We understand the local market and deliver results that matter</p>
        </div>
        <div style={styles.featuresGrid}>
          {[
            { icon: '⚡', title: 'Fast Delivery', desc: 'Most websites delivered within 5-7 days.' },
            { icon: '💰', title: 'Affordable Hosting', desc: 'R149/month with first 3 months free.' },
            { icon: '📱', title: 'Mobile-Friendly', desc: 'All websites work perfectly on all devices.' },
            { icon: '💬', title: 'Local Support', desc: 'WhatsApp support from real humans.' },
            { icon: '🎨', title: 'Free Demo Preview', desc: 'See your website before payment.' },
            { icon: '🔒', title: 'Secure & Fast', desc: 'SSL certificates and daily backups.' }
          ].map((feature, i) => (
            <div key={i} style={styles.featureCard}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div style={styles.faqSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionHeaderH2}>Frequently Asked Questions</h2>
          <p style={styles.sectionHeaderP}>Everything you need to know about our services</p>
        </div>
        <div style={styles.faqGrid}>
          {faqs.map((faq, i) => (
            <div key={i} style={styles.faqItem}>
              <div style={styles.faqQuestion}>
                <span style={styles.faqIcon}>❓</span>
                <h3 style={styles.faqQuestionText}>{faq.question}</h3>
              </div>
              <div style={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div style={styles.finalCta}>
        <div style={styles.ctaContent}>
          <span style={{ fontSize: '48px' }}>✨</span>
          <h2 style={styles.ctaH2}>Ready to Grow Your Business Online?</h2>
          <p style={styles.ctaP}>Get a free demo website before payment and see how your business can stand out online.</p>
          <div style={styles.ctaButtons}>
            <button onClick={() => openWhatsApp('general')} style={styles.btnWhatsapp}>💬 Chat on WhatsApp Now</button>
            <Link to="/contact" style={{ ...styles.btnOutline, padding: '14px 38px', fontSize: '18px' }}>Request a Callback</Link>
          </div>
          <p style={styles.ctaTrust}>📞 50% deposit to start | Balance on completion | No lock-in contracts</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicesPage;