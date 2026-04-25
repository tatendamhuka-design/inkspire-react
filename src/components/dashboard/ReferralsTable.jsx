const ReferralsTable = ({ referrals, onUpdateStatus, onDelete }) => {
    if (!referrals.length) {
        return (
            <div className="ref-table">
                <table>
                    <thead>
                        <tr><th>Date</th><th>Referrer</th><th>Lead</th><th>Business</th><th>Service</th><th>Value</th><th>Commission</th><th>Status</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                        <tr><td colSpan="9" style={{ textAlign: 'center', padding: '40px' }}>No referrals yet. Add your first referral!</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div className="ref-table">
            <table>
                <thead>
                    <tr><th>Date</th><th>Referrer</th><th>Lead</th><th>Business</th><th>Service</th><th>Value</th><th>Commission</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {referrals.map(ref => (
                        <tr key={ref.id}>
                            <td>{new Date(ref.timestamp).toLocaleDateString()}</td>
                            <td>{ref.referrerName || '-'}</td>
                            <td>{ref.leadName || '-'}</td>
                            <td>{ref.businessName || '-'}</td>
                            <td>{ref.serviceType || '-'}</td>
                            <td>R{(ref.projectValue || 0).toFixed(2)}</td>
                            <td>R{(ref.commission || (ref.projectValue * 0.1) || 0).toFixed(2)}</td>
                            <td><span className={`status-badge status-${ref.status === 'Paid' ? 'paid' : 'pending'}`}>{ref.status || 'Pending'}</span></td>
                            <td className="action-btns">
                                <button className="btn-pay" onClick={() => onUpdateStatus(ref.id, ref.status)}>
                                    <i className={`fas fa-${ref.status === 'Paid' ? 'undo' : 'check'}`}></i>
                                </button>
                                <button className="btn-delete" onClick={() => onDelete(ref.id)}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReferralsTable;