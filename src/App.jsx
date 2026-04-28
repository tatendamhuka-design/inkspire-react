import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';  // ← ADD THIS
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import Login from './components/dashboard/Login';
import CapeTownPage from './pages/locations/CapeTownPage';
import JohannesburgPage from './pages/locations/JohannesburgPage';
import DurbanPage from './pages/locations/DurbanPage';
import PretoriaPage from './pages/locations/PretoriaPage';
import BlogPost from './pages/blog/BlogPost';
import './styles/globals.css';
import DynamicServicePage from './pages/DynamicServicePage';
import SEOPage from './pages/SEOPage';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('inkspire_admin_auth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <Router>
            <Toaster position="top-right" />
            <Analytics />  {/* ← ADD THIS LINE */}
            <Routes>
                <Route path="/:type?/:service?/:location?/:modifier?/:industry?/:question?/:year?/:price?/:landmark?/:urgency?" element={<SEOPage />} />
                <Route path="/:type?/:service?/:location?/:modifier?/:industry?/:question?" element={<SEOPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/:service/:location" element={<DynamicServicePage />} />
                <Route path="/cape-town-web-design" element={<CapeTownPage />} />
                <Route path="/johannesburg-web-design" element={<JohannesburgPage />} />
                <Route path="/pretoria-web-design" element={<PretoriaPage />} />
                <Route path="/durban-web-design" element={<DurbanPage />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
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
            </Routes>
        </Router>
    );
}

export default App;