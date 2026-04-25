import toast from 'react-hot-toast';

const ExportButton = ({ referrals }) => {
    const exportToCSV = () => {
        if (!referrals.length) {
            toast.error('No data to export');
            return;
        }

        // Define CSV headers
        const headers = ['Date', 'Referrer Name', 'Lead Name', 'Business Name', 'Service Type', 'Project Value', 'Commission', 'Status'];
        
        // Convert data to CSV rows
        const rows = referrals.map(ref => [
            new Date(ref.timestamp).toLocaleDateString(),
            ref.referrerName || '',
            ref.leadName || '',
            ref.businessName || '',
            ref.serviceType || '',
            (ref.projectValue || 0).toFixed(2),
            (ref.commission || (ref.projectValue * 0.1) || 0).toFixed(2),
            ref.status || 'Pending'
        ]);
        
        // Combine headers and rows
        const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
        
        // Download file
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `inkspire-referrals-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        
        toast.success('Export complete!');
    };

    return (
        <button className="btn btn-primary" onClick={exportToCSV} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <i className="fas fa-download"></i> Export CSV
        </button>
    );
};

export default ExportButton;