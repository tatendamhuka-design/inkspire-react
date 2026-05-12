import { motion } from 'framer-motion';
import { 
  Code, 
  ShoppingCart, 
  Palette, 
  Layout,
  Smartphone,
  Search,
  Server,
  MessageCircle,
  Gauge,
  Headphones,
  CreditCard,
  Package,
  Shield,
  Truck,
  Zap,
  Users,
  FileText,
  RefreshCw,
  TrendingUp,
  Briefcase
} from 'lucide-react';

const Services = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = (service) => {
    const messages = {
      web: "Hi! I'm interested in Web Design services. Can you help me build a website?",
      ecommerce: "Hi! I'm interested in Ecommerce Website Development. Can you help me build an online store?",
      graphic: "Hi! I'm interested in Graphic Design & Branding services. Can you help me with logo design?",
      notion: "Hi! I'm interested in Notion Setup & Automation. Can you help me organize my business?"
    };
    window.open(`https://wa.me/27761050485?text=${encodeURIComponent(messages[service])}`, '_blank');
  };

  const services = [
    {
      id: 'web',
      title: 'Web Design',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'We create modern, responsive, SEO-optimized websites for businesses across South Africa. Our websites are designed to load fast, rank on Google, and convert visitors into customers.',
      features: [
        { text: 'Mobile-Friendly Design', icon: Smartphone },
        { text: 'SEO Optimization', icon: Search },
        { text: 'Web Hosting Available', icon: Server },
        { text: 'WhatsApp Integration', icon: MessageCircle },
        { text: 'Fast Loading Speed', icon: Gauge },
        { text: 'Maintenance & Support', icon: Headphones }
      ],
      price: 'From R1,499 once-off',
      cta: 'Request Free Demo',
      keywords: ['web design South Africa', 'responsive websites', 'affordable business websites', 'SEO optimized websites']
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce Websites',
      icon: ShoppingCart,
      gradient: 'from-emerald-500 to-teal-500',
      description: 'We build professional ecommerce websites with secure payments, shopping carts, product management, and mobile-friendly online stores that help businesses sell online.',
      features: [
        { text: 'Online Store Setup', icon: Package },
        { text: 'Shopping Cart Integration', icon: ShoppingCart },
        { text: 'Secure Checkout', icon: Shield },
        { text: 'Product Uploads', icon: Package },
        { text: 'Mobile-Friendly Store', icon: Smartphone },
        { text: 'Payment Gateway Integration', icon: CreditCard }
      ],
      price: 'From R6,999 once-off',
      cta: 'Launch My Store',
      keywords: ['ecommerce website development', 'online store South Africa', 'ecommerce web design', 'online business website']
    },
    {
      id: 'graphic',
      title: 'Graphic Design & Branding',
      icon: Palette,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Professional logo design, branding, social media graphics, business cards, and marketing materials designed to help your business stand out and build trust.',
      features: [
        { text: 'Logo Design', icon: Palette },
        { text: 'Brand Identity', icon: Briefcase },
        { text: 'Social Media Graphics', icon: TrendingUp },
        { text: 'Business Cards', icon: CreditCard },
        { text: 'Print Ready Files', icon: FileText },
        { text: 'Unlimited Revisions', icon: RefreshCw }
      ],
      price: 'From R350/project',
      cta: 'Start My Branding',
      keywords: ['graphic design South Africa', 'logo design services', 'branding services', 'business branding']
    },
    {
      id: 'notion',
      title: 'Notion Setup & Automation',
      icon: Layout,
      gradient: 'from-orange-500 to-red-500',
      description: 'Custom Notion dashboards and workflow automation solutions to help businesses organize projects, manage clients, and improve productivity.',
      features: [
        { text: 'Custom Dashboards', icon: Layout },
        { text: 'Workflow Automation', icon: Zap },
        { text: 'Team Collaboration', icon: Users },
        { text: 'Training Included', icon: Headphones }
      ],
      price: 'From R500/setup',
      cta: 'Improve My Workflow',
      keywords: ['Notion setup services', 'business automation', 'productivity systems', 'workflow automation']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="services-section" id="services">
      {/* Animated Background */}
      <div className="services-bg">
        <div className="services-glow services-glow-1" />
        <div className="services-glow services-glow-2" />
      </div>

      <div className="services-container">
        {/* Section Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="header-badge"
          >
            <Zap size={14} />
            <span>What We Offer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Our Professional Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Affordable web design, ecommerce development, SEO, branding, and digital solutions for businesses across South Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="trust-text"
          >
            <Truck size={14} />
            <span>Serving businesses in Durban, Cape Town, Johannesburg, Pretoria & nationwide.</span>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="services-grid"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="service-card"
              >
                {/* Card Glow Effect */}
                <div className="card-glow" />

                {/* Icon */}
                <div className={`service-icon ${service.gradient}`}>
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="service-title">{service.title}</h3>

                {/* Description */}
                <p className="service-description">{service.description}</p>

                {/* Features List */}
                <div className="features-grid">
                  {service.features.map((feature, fIdx) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div key={fIdx} className="feature-item">
                        <FeatureIcon size={14} />
                        <span>{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Price */}
                <div className="service-price">{service.price}</div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="service-btn"
                  onClick={() => openWhatsApp(service.id)}
                >
                  {service.cta}
                </motion.button>

                {/* SEO Keywords (hidden but present for SEO) */}
                <div className="seo-keywords" style={{ display: 'none' }}>
                  {service.keywords.join(', ')}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .services-section {
          position: relative;
          padding: 80px 24px;
          overflow: hidden;
          background: linear-gradient(180deg, #0f0f23 0%, #0a0a1a 100%);
        }

        /* Animated Background */
        .services-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .services-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 10s ease-in-out infinite;
        }

        .services-glow-1 {
          width: 400px;
          height: 400px;
          background: #8b5cf6;
          top: 10%;
          right: -100px;
          animation-delay: 0s;
        }

        .services-glow-2 {
          width: 350px;
          height: 350px;
          background: #06b6d4;
          bottom: 10%;
          left: -100px;
          animation-delay: 5s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }

        .services-container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(139,92,246,0.15);
          backdrop-filter: blur(8px);
          padding: 6px 14px;
          border-radius: 50px;
          border: 1px solid rgba(139,92,246,0.3);
          font-size: 12px;
          font-weight: 500;
          color: #a78bfa;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 18px;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto 20px;
          line-height: 1.6;
        }

        .trust-text {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16,185,129,0.1);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 13px;
          color: #10b981;
          border: 1px solid rgba(16,185,129,0.2);
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
        }

        /* Service Card */
        .service-card {
          position: relative;
          background: linear-gradient(135deg, rgba(31,41,55,0.8), rgba(17,24,39,0.8));
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 28px;
          border: 1px solid rgba(75,85,99,0.3);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .service-card:hover {
          border-color: rgba(139,92,246,0.4);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.3);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .service-card:hover .card-glow {
          opacity: 1;
          box-shadow: inset 0 0 30px rgba(139,92,246,0.15), 0 0 20px rgba(139,92,246,0.1);
        }

        /* Service Icon */
        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border: 1px solid rgba(139,92,246,0.2);
        }

        .service-icon svg {
          color: white;
        }

        /* Service Title */
        .service-title {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        /* Service Description */
        .service-description {
          font-size: 14px;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 20px;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #cbd5e1;
          background: rgba(0,0,0,0.2);
          padding: 6px 10px;
          border-radius: 10px;
        }

        .feature-item svg {
          color: #10b981;
          flex-shrink: 0;
        }

        /* Service Price */
        .service-price {
          font-size: 18px;
          font-weight: 700;
          color: #f59e0b;
          margin-bottom: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(75,85,99,0.3);
        }

        /* CTA Button */
        .service-btn {
          width: 100%;
          padding: 12px;
          background: rgba(139,92,246,0.15);
          border: 1px solid rgba(139,92,246,0.3);
          border-radius: 14px;
          color: #a78bfa;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .service-btn:hover {
          background: rgba(139,92,246,0.25);
          border-color: rgba(139,92,246,0.5);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .services-section {
            padding: 60px 16px;
          }

          .section-title {
            font-size: 28px;
          }

          .section-subtitle {
            font-size: 16px;
            padding: 0 10px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .service-card {
            padding: 20px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .service-title {
            font-size: 20px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;