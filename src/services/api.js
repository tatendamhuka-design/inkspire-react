import axios from 'axios';
import toast from 'react-hot-toast';

// Your Google Apps Script URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbznbAav7mG3scZ4RA8LO5iOKymNtAgwwQ7koidwZLt1/devhttps://script.google.com/macros/s/AKfycbyrv6dsj4DXucD3O4PbiemCMZP6OzCrJLxCSleSQUQJF9VteGGXM4tn9wQxCRCAReVl6g/exec';

// Use CORS proxy to fix the error
const PROXY = 'https://api.allorigins.win/raw?url=';
const API_URL = `${PROXY}${encodeURIComponent(SCRIPT_URL)}`;

const apiCall = async (params) => {
    try {
        const response = await axios.get(API_URL, { params });
        // Proxy wraps response as string, so parse it
        if (typeof response.data === 'string') {
            return JSON.parse(response.data);
        }
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        return { success: false, error: error.message };
    }
};

// ===== REFERRALS =====
export const getReferrals = async () => {
    return await apiCall({ action: 'get' });
};

export const getStats = async () => {
    return await apiCall({ action: 'stats' });
};

// ===== LINKS =====
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