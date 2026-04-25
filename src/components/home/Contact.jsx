import { useState } from 'react';
import toast from 'react-hot-toast';
import GoogleReviewButton from '../common/GoogleReviewButton';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'web-design',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Create the WhatsApp message
        let message = `*NEW WEBSITE INQUIRY*%0A%0A`;
        message += `*Name:* ${formData.name}%0A`;
        message += `*Email:* ${formData.email}%0A`;
        message += `*Phone:* ${formData.phone || 'Not provided'}%0A`;
        message += `*Service:* ${getServiceLabel(formData.service)}%0A`;
        message += `*Message:* ${formData.message}%0A%0A`;
        
        // Check for referral cookie
        const referrer = getReferralCookie();
        if (referrer) {
            message += `*Referred by:* ${referrer}%0A`;
        }
        
        // Open WhatsApp with the pre-filled message
        const whatsappUrl = `https://wa.me/27761050485?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        toast.success('Redirecting to WhatsApp...');
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: 'web-design',
            message: ''
        });
        setLoading(false);
    };

    const getServiceLabel = (serviceValue) => {
        const services = {
            'web-design': 'Web Design',
            'graphic-design': 'Graphic Design',
            'logo-design': 'Logo Design',
            'branding': 'Branding',
            'notion': 'Notion Setup',
            'seo': 'SEO'
        };
        return services[serviceValue] || 'Web Design';
    };

    const getReferralCookie = () => {
        const name = "referrer=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    const openWhatsApp = (type) => {
        let message = '';
        if (type === 'chat') {
            message = "Hi Inkspire Digital Designs! I'm interested in your services.";
        } else if (type === 'demo') {
            message = "Hi Inkspire Digital Designs! I'd like to request a demo website. My business is about: ";
        }
        const whatsappUrl = `https://wa.me/27761050485?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Let's Work Together</h2>
                    <p>Ready to start your project? Get in touch today for a free quote! Serving clients across South Africa.</p>
                </div>

                <div className="contact-grid">
                    {/* Left Column - Contact Info */}
                    <div className="contact-info">
                        <h3>Get a Free Quote</h3>
                        <p>Whether you need a full website, a demo to see my work, or just have questions - I'm here to help. Let's create something amazing together!</p>
                        
                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="fab fa-whatsapp"></i>
                                <div>
                                    <h4>WhatsApp</h4>
                                    <p>+27 76 105 0485</p>
                                    <small>Typically replies within 1 hour</small>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="far fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>hello@inkspiredigitaldesigns.co.za</p>
                                    <small>Response within 24 hours</small>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>Location</h4>
                                    <p>Amanzimtoti, Durban</p>
                                    <small>Serving South Africa Nationwide</small>
                                </div>
                            </div>
                        </div>

                        <div className="contact-buttons">
                            <button className="btn btn-whatsapp" onClick={() => openWhatsApp('chat')}>
                                <i className="fab fa-whatsapp"></i> Chat Now
                            </button>
                            <button className="btn btn-demo" onClick={() => openWhatsApp('demo')}>
                                <i className="fab fa-whatsapp"></i> Request Demo
                            </button>
                        </div>
                        
                        {/* Google Review Button */}
                        <div style={{ marginTop: '30px', textAlign: 'center' }}>
                            <GoogleReviewButton />
                        </div>
                    </div>

                    {/* Right Column - Contact Form (Sends to WhatsApp) */}
                    <div className="contact-form">
                        <h3>Send a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Your Full Name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Email Address" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="tel" 
                                    name="phone"
                                    placeholder="WhatsApp Number (optional)" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <select 
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="web-design">Web Design</option>
                                    <option value="graphic-design">Graphic Design</option>
                                    <option value="logo-design">Logo Design</option>
                                    <option value="branding">Branding</option>
                                    <option value="notion">Notion Setup</option>
                                    <option value="seo">SEO</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea 
                                    name="message"
                                    placeholder="Tell me about your project... What do you need?" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="btn-whatsapp-green" 
                                disabled={loading}
                            >
                                <i className="fab fa-whatsapp"></i> 
                                {loading ? 'Sending...' : 'Send via WhatsApp'}
                            </button>
                        </form>
                        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.8rem', color: 'var(--gray)' }}>
                            <i className="fas fa-lock"></i> Your info is safe. We'll respond via WhatsApp.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;