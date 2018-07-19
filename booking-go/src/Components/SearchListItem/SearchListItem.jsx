import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export const SearchListItem = (props) => {

    this.renderAreaInformation = () => {
        let areaInformation = "";
        // if we dont have a city then attempt to show the region.
        if (!props.location.city) {
            if (props.location.region) {
                areaInformation += `${props.location.region}, `;
            }
        } else { // we must have a city so show that and not the region.
            areaInformation += `${props.location.city}, `;
        }

        if (props.location.country) {
            areaInformation += `${props.location.country}`;
        }

        return (
            <span>{areaInformation}</span>
        )
    }

    this.getPlaceType = (type) => {
        console.log(type);
        let result;
        switch (type) {
            case "A":
                result = "Airport";
                break;
            case "C":
                result = "City";
                break;
            case "D":
                result = "District";
                break;
            case "T":
                result = "Station";
                break;
            default:
                result = "";
                break;
        }

        console.log(result);
        return result;
    }

    return (
        <li className="locationItem">
            <div className="pillContainer">
                <span>{this.getPlaceType(props.location.placeType)}</span>
            </div>
            <div className="locationContainer">
                <div>
                    <span>{props.location.name}</span>
                    {props.location.iata && ` (${props.location.iata})`}
                </div>
                <div>
                    {this.renderAreaInformation()}
                </div>
            </div>
        </li>
    );
}

SearchListItem.propTypes = {
    location: PropTypes.shape({
        name: PropTypes.string.isRequired,
        iata: PropTypes.string,
        city: PropTypes.string,
        country: PropTypes.string,
        placeType: PropTypes.string,
    })
}

export default SearchListItem;