import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDark ? (
                <i className="fas fa-sun" style={{ color: '#f59e0b' }}></i>
            ) : (
                <i className="fas fa-moon" style={{ color: '#6366f1' }}></i>
            )}
        </button>
    );
};

export default DarkModeToggle;