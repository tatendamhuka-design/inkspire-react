import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async'; // 🆕 ADD THIS
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import Login from './components/dashboard/Login';
import CapeTownPage from './pages/locations/CapeTownPage';
import JohannesburgPage from './pages/locations/JohannesburgPage';
import DurbanPage from './pages/locations/DurbanPage';
import PretoriaPage from './pages/locations/PretoriaPage';
import BlogPost from './pages/blog/BlogPost';
import SEOPage from './pages/SEOPage';
import './styles/globals.css';
import ServicesPage from './pages/ServicesPage';
import NotionServicesPage from './pages/NotionServicesPage';

// 🆕 NEW PAGE IMPORTS
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('inkspire_admin_auth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <HelmetProvider> {/* 🆕 ADD THIS WRAPPER */}
            <Router>
                <Toaster position="top-right" />
                <Analytics />
                <Routes>
                    {/* EXACT MATCHES FIRST - These take priority */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/notion-setup-services" element={<NotionServicesPage />} />
                    
                    {/* 🆕 NEW ROUTES - Add them here (before city pages and catch-all) */}
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    
                    {/* City Pages */}
                    <Route path="/cape-town-web-design" element={<CapeTownPage />} />
                    <Route path="/johannesburg-web-design" element={<JohannesburgPage />} />
                    <Route path="/pretoria-web-design" element={<PretoriaPage />} />
                    <Route path="/durban-web-design" element={<DurbanPage />} />
                    
                    {/* Blog */}
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    
                    {/* Admin Dashboard */}
                    <Route path="/admin" element={
                        !isAuthenticated ? 
                        <Login setIsAuthenticated={setIsAuthenticated} /> : 
                        <Navigate to="/admin/dashboard" />
                    } />
                    <Route path="/admin/dashboard" element={
                        isAuthenticated ? 
                        <DashboardPage setIsAuthenticated={setIsAuthenticated} /> : 
                        <Navigate to="/admin" />
                    } />
                    
                    {/* SEO PAGE - CATCH ALL (must be LAST) */}
                    <Route path="/:type?/:service?/:location?/:modifier?/:industry?/:question?/:year?/:price?/:landmark?/:urgency?" element={<SEOPage />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;