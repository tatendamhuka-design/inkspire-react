import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';
const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const whatsappNumber = '27761050485';
  const email = 'hello@inkspiredigitaldesigns.co.za';
  const phone = '+27 76 105 0485';

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit form via WhatsApp
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, phone, service, message } = formData;
    
    const whatsappMessage = `*NEW CONTACT FORM SUBMISSION*%0A%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Phone:* ${phone || 'Not provided'}%0A
*Service:* ${service}%0A
*Message:* ${message}%0A%0A
*Sent from:* Inkspire Digital Contact Page`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost in South Africa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our web design packages start from R1,499 for a Basic 1-3 page website. Standard websites are R2,499 (4-6 pages), Premium is R4,999 (10+ pages), and E-commerce starts at R6,999. All include 3 months free hosting."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly do you respond to inquiries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We respond within 2 hours during business hours (Monday to Friday, 9am-5pm). WhatsApp inquiries typically get the fastest response."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with businesses outside Durban?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We serve clients across South Africa including Cape Town, Johannesburg, Pretoria, and nationwide. All our services are offered remotely with excellent results."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer website hosting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer reliable website hosting at R149/month, and your first 3 months are free with any website package. All hosting is optimized for speed and security."
        }
      },
      {
        "@type": "Question",
        "name": "Can I request a custom quote for my project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Contact us via WhatsApp or our contact form for a free, no-obligation custom quote tailored to your specific business needs."
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
    "image": "https://inkspiredigitaldesigns.co.za/logo.png",
    "url": "https://inkspiredigitaldesigns.co.za",
    "logo": "https://inkspiredigitaldesigns.co.za/favicon.ico",
    "description": "Professional web design, graphic design, website hosting and SEO services for businesses in Durban, Cape Town, Johannesburg, and Pretoria.",
    "telephone": "+27761050485",
    "email": "hello@inkspiredigitaldesigns.co.za",
    "priceRange": "R1499-R9999",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Durban",
      "addressRegion": "KwaZulu-Natal",
      "addressCountry": "ZA"
    },
    "areaServed": [
      "Durban",
      "Cape Town",
      "Johannesburg",
      "Pretoria",
      "South Africa"
    ],
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
      "https://www.facebook.com/inkspiredigital",
      "https://www.instagram.com/inkspiredigital"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Web Designers in Durban | Inkspire Digital</title>
        <meta name="description" content="Contact Inkspire Digital Designs for affordable web design, graphic design, website hosting and SEO services in Durban, Cape Town, Johannesburg and Pretoria. Get a free quote today." />
        <meta name="keywords" content="contact web designer Durban, web design South Africa, website designer Durban, graphic design Durban, affordable web design, website hosting South Africa, SEO services Durban" />
        <link rel="canonical" href="https://inkspiredigitaldesigns.co.za/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inkspiredigitaldesigns.co.za/contact" />
        <meta property="og:title" content="Contact Web Designers in Durban | Inkspire Digital" />
        <meta property="og:description" content="Contact Inkspire Digital Designs for affordable web design, graphic design, website hosting and SEO services across South Africa." />
        <meta property="og:image" content="https://inkspiredigitaldesigns.co.za/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Web Designers in Durban | Inkspire Digital" />
        <meta name="twitter:description" content="Contact Inkspire Digital Designs for affordable web design and graphic design services in South Africa." />
        <meta name="twitter:image" content="https://inkspiredigitaldesigns.co.za/og-image.jpg" />
        
        {/* Geo SEO Signals */}
        <meta name="geo.region" content="ZA-KZN" />
        <meta name="geo.placename" content="Durban" />
        <meta name="geo.position" content="-29.8587;31.0218" />
        <meta name="ICBM" content="-29.8587, 31.0218" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />
      <FloatingWhatsApp />

      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <h1>Contact Our South African Web Design Team</h1>
            <p>Get in touch with Inkspire Digital Designs for professional web design, graphic design, SEO and website hosting services across South Africa.</p>
          </div>
        </section>

        {/* Contact Grid Section */}
        <div className="contact-grid-section">
          <div className="container">
            <div className="contact-grid">
              
              {/* Contact Info Cards */}
              <div className="contact-info">
                <h2>Get In Touch</h2>
                
                {/* SEO Content Paragraph */}
                <p>Based in Durban, we provide <strong>affordable web design</strong> and <strong>graphic design services</strong> to businesses across <strong>Cape Town, Johannesburg, and Pretoria</strong>. Whether you need a new website, SEO optimization, or reliable <strong>website hosting</strong>, our <strong>Durban web designers</strong> are ready to help.</p>
                
                <div className="contact-methods">
                  <div className="contact-card">
                    <div className="contact-icon">📱</div>
                    <div>
                      <h3>WhatsApp</h3>
                      <p>{phone}</p>
                      <span className="contact-note">Fastest response</span>
                    </div>
                  </div>
                  
                  <div className="contact-card" onClick={() => window.location.href = `mailto:${email}`}>
                    <div className="contact-icon">✉️</div>
                    <div>
                      <h3>Email</h3>
                      <p>{email}</p>
                      <span className="contact-note">Within 24 hours</span>
                    </div>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-icon">📍</div>
                    <div>
                      <h3>Based In</h3>
                      <p>Durban, South Africa</p>
                      <span className="contact-note">Serving nationwide</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - WhatsApp Submission */}
              <div className="contact-form-wrapper">
                <h2>Send a Message</h2>
                <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Your Phone (optional)" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <select 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="web-design">Web Design Services</option>
                      <option value="graphic-design">Graphic Design Services</option>
                      <option value="hosting">Website Hosting</option>
                      <option value="notion">Notion Automation Setup</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <textarea 
                      name="message" 
                      rows="5" 
                      placeholder="Tell us about your project..." 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary">
                    Send via WhatsApp →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="faq-section-premium">
          <div className="container">
            <div className="section-header">
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about our web design and graphic design services</p>
            </div>
            <div className="faq-premium-grid">
              <div className="faq-premium-item">
                <div className="faq-icon">💻</div>
                <h3>How much does a website cost in South Africa?</h3>
                <p>Our web design packages start from R1,499 for a Basic 1-3 page website. Standard websites are R2,499 (4-6 pages), Premium is R4,999 (10+ pages), and E-commerce starts at R6,999. All include 3 months free hosting.</p>
              </div>
              <div className="faq-premium-item">
                <div className="faq-icon">⏱️</div>
                <h3>How quickly do you respond to inquiries?</h3>
                <p>We respond within 2 hours during business hours (Monday to Friday, 9am-5pm). WhatsApp inquiries typically get the fastest response.</p>
              </div>
              <div className="faq-premium-item">
                <div className="faq-icon">🌍</div>
                <h3>Do you work with businesses outside Durban?</h3>
                <p>Absolutely! We serve clients across South Africa including Cape Town, Johannesburg, Pretoria, and nationwide. All our services are offered remotely with excellent results.</p>
              </div>
              <div className="faq-premium-item">
                <div className="faq-icon">🚀</div>
                <h3>Do you offer website hosting?</h3>
                <p>Yes, we offer reliable website hosting at R149/month, and your first 3 months are free with any website package.</p>
              </div>
              <div className="faq-premium-item">
                <div className="faq-icon">📋</div>
                <h3>Can I request a custom quote for my project?</h3>
                <p>Yes! Contact us via WhatsApp or our contact form for a free, no-obligation custom quote tailored to your specific business needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <h2>Serving All Major South African Cities</h2>
            <div className="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108483.19849206922!2d30.95021985343176!3d-29.858494864981174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa6b0b6e2d8b%3A0x2d5f2b5b5b5b5b5b!2sDurban!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen="" 
                loading="lazy"
                title="Inkspire Digital Designs Service Areas Map"
              ></iframe>
            </div>
            <p className="map-note">Based in Durban, but we build websites for clients across South Africa including Cape Town, Johannesburg, and Pretoria.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;