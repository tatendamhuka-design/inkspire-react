import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';
import Portfolio from '../components/home/Portfolio';

const PortfolioPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Portfolio | Web Design & Graphic Design Projects | Inkspire Digital Designs</title>
        <meta name="description" content="View our portfolio of web design and graphic design projects. See real work for real clients in Durban, Johannesburg, Cape Town, and Pretoria." />
        <meta name="keywords" content="web design portfolio, graphic design portfolio, website examples, South Africa web design, Durban web designer portfolio" />
        <link rel="canonical" href="https://inkspiredigitaldesigns.co.za/portfolio" />
        <meta property="og:title" content="Our Portfolio | Inkspire Digital Designs" />
        <meta property="og:description" content="View our portfolio of web design and graphic design projects across South Africa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inkspiredigitaldesigns.co.za/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />
      <FloatingWhatsApp />

      <main className="portfolio-page">
        <div className="portfolio-hero">
          <div className="container">
            <h1>Our Portfolio</h1>
            <p>Real websites built for real South African businesses</p>
          </div>
        </div>
        
        {/* Reuse your existing Portfolio component */}
        <Portfolio />
      </main>

      <Footer />
    </>
  );
};

export default PortfolioPage;