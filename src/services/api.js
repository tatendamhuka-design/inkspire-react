import axios from 'axios';
import toast from 'react-hot-toast';

// Your Google Apps Script Web App URL
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

// ===== REFERRALS (Leads) =====
export const getReferrals = async () => {
    return await apiCall({ action: 'get' });
};

export const addReferral = async (data) => {
    return await apiCall({
        action: 'add',
        referrerName: data.referrerName,
        leadName: data.leadName,
        businessName: data.businessName,
        serviceType: data.serviceType,
        projectValue: data.projectValue
    });
};

export const updateReferralStatus = async (id, status) => {
    return await apiCall({
        action: 'update',
        id: id,
        status: status
    });
};

export const deleteReferral = async (id) => {
    return await apiCall({
        action: 'delete',
        id: id
    });
};

export const getStats = async () => {
    return await apiCall({ action: 'stats' });
};

// ===== REFERRAL LINKS (NEW) =====
export const getLinks = async () => {
    return await apiCall({ action: 'getLinks' });
};

export const addLink = async (referrerName, link) => {
    return await apiCall({
        action: 'addLink',
        referrerName: referrerName,
        link: link
    });
};

export const trackClick = async (referrerName) => {
    return await apiCall({
        action: 'trackClick',
        referrerName: referrerName
    });
};

export const trackLead = async (referrerName) => {
    return await apiCall({
        action: 'trackLead',
        referrerName: referrerName
    });
};