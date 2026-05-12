import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "How much does a website cost in South Africa?",
      answer: "Our web design packages start at R1,499 once-off for a Basic 5-page website. Standard websites are R2,499, Premium is R4,999, and E-commerce starts at R6,999. All include 3 months free hosting."
    },
    {
      question: "Do you offer web design in Durban?",
      answer: "Yes! We are based in Durban and specialize in web design for Durban businesses. We also serve Johannesburg, Cape Town, Pretoria, and nationwide."
    },
    {
      question: "How long does it take to build a website?",
      answer: "A standard 5-page website typically takes 7-14 days from concept to launch. E-commerce websites take 2-3 weeks. We'll give you a clear timeline before starting."
    },
    {
      question: "Do you offer graphic design services?",
      answer: "Absolutely. We offer logo design, branding, business cards, social media graphics, and marketing materials starting from R350."
    },
    {
      question: "What is website hosting and do I need it?",
      answer: "Hosting is where your website lives online. We offer reliable hosting at R149/month, and your first 3 months are free with any website package."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Yes! All websites we build are fully responsive and mobile-friendly. They look great on phones, tablets, and desktop computers."
    },
    {
      question: "Do you help with SEO?",
      answer: "Yes, our websites are built with SEO best practices including meta tags, fast loading speeds, mobile responsiveness, and local SEO targeting your city."
    },
    {
      question: "Can I update my website myself?",
      answer: "Yes. We can build your site with an easy-to-use content management system (CMS) so you can update text, images, and blog posts yourself."
    },
    {
      question: "What is Notion automation?",
      answer: "We help businesses automate workflows using Notion – from project management to client onboarding, CRM, and content calendars. Pricing starts from R500."
    },
    {
      question: "How do I get started?",
      answer: "Simply click the WhatsApp button on our site, email us at hello@inkspiredigitaldesigns.co.za, or fill out our contact form. We'll respond within 2 hours."
    }
  ];

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Web Design & Graphic Design | Inkspire Digital Designs</title>
        <meta name="description" content="Answers to common questions about web design pricing, timelines, hosting, and graphic design services in Durban, Johannesburg, Cape Town, and Pretoria." />
        <meta name="keywords" content="web design FAQ, website cost South Africa, graphic design questions, Durban web designer FAQ" />
        <link rel="canonical" href="https://inkspiredigitaldesigns.co.za/faq" />
        <meta property="og:title" content="Frequently Asked Questions | Inkspire Digital Designs" />
        <meta property="og:description" content="Get answers to common questions about our web design and graphic design services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inkspiredigitaldesigns.co.za/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="faq-page">
        <section className="faq-hero">
          <div className="container">
            <h1>Frequently Asked Questions</h1>
            <p>Everything you need to know about our web design and graphic design services</p>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div className="faq-card" key={index}>
                  <div className="faq-question">
                    <span className="faq-icon">❓</span>
                    <h3>{faq.question}</h3>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-cta">
          <div className="container">
            <h2>Still have questions?</h2>
            <p>We're here to help. Contact us directly.</p>
            <div className="faq-cta-buttons">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="https://wa.me/27761050485" className="btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQPage;