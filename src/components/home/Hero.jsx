import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle, 
  Truck,
  Gift,
  Server,
  Zap
} from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%27m%20interested%20in%20your%20services.', '_blank');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="hero-section" id="home">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />
      </div>

      <div className="hero-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          {/* Trust Badge */}
          <motion.div variants={itemVariants} className="trust-badge">
            <CheckCircle size={14} />
            <span>Trusted by 30+ South African businesses</span>
          </motion.div>

          {/* Main H1 - ONLY ONE H1 */}
          <motion.h1 variants={itemVariants} className="hero-title">
            Affordable Web Design Services 
            <span className="gradient-text"> in South Africa</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="hero-subtitle">
            Professional websites, ecommerce stores, SEO, and branding solutions for businesses 
            in Cape Town, Johannesburg, Durban, Pretoria, and across South Africa.
          </motion.p>

          {/* Promo Badges */}
          <motion.div variants={itemVariants} className="promo-badges">
            <div className="promo-badge">
              <Gift size={14} />
              <span>Free Demo Before Payment</span>
            </div>
            <div className="promo-badge">
              <Server size={14} />
              <span>Hosting from R149/month</span>
            </div>
            <div className="promo-badge highlight">
              <Zap size={14} />
              <span>First 3 Months Hosting Free</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="hero-buttons">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              onClick={() => scrollToSection('pricing')}
            >
              Request Free Demo
              <ArrowRight size={18} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
              onClick={() => scrollToSection('pricing')}
            >
              View Packages
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-whatsapp"
              onClick={openWhatsApp}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </motion.button>
          </motion.div>

          {/* Trust Stats */}
          <motion.div variants={itemVariants} className="trust-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">Client Rating</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">
                <Truck size={16} />
                5–7 Days
              </div>
              <div className="stat-label">Delivery</div>
            </div>
          </motion.div>

          {/* SEO Text */}
          <motion.div variants={itemVariants} className="seo-text">
            <p>
              We create responsive SEO-optimized websites designed to help South African businesses grow online.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding: 80px 24px;
          overflow: hidden;
          background: linear-gradient(180deg, #0a0a1a 0%, #0f0f23 100%);
        }

        /* Animated Background */
        .hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 8s ease-in-out infinite;
        }

        .hero-glow-1 {
          width: 400px;
          height: 400px;
          background: #8b5cf6;
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .hero-glow-2 {
          width: 500px;
          height: 500px;
          background: #3b82f6;
          bottom: -150px;
          right: -150px;
          animation-delay: 2s;
        }

        .hero-glow-3 {
          width: 300px;
          height: 300px;
          background: #ec4899;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.1); }
        }

        .hero-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          text-align: center;
        }

        /* Trust Badge */
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(139,92,246,0.15);
          backdrop-filter: blur(8px);
          padding: 8px 16px;
          border-radius: 50px;
          border: 1px solid rgba(139,92,246,0.3);
          font-size: 13px;
          font-weight: 500;
          color: #a78bfa;
          margin-bottom: 24px;
        }

        /* Title */
        .hero-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: white;
        }

        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Subtitle */
        .hero-subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 32px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Promo Badges */
        .promo-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 36px;
        }

        .promo-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(31,41,55,0.6);
          backdrop-filter: blur(4px);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 500;
          color: #cbd5e1;
          border: 1px solid rgba(75,85,99,0.3);
        }

        .promo-badge.highlight {
          background: rgba(16,185,129,0.15);
          border-color: rgba(16,185,129,0.3);
          color: #10b981;
        }

        /* Buttons */
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(139,92,246,0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139,92,246,0.4);
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: rgba(31,41,55,0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(75,85,99,0.5);
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(55,65,81,0.9);
          transform: translateY(-2px);
          border-color: #8b5cf6;
        }

        .btn-whatsapp {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #25D366;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(37,211,102,0.3);
        }

        .btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37,211,102,0.4);
        }

        /* Trust Stats */
        .trust-stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-bottom: 32px;
          padding: 20px 0;
          border-top: 1px solid rgba(75,85,99,0.3);
          border-bottom: 1px solid rgba(75,85,99,0.3);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .stat-number {
          font-size: 24px;
          font-weight: 700;
          color: white;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: #94a3b8;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(75,85,99,0.5);
        }

        /* SEO Text */
        .seo-text {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-section {
            padding: 60px 16px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary, .btn-secondary, .btn-whatsapp {
            justify-content: center;
          }

          .trust-stats {
            gap: 16px;
          }

          .stat-number {
            font-size: 18px;
          }

          .stat-label {
            font-size: 10px;
          }

          .stat-divider {
            height: 30px;
          }

          .promo-badges {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;