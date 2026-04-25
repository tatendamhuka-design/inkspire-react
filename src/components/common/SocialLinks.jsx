const SocialLinks = ({ variant = 'default', showLabels = false }) => {
    const socials = [
        {
            name: 'Facebook',
            icon: 'fab fa-facebook-f',
            url: 'https://www.facebook.com/profile.php?id=61579340009090',
            color: '#1877f2',
            username: '@inkspiredigitaldesigns'
        },
        {
            name: 'Instagram',
            icon: 'fab fa-instagram',
            url: 'https://www.instagram.com/inkspire0000/',
            color: '#e4405f',
            username: '@inkspire Digital Designs'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin-in',
            url: 'https://www.linkedin.com/company/inkspire-digital-designs',
            color: '#0077b5',
            username: 'Inkspire Digital Designs'
        },
        {
            name: 'Twitter',
            icon: 'fab fa-twitter',
            url: 'https://twitter.com/inkspiredigitaldesigns',
            color: '#1da1f2',
            username: '@inkspiredigitaldesigns'
        },
        {
            name: 'TikTok',
            icon: 'fab fa-tiktok',
            url: 'https://tiktok.com/@inkspiredigitaldesigns',
            color: '#000000',
            username: '@inkspiredigitaldesigns'
        }
    ];

    if (variant === 'buttons') {
        return (
            <div className="social-buttons">
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button"
                        style={{ '--social-color': social.color }}
                        aria-label={social.name}
                    >
                        <i className={social.icon}></i>
                        {showLabels && <span>{social.name}</span>}
                    </a>
                ))}
            </div>
        );
    }

    // Default: icon-only links
    return (
        <div className="social-links">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                >
                    <i className={social.icon}></i>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
