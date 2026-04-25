const StatsCards = ({ referrals, links }) => {
    // Calculate stats from referrals
    const totalReferrals = referrals.length;
    const totalCommission = referrals.reduce((sum, r) => sum + (r.commission || 0), 0);
    const paidCommission = referrals.filter(r => r.status === 'Paid').reduce((sum, r) => sum + (r.commission || 0), 0);
    const pendingCommission = totalCommission - paidCommission;
    
    // Calculate link stats
    const totalLinks = links.length;
    const totalClicks = links.reduce((sum, l) => sum + (l.clicks || 0), 0);
    const totalLeads = links.reduce((sum, l) => sum + (l.leads || 0), 0);
    const conversionRate = totalClicks > 0 ? Math.round((totalLeads / totalClicks) * 100) : 0;

    return (
        <>
            {/* Row 1 - Referral Stats */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '20px',
                marginBottom: '25px'
            }}>
                <div style={{ background: 'white', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                    <i className="fas fa-users" style={{ fontSize: '2rem', color: '#6366f1', marginBottom: '10px' }}></i>
                    <h3 style={{ fontSize: '1.8rem', color: '#1e293b' }}>{totalReferrals}</h3>
                    <p style={{ color: '#64748b' }}>Total Referrals</p>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                    <i className="fas fa-rand" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '10px' }}></i>
                    <h3 style={{ fontSize: '1.8rem', color: '#1e293b' }}>R{totalCommission.toFixed(2)}</h3>
                    <p style={{ color: '#64748b' }}>Total Commission</p>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                    <i className="fas fa-check-circle" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '10px' }}></i>
                    <h3 style={{ fontSize: '1.8rem', color: '#1e293b' }}>R{paidCommission.toFixed(2)}</h3>
                    <p style={{ color: '#64748b' }}>Paid Commission</p>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                    <i className="fas fa-clock" style={{ fontSize: '2rem', color: '#f59e0b', marginBottom: '10px' }}></i>
                    <h3 style={{ fontSize: '1.8rem', color: '#1e293b' }}>R{pendingCommission.toFixed(2)}</h3>
                    <p style={{ color: '#64748b' }}>Pending Commission</p>
                </div>
            </div>
            
            {/* Row 2 - Link Tracking Stats */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '20px',
                marginBottom: '30px'
            }}>
                <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                    <i className="fas fa-link" style={{ fontSize: '2rem', color: '#6366f1', marginBottom: '10px' }}></i>
                    <h3 style={{ fontSize: '1.8rem', color: '#1e293b' }}>{totalLinks}</h3>
                    <p style={{ color: '#64748b' }}>Total Links Generated</p>
                </div>
                <div style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.1))', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                    <i className="fas fa-mouse-pointer" style={{ fontSize: '2rem', color: '#10b981', marginBottom: '10px' }}></i>
                    <h3 style={{ fontSize: '1.8rem', color: '#1e293b' }}>{totalClicks}</h3>
                    <p style={{ color: '#64748b' }}>Total Link Clicks</p>
                </div>
                <div style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(217,119,6,0.1))', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                    <i className="fas fa-chart-line" style={{ fontSize: '2rem', color: '#f59e0b', marginBottom: '10px' }}></i>
                    <h3 style={{ fontSize: '1.8rem', color: '#1e293b' }}>{conversionRate}%</h3>
                    <p style={{ color: '#64748b' }}>Conversion Rate</p>
                </div>
            </div>
        </>
    );
};

export default StatsCards;