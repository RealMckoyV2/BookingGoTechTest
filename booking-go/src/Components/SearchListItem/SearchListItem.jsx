import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export class SearchListItem extends React.Component {
    placeTypes = {
        A: "Airport",
        C: "City",
        D: "District",
        T: "Station",
    };

    buildAreaInformation = () => {
        let areaInformation = "";
        // if we dont have a city then attempt to show the region.
        if (!this.props.location.city) {
            if (this.props.location.region) {
                areaInformation += `${this.props.location.region}, `;
            }
        } else { // we must have a city so show that and not the region.
            areaInformation += `${this.props.location.city}, `;
        }

        if (this.props.location.country) {
            areaInformation += `${this.props.location.country}`;
        }

        return areaInformation
    }

    render() {
        return (
            // Looks ugly but AC says to apply no styling
            <li className="locationItem">
                <div>
                    <span>{this.placeTypes[this.props.location.placeType]} </span>
                    <span>{this.props.location.name} {this.props.location.iata && `(${this.props.location.iata})`} </span>
                    <span>{this.buildAreaInformation()}</span>
                    {this.buildAreaInformation()}
                </div>
            </li>
        );
    }
}

SearchListItem.propTypes = {
    location: PropTypes.shape({
        name: PropTypes.string.isRequired,
        iata: PropTypes.string,
        city: PropTypes.string,
        country: PropTypes.string,
        placeType: PropTypes.string,
        region: PropTypes.string,
    })
}

export default SearchListItem;