import { useState, useEffect } from 'react';
import { getLinks, getLinkStats, generateLink, trackClick } from '../services/api';
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
        } else {
            // Load from localStorage for demo
            const saved = localStorage.getItem('inkspire_referral_links');
            if (saved) {
                setLinks(JSON.parse(saved));
            } else {
                setLinks([]);
            }
        }
        setLoading(false);
    };

    const fetchLinkStats = async () => {
        const result = await getLinkStats();
        if (result.success) {
            setLinkStats(result.stats);
        } else {
            // Calculate from localStorage
            const saved = localStorage.getItem('inkspire_referral_links');
            if (saved) {
                const allLinks = JSON.parse(saved);
                const totalLinks = allLinks.length;
                const totalClicks = allLinks.reduce((sum, l) => sum + (l.clicks || 0), 0);
                const totalLeads = allLinks.reduce((sum, l) => sum + (l.leads || 0), 0);
                const conversionRate = totalClicks > 0 ? Math.round((totalLeads / totalClicks) * 100) : 0;
                setLinkStats({ totalLinks, totalClicks, totalLeads, conversionRate });
            }
        }
    };

    const generateNewLink = async (referrerName, referrerWhatsapp) => {
        const result = await generateLink(referrerName, referrerWhatsapp);
        if (result.success) {
            toast.success('Link generated!');
            fetchLinks();
            fetchLinkStats();
            return result.link;
        } else {
            // Fallback to localStorage
            const link = window.location.origin + `/?ref=${encodeURIComponent(referrerName)}`;
            const newLink = {
                id: Date.now(),
                referrerName,
                link,
                clicks: 0,
                leads: 0,
                dateGenerated: new Date().toISOString(),
                status: 'Active'
            };
            const saved = localStorage.getItem('inkspire_referral_links') || '[]';
            const links = JSON.parse(saved);
            links.push(newLink);
            localStorage.setItem('inkspire_referral_links', JSON.stringify(links));
            fetchLinks();
            fetchLinkStats();
            toast.success('Link saved locally!');
            return link;
        }
    };

    const recordClick = async (referrerName) => {
        const result = await trackClick(referrerName);
        if (!result.success) {
            // Update localStorage
            const saved = localStorage.getItem('inkspire_referral_links');
            if (saved) {
                const links = JSON.parse(saved);
                const link = links.find(l => l.referrerName === referrerName);
                if (link) {
                    link.clicks = (link.clicks || 0) + 1;
                    localStorage.setItem('inkspire_referral_links', JSON.stringify(links));
                }
            }
        }
        fetchLinkStats();
    };

    useEffect(() => {
        fetchLinks();
        fetchLinkStats();
    }, []);

    return {
        links,
        linkStats,
        loading,
        generateNewLink,
        recordClick,
        refresh: fetchLinks
    };
};