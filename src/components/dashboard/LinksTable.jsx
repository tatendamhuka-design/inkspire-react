const LinksTable = ({ links }) => {
    if (!links.length) {
        return (
            <div className="ref-table">
                <table>
                    <thead>
                        <tr><th>Date Generated</th><th>Referrer Name</th><th>Referral Link</th><th>Clicks</th><th>Leads</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                        <tr><td colSpan="6" style={{ textAlign: 'center', padding: '40px' }}>No links generated yet. Ask someone to generate a referral link!</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div className="ref-table">
            <table>
                <thead>
                    <tr><th>Date Generated</th><th>Referrer Name</th><th>Referral Link</th><th>Clicks</th><th>Leads</th><th>Status</th></tr>
                </thead>
                <tbody>
                    {links.map(link => (
                        <tr key={link.id}>
                            <td>{new Date(link.dateGenerated || link.date).toLocaleDateString()}</td>
                            <td><strong>{link.referrerName || link.name}</strong></td>
                            <td><code style={{ fontSize: '0.75rem', wordBreak: 'break-all' }}>{link.link}</code></td>
                            <td style={{ textAlign: 'center' }}>{link.clicks || 0}</td>
                            <td style={{ textAlign: 'center' }}>{link.leads || 0}</td>
                            <td><span className="status-badge status-paid">Active</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LinksTable;