import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const DashboardLayout = ({ children, setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('inkspire_admin_auth');
        toast.success('Logged out');
        navigate('/admin');
    };

    return (
        <div style={{ minHeight: '100vh', background: '#f1f5f9' }}>
            {/* Dashboard Header */}
            <nav style={{ 
                background: 'white', 
                padding: '15px 24px', 
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '15px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <h2 style={{ color: '#6366f1' }}>📊 Inkspire Dashboard</h2>
                    <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Website</Link>
                </div>
                <button 
                    onClick={handleLogout}
                    style={{ 
                        background: '#ef4444', 
                        color: 'white', 
                        border: 'none', 
                        padding: '8px 20px', 
                        borderRadius: '50px',
                        cursor: 'pointer'
                    }}
                >
                    <i className="fas fa-sign-out-alt"></i> Logout
                </button>
            </nav>
            
            <div className="container" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;