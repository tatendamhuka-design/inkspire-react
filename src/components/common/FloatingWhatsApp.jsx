const FloatingWhatsApp = () => {
    const openWhatsApp = () => {
        window.open('https://wa.me/27761050485?text=Hi%20Inkspire%20Digital%20Designs!%20I%27m%20interested%20in%20your%20services.', '_blank');
    };

    return (
        <div className="whatsapp-float" onClick={openWhatsApp}>
            <i className="fab fa-whatsapp"></i>
        </div>
    );
};

export default FloatingWhatsApp;