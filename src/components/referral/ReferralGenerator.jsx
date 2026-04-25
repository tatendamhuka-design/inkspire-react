import { useState } from 'react';
import toast from 'react-hot-toast';

const ReferralGenerator = () => {
    const [name, setName] = useState('');
    const [generated, setGenerated] = useState(false);
    const [link, setLink] = useState('');

    const generateLink = () => {
        if (!name.trim()) {
            toast.error('Please enter your name');
            return;
        }

        const encodedName = encodeURIComponent(name);
        const newLink = `${window.location.origin}/?ref=${encodedName}`;
        setLink(newLink);
        setGenerated(true);

        // Save to localStorage
        const saved = localStorage.getItem('inkspire_referral_links') || '[]';
        const links = JSON.parse(saved);
        if (!links.find(l => l.name === name)) {
            links.push({ name, link: newLink, date: new Date().toISOString(), clicks: 0, leads: 0 });
            localStorage.setItem('inkspire_referral_links', JSON.stringify(links));
        }
        
        toast.success('Link generated!');
    };

    const copyLink = () => {
        navigator.clipboard.writeText(link);
        toast.success('Link copied to clipboard!');
    };

    const shareWhatsApp = () => {
        const message = `Hey! 👋\n\nI just found an amazing web designer in South Africa. Check out Inkspire Digital Designs - they build beautiful websites at affordable prices.\n\nUse my referral link to get a free quote:\n\n${link}\n\nYou'll get a professional website, and I'll earn 10% commission. Win-win! 🎉`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="referral" id="referral">
            <div className="container">
                <div className="referral-content">
                    <h2>Refer & Earn 10% Commission</h2>
                    <p>Know someone who needs a website? Refer them and earn 10% commission on every completed project.</p>
                    
                    <div className="referral-highlight">10% Commission</div>
                    
                    {!generated ? (
                        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ width: '100%', padding: '14px', borderRadius: '50px', border: 'none', marginBottom: '15px' }}
                            />
                            <button className="btn btn-primary" onClick={generateLink} style={{ width: '100%' }}>
                                <i className="fas fa-link"></i> Get Your Link
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '15px', borderRadius: '12px', marginBottom: '20px', wordBreak: 'break-all' }}>
                                <p style={{ color: 'white', marginBottom: '5px' }}>Your referral link:</p>
                                <code style={{ color: 'white', fontSize: '0.85rem' }}>{link}</code>
                            </div>
                            <div className="referral-buttons">
                                <button className="btn btn-primary" onClick={copyLink}><i className="fas fa-copy"></i> Copy Link</button>
                                <button className="btn btn-whatsapp" onClick={shareWhatsApp}><i className="fab fa-whatsapp"></i> Share via WhatsApp</button>
                            </div>
                        </div>
                    )}
                    
                    <p style={{ marginTop: '15px', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                        <i className="fas fa-check-circle"></i> No limits · Paid within 7 days · Easy tracking
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReferralGenerator;