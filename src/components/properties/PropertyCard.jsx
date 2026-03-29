/**
 * @typedef {Object} PropertyProps
 * @prop {Object} property
 */

import Button from "@components/UI/Button";
import { faArrowLeft, faBath, faBed, faHome, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slugifyArabic } from "@utils/helpers";
import { Link } from "react-router-dom";

/**
 * @param {PropertyProps} props
 */
function PropertyCard({ property }) {
    return (
        <div className="property-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            {/* Property Image */}
            <Link to={`/properties/${property.id}/${slugifyArabic(property.title)}`} className="property-image aspect-video overflow-hidden block">
                <img src={property.thumbnail} alt={property.title} className="w-full h-full object-cover transition-transform will-change-transform duration-700 ease-out hover:scale-105" />
            </Link>
            {/* Property Info */}
            <div className="property-info p-4">
                <h3 className="property-title text-lg font-semibold">{property.title}</h3>
                <p className="property-description text-text mt-2 line-clamp-2">{property.description}</p>
                <div className="property-location flex items-center gap-2 mt-2">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="property-location-text text-text line-clamp-1">
                        {property.country}
                        {property.country && property.address && ", "}
                        {property.address}
                    </p>
                </div>
                {/* Separator */}
                <div className="property-separator h-px bg-grey my-3"></div>
                {/* More Info */}
                <div className="property-more-info flex items-center gap-2">
                    <FontAwesomeIcon icon={faBed} />
                    <p className="property-bedrooms text-text">{property.bedroom_count}</p>
                    <FontAwesomeIcon icon={faBath} />
                    <p className="property-bathrooms text-text">{property.bathroom_count}</p>
                    <FontAwesomeIcon icon={faHome} />
                    <p className="property-area text-text font-medium">{property.property_type}</p>
                    {/* Price */}
                    <div className="property-price mt-2 ms-auto">
                        <p className="property-price-text text-success font-semibold text-2xl">
                            {property.price_per_night}
                            {" "}
                            {property.currency}
                        </p>
                    </div>
                </div>
                {/* Separator */}
                <div className="property-separator h-px bg-grey my-3"></div>
                {/* Actions */}
                <div className="property-action flex items-center justify-between">
                    <Button
                        to={`/properties/${property.id}/${slugifyArabic(property.title)}`}
                        className="flex items-center justify-between gap-2 w-full"
                    >
                        <span>التفاصيل</span>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;