import { Link } from 'react-router-dom';

const LocationLinks = () => {
    const locations = [
        { name: "Cape Town", path: "/cape-town-web-design" },
        { name: "Johannesburg", path: "/johannesburg-web-design" },
        { name: "Pretoria", path: "/pretoria-web-design" },
        { name: "Durban", path: "/durban-web-design" }
    ];

    return (
        <div className="location-links">
            <strong>Web Design Services in:</strong>
            {locations.map((loc, index) => (
                <span key={loc.name}>
                    <Link to={loc.path}>{loc.name}</Link>
                    {index < locations.length - 1 && " | "}
                </span>
            ))}
        </div>
    );
};

export default LocationLinks;