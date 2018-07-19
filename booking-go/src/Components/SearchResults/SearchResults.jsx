import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { SearchListItem } from "../SearchListItem/SearchListItem";

export const SearchResults = (props) => {
    this.renderLocations = () => (
        props.locations.map((location) => {
            return (
                <SearchListItem location={location} />
            );
        })
    )

    return (
        <div className="searchResultscontainer">
            <ol className="locationList">
                {this.renderLocations()}
            </ol>
        </div>
    );
}

SearchResults.propTypes = {
    locations: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            iata: PropTypes.string,
            city: PropTypes.string,
            country: PropTypes.string,
        })
    ),
}

export default SearchResults;