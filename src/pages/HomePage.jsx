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
            <div className="top-banner">
                <div className="container">
                    <i className="fas fa-gift"></i> REFER A CLIENT AND EARN 10% COMMISSION 
                    <a href="#referral">Get your referral link <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
            
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