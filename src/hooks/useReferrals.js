import { useState, useEffect } from 'react';
import { getReferrals, addReferral, updateReferralStatus, deleteReferral, getStats } from '../services/api';
import toast from 'react-hot-toast';

export const useReferrals = () => {
    const [referrals, setReferrals] = useState([]);
    const [stats, setStats] = useState({
        totalReferrals: 0,
        totalCommission: 0,
        paidCommission: 0,
        pendingCommission: 0
    });
    const [loading, setLoading] = useState(true);

    const fetchReferrals = async () => {
        setLoading(true);
        const result = await getReferrals();
        if (result.success) {
            setReferrals(result.data);
        } else {
            // Demo data for testing
            setReferrals([
                { id: 1, timestamp: new Date().toISOString(), referrerName: 'Thabo', leadName: "John's Cafe", businessName: 'Coffee Shop', serviceType: 'Web Design Standard', projectValue: 2499, commission: 249.9, status: 'Pending' },
                { id: 2, timestamp: new Date().toISOString(), referrerName: 'Sarah', leadName: "Mike's Gym", businessName: 'Fitness', serviceType: 'Web Design Basic', projectValue: 1499, commission: 149.9, status: 'Paid' }
            ]);
        }
        setLoading(false);
    };

    const fetchStats = async () => {
        const result = await getStats();
        if (result.success) {
            setStats(result.stats);
        } else {
            setStats({
                totalReferrals: 2,
                totalCommission: 399.80,
                paidCommission: 149.90,
                pendingCommission: 249.90
            });
        }
    };

    const addNewReferral = async (data) => {
        const result = await addReferral(data);
        if (result.success) {
            toast.success('Referral added successfully!');
            fetchReferrals();
            fetchStats();
            return true;
        } else {
            toast.error(result.error || 'Failed to add referral');
            return false;
        }
    };

    const updateStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === 'Paid' ? 'Pending' : 'Paid';
        const result = await updateReferralStatus(id, newStatus);
        if (result.success) {
            toast.success(`Status updated to ${newStatus}`);
            fetchReferrals();
            fetchStats();
            return true;
        } else {
            toast.error('Failed to update status');
            return false;
        }
    };

    const removeReferral = async (id) => {
        if (window.confirm('Delete this referral?')) {
            const result = await deleteReferral(id);
            if (result.success) {
                toast.success('Referral deleted');
                fetchReferrals();
                fetchStats();
                return true;
            } else {
                toast.error('Failed to delete');
                return false;
            }
        }
        return false;
    };

    useEffect(() => {
        fetchReferrals();
        fetchStats();
    }, []);

    return {
        referrals,
        stats,
        loading,
        addNewReferral,
        updateStatus,
        removeReferral,
        refresh: fetchReferrals
    };
};