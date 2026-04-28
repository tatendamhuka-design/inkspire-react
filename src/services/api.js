import axios from 'axios';
import toast from 'react-hot-toast';

// Your Google Apps Script URL
const API_URL = 'https://script.google.com/macros/s/AKfycbyh8zQOeCqRZ6jkRq5VZrf6nEmfhdC-6OV_O_vYMVX2pS_uOLwRbnWAw6qaASrMc5VCPw/exec';

// Helper function for API calls
const apiCall = async (params) => {
    try {
        const response = await axios.get(API_URL, { params });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        toast.error('Failed to connect to server');
        return { success: false, error: error.message };
    }
};

// Get all referrals
export const getReferrals = async () => {
    return await apiCall({ action: 'getReferrals' });
};

// Get all generated links
export const getLinks = async () => {
    return await apiCall({ action: 'getLinks' });
};

// Add a new referral
export const addReferral = async (data) => {
    return await apiCall({
        action: 'addReferral',
        referrerName: data.referrerName,
        leadName: data.leadName,
        businessName: data.businessName,
        serviceType: data.serviceType,
        projectValue: data.projectValue
    });
};

// Update referral status
export const updateReferralStatus = async (id, status) => {
    return await apiCall({
        action: 'updateReferralStatus',
        id: id,
        status: status
    });
};

// Delete referral
export const deleteReferral = async (id) => {
    return await apiCall({
        action: 'deleteReferral',
        id: id
    });
};

// Get statistics
export const getStats = async () => {
    return await apiCall({ action: 'getStats' });
};

// Generate a new referral link
export const generateLink = async (referrerName, referrerWhatsapp) => {
    return await apiCall({
        action: 'generateLink',
        referrerName: referrerName,
        referrerWhatsapp: referrerWhatsapp
    });
};

// Track link click
export const trackClick = async (referrerName) => {
    return await apiCall({
        action: 'trackClick',
        referrerName: referrerName
    });
};

// Get link statistics
export const getLinkStats = async () => {
    return await apiCall({ action: 'getLinkStats' });
};
