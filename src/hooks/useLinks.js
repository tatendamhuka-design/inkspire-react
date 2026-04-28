import { useState, useEffect } from 'react';
import { getLinks, addLink, trackClick, trackLead } from '../services/api';
import toast from 'react-hot-toast';

export const useLinks = () => {
    const [links, setLinks] = useState([]);
    const [linkStats, setLinkStats] = useState({
        totalLinks: 0,
        totalClicks: 0,
        totalLeads: 0,
        conversionRate: 0
    });
    const [loading, setLoading] = useState(true);

    const fetchLinks = async () => {
        setLoading(true);
        const result = await getLinks();
        if (result.success) {
            setLinks(result.data);
            calculateStats(result.data);
        } else {
            // Fallback to localStorage
            const saved = localStorage.getItem('inkspire_referral_links');
            if (saved) {
                setLinks(JSON.parse(saved));
                calculateStats(JSON.parse(saved));
            }
        }
        setLoading(false);
    };

    const calculateStats = (linksData) => {
        const totalLinks = linksData.length;
        const totalClicks = linksData.reduce((sum, l) => sum + (l.clicks || 0), 0);
        const totalLeads = linksData.reduce((sum, l) => sum + (l.leads || 0), 0);
        const conversionRate = totalClicks > 0 ? Math.round((totalLeads / totalClicks) * 100) : 0;
        
        setLinkStats({ totalLinks, totalClicks, totalLeads, conversionRate });
    };

    const generateNewLink = async (referrerName) => {
        const link = `${window.location.origin}/?ref=${encodeURIComponent(referrerName)}`;
        
        // Save to Google Sheets
        const result = await addLink(referrerName, link);
        
        if (result.success) {
            toast.success('Link saved to dashboard!');
        } else {
            // Fallback to localStorage
            const saved = localStorage.getItem('inkspire_referral_links') || '[]';
            const links = JSON.parse(saved);
            links.push({
                id: Date.now(),
                dateGenerated: new Date().toISOString(),
                referrerName: referrerName,
                link: link,
                clicks: 0,
                leads: 0,
                status: 'Active'
            });
            localStorage.setItem('inkspire_referral_links', JSON.stringify(links));
            toast.success('Link saved locally!');
        }
        
        fetchLinks();
        return link;
    };

    const recordClick = async (referrerName) => {
        await trackClick(referrerName);
        fetchLinks();
    };

    const recordLead = async (referrerName) => {
        await trackLead(referrerName);
        fetchLinks();
    };

    useEffect(() => {
        fetchLinks();
    }, []);

    return {
        links,
        linkStats,
        loading,
        generateNewLink,
        recordClick,
        recordLead,
        refresh: fetchLinks
    };
};