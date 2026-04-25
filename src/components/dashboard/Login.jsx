import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = ({ setIsAuthenticated }) => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Check password
        if (password === 'inkspire2025') {
            setIsAuthenticated(true);
            localStorage.setItem('inkspire_admin_auth', 'true');
            toast.success('Login successful!');
            navigate('/admin/dashboard');
        } else {
            toast.error('Incorrect password');
        }
        setLoading(false);
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
            <div style={{ 
                background: 'white', 
                padding: '40px', 
                borderRadius: '20px', 
                maxWidth: '400px', 
                width: '90%',
                textAlign: 'center',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
            }}>
                <i className="fas fa-lock" style={{ fontSize: '3rem', color: '#6366f1', marginBottom: '20px' }}></i>
                <h2 style={{ marginBottom: '10px' }}>Admin Login</h2>
                <p style={{ color: '#64748b', marginBottom: '30px' }}>Enter password to access dashboard</p>
                
                <form onSubmit={handleLogin}>
                    <input 
                        type="password" 
                        placeholder="Enter password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ 
                            width: '100%', 
                            padding: '14px', 
                            borderRadius: '10px', 
                            border: '1px solid #e2e8f0',
                            marginBottom: '20px',
                            fontSize: '1rem'
                        }}
                    />
                    <button 
                        type="submit" 
                        disabled={loading}
                        style={{ 
                            width: '100%', 
                            padding: '14px', 
                            background: '#6366f1', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '10px',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        {loading ? 'Logging in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;