import { useState } from 'react';
import toast from 'react-hot-toast';

const AddReferralModal = ({ onAdd, onClose }) => {
    const [formData, setFormData] = useState({
        referrerName: '',
        leadName: '',
        businessName: '',
        serviceType: 'Web Design Standard',
        projectValue: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.referrerName || !formData.leadName || !formData.projectValue) {
            toast.error('Please fill in required fields');
            return;
        }

        setLoading(true);
        const success = await onAdd(formData);
        setLoading(false);
        
        if (success) {
            onClose();
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }} onClick={onClose}>
            <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '20px',
                maxWidth: '500px',
                width: '90%',
                maxHeight: '90vh',
                overflow: 'auto'
            }} onClick={(e) => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3>Add New Referral</h3>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Referrer Name *</label>
                        <input type="text" value={formData.referrerName} onChange={(e) => setFormData({...formData, referrerName: e.target.value})} required />
                    </div>
                    <div className="form-group">
                        <label>Lead Name *</label>
                        <input type="text" value={formData.leadName} onChange={(e) => setFormData({...formData, leadName: e.target.value})} required />
                    </div>
                    <div className="form-group">
                        <label>Business Name</label>
                        <input type="text" value={formData.businessName} onChange={(e) => setFormData({...formData, businessName: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label>Service Type</label>
                        <select value={formData.serviceType} onChange={(e) => setFormData({...formData, serviceType: e.target.value})}>
                            <option value="Web Design Basic">Web Design Basic (R1,499)</option>
                            <option value="Web Design Standard">Web Design Standard (R2,499)</option>
                            <option value="Web Design Premium">Web Design Premium (R4,999)</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Logo Design">Logo Design</option>
                            <option value="Branding">Branding</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Project Value (R) *</label>
                        <input type="number" value={formData.projectValue} onChange={(e) => setFormData({...formData, projectValue: e.target.value})} required />
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                        <button type="submit" className="btn btn-primary" style={{ flex: 1 }} disabled={loading}>
                            {loading ? 'Adding...' : 'Add Referral'}
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={onClose} style={{ flex: 1, background: '#ef4444', color: 'white' }}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReferralModal;