import { useState, useEffect } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import StatsCards from '../components/dashboard/StatsCards';
import LinksTable from '../components/dashboard/LinksTable';
import ReferralsTable from '../components/dashboard/ReferralsTable';
import AddReferralModal from '../components/dashboard/AddReferralModal';
import ExportButton from '../components/dashboard/ExportButton';
import { useReferrals } from '../hooks/useReferrals';
import { useLinks } from '../hooks/useLinks';

const DashboardPage = ({ setIsAuthenticated }) => {
    const [showAddModal, setShowAddModal] = useState(false);
    const { referrals, loading: referralsLoading, addNewReferral, updateStatus, removeReferral, refresh: refreshReferrals } = useReferrals();
    const { links, loading: linksLoading, refresh: refreshLinks } = useLinks();

    useEffect(() => {
        refreshReferrals();
        refreshLinks();
    }, []);

    return (
        <DashboardLayout setIsAuthenticated={setIsAuthenticated}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
                <h1 style={{ fontSize: '1.8rem' }}>📊 Referral Dashboard</h1>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
                        <i className="fas fa-plus"></i> Add Referral
                    </button>
                    <ExportButton referrals={referrals} />
                </div>
            </div>
            
            <StatsCards referrals={referrals} links={links} />
            
            <h3 style={{ margin: '30px 0 15px' }}><i className="fas fa-link"></i> Generated Referral Links</h3>
            {linksLoading ? <p>Loading links...</p> : <LinksTable links={links} />}
            
            <h3 style={{ margin: '30px 0 15px' }}><i className="fas fa-users"></i> Referral Leads</h3>
            {referralsLoading ? <p>Loading referrals...</p> : <ReferralsTable referrals={referrals} onUpdateStatus={updateStatus} onDelete={removeReferral} />}
            
            {showAddModal && (
                <AddReferralModal onAdd={addNewReferral} onClose={() => setShowAddModal(false)} />
            )}
        </DashboardLayout>
    );
};

export default DashboardPage;