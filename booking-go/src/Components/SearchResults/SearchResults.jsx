import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { SearchListItem } from "../SearchListItem/SearchListItem";

export class SearchResults extends React.Component {
    renderLocations = () => (
        this.props.locations.map((location, index) => {
            return (
                <SearchListItem key={index} location={location} />
            );
        })
    )

    render() {
        return (
            <div className="searchResultscontainer">
                <ol className="locationList">
                    {this.renderLocations()}
                </ol>
            </div>
        );
    }
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