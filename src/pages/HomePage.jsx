import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Pricing from '../components/home/Pricing';
import Portfolio from '../components/home/Portfolio';
import Marquee from '../components/home/Marquee';
import Testimonials from '../components/home/Testimonials';
import ReferralGenerator from '../components/referral/ReferralGenerator';
import Blog from '../components/home/Blog';
import Contact from '../components/home/Contact';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';

const HomePage = () => {
    return (
        <>
            <Helmet>
                {/* PRIMARY TITLE - Includes price + cities + service */}
                <title>Web Design from R1499 | Inkspire Digital - Cape Town, Johannesburg, Durban, Pretoria</title>
                
                {/* META DESCRIPTION - Compelling, keyword-rich, includes CTA */}
                <meta name="description" content="Get a professional, mobile-friendly website from just R1499. Serving small businesses in Cape Town, Johannesburg, Durban, and Pretoria. Free hosting included. SEO-ready. WhatsApp for a free quote today." />
                
                {/* KEYWORDS - All your target terms */}
                <meta name="keywords" content="web design South Africa, affordable web design Cape Town, web design Johannesburg, web design Durban, web design Pretoria, websites from R1499, small business website, graphic design South Africa, logo design, website hosting South Africa, web designer near me, ecommerce website South Africa" />
                
                {/* ROBOTS - Allow full indexing */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                
                {/* CANONICAL - Prevents duplicate content issues */}
                <link rel="canonical" href="https://inkspiredigitaldesigns.co.za/" />
                
                {/* LANGUAGE & GEO */}
                <meta name="language" content="English" />
                <meta name="geo.region" content="ZA" />
                <meta name="geo.placename" content="South Africa" />
                <meta name="author" content="Inkspire Digital Designs" />
                
                {/* REVISIT AFTER - Tells Google when to check back */}
                <meta name="revisit-after" content="7 days" />
                
                {/* OPEN GRAPH / FACEBOOK */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://inkspiredigitaldesigns.co.za/" />
                <meta property="og:title" content="Web Design from R1499 | Affordable Websites for South African Small Businesses" />
                <meta property="og:description" content="Get a professional, mobile-friendly website from just R1499. Free hosting included. Serving Cape Town, Johannesburg, Durban, and Pretoria." />
                <meta property="og:image" content="https://inkspiredigitaldesigns.co.za/images/og-image.jpg" />
                <meta property="og:image:alt" content="Inkspire Digital Designs - Web Design from R1499" />
                <meta property="og:site_name" content="Inkspire Digital Designs" />
                <meta property="og:locale" content="en_ZA" />
                
                {/* TWITTER CARD */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://inkspiredigitaldesigns.co.za/" />
                <meta name="twitter:title" content="Web Design from R1499 | Inkspire Digital Designs" />
                <meta name="twitter:description" content="Get a professional, mobile-friendly website from just R1499. Free hosting included. WhatsApp for a free quote." />
                <meta name="twitter:image" content="https://inkspiredigitaldesigns.co.za/images/twitter-image.jpg" />
                
                {/* VIEWPORT - Ensures mobile optimization */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            </Helmet>

            {/* SCHEMA MARKUP - Helps Google understand your business */}
            <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "ProfessionalService",
                  "name": "Inkspire Digital Designs",
                  "alternateName": "Inkspire Digital",
                  "url": "https://inkspiredigitaldesigns.co.za",
                  "logo": "https://inkspiredigitaldesigns.co.za/favicon.ico",
                  "image": "https://inkspiredigitaldesigns.co.za/images/hero.png",
                  "description": "Affordable web design and graphic design services for small businesses in South Africa. Websites from R1499 with free hosting included.",
                  "priceRange": "R1499 - R9999",
                  "telephone": "+27761050485",
                  "email": "hello@inkspiredigitaldesigns.co.za",
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Cape Town"
                    },
                    {
                      "@type": "City", 
                      "name": "Johannesburg"
                    },
                    {
                      "@type": "City",
                      "name": "Durban"
                    },
                    {
                      "@type": "City",
                      "name": "Pretoria"
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Amanzimtoti",
                    "addressRegion": "KwaZulu-Natal",
                    "addressCountry": "ZA"
                  },
                  "openingHours": "Mo-Fr 09:00-17:00",
                  "sameAs": [
                    "https://www.facebook.com/inkspiredigital",
                    "https://www.instagram.com/inkspiredigital"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Website Design Packages",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Basic Website Package"
                        },
                        "price": "1499",
                        "priceCurrency": "ZAR",
                        "description": "1 page website, mobile responsive, basic SEO, free hosting for 1 year"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Standard Website Package"
                        },
                        "price": "2499",
                        "priceCurrency": "ZAR",
                        "description": "Up to 5 pages, SEO optimization, fast delivery, free hosting"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Premium Website Package"
                        },
                        "price": "4999",
                        "priceCurrency": "ZAR",
                        "description": "Full website 10+ pages, custom design, advanced features, free hosting"
                      }
                    ]
                  }
                }
                `}
            </script>

            {/* BREADCRUMB LIST - Helps with search appearance */}
            <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://inkspiredigitaldesigns.co.za/"
                    }
                  ]
                }
                `}
            </script>

            {/* TOP BANNER - Unchanged */}
            <div className="top-banner">
                <div className="container">
                    <i className="fas fa-gift"></i> REFER A CLIENT AND EARN 10% COMMISSION 
                    <a href="#referral">Get your referral link <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
            
            {/* COMPONENTS - All your original components preserved */}
            <Header />
            <Hero />
            <Services />
            <Pricing />
            <Portfolio />
            <Marquee />
            <Testimonials />
            <ReferralGenerator />
            <Blog />
            <Contact />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default HomePage;