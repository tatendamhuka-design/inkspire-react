import { Link } from 'react-router-dom';

const LocationStrip = () => {
    const locations = [
        { name: "Cape Town", path: "/cape-town-web-design", areas: "CBD, Sea Point, Camps Bay, Rondebosch, Claremont, Table View" },
        { name: "Johannesburg", path: "/johannesburg-web-design", areas: "Sandton, Midrand, Randburg, Soweto, Benoni, Roodepoort" },
        { name: "Pretoria", path: "/pretoria-web-design", areas: "Centurion, Hatfield, Menlyn, Brooklyn, Waterkloof" },
        { name: "Durban", path: "/durban-web-design", areas: "Umhlanga, Ballito, Durban North, Westville, Amanzimtoti" }
    ];

    return (
        <div className="location-strip">
            <div className="container">
                <i className="fas fa-map-marker-alt"></i>
                <span className="location-title">Serving:</span>
                <div className="location-list">
                    {locations.map((loc, idx) => (
                        <Link to={loc.path} key={idx} className="location-item">
                            <i className="fas fa-check-circle"></i> {loc.name}
                            <span className="location-areas"> ({loc.areas})</span>
                        </Link>
                    ))}
                    <span className="location-item"><i className="fas fa-check-circle"></i> Nationwide South Africa</span>
                </div>
            </div>
        </div>
    );
};

export default LocationStrip;