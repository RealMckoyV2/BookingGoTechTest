import React from "react";
import axios from "axios";
import SearchResults from "../SearchResults/SearchResults";
import "./styles.css";

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "",
            searchResults: [],
        }

        this.maxSearchResults = 6;
        this.api = `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${this.maxSearchResults}&solrTerm=`;
    };

    handleChange = (event) => {
        // handleSearch should be done as a callback of setState to ensure that
        // the state is set at the point of searching
        this.setState({
            searchValue: event.target.value
        }, this.handleSearch);
    };

    handleSearch = () => {
        if (this.state.searchValue.length > 1) {
            axios.get(this.api + this.state.searchValue)
                .then((response) => {
                    this.setState({
                        searchResults: response.data.results.docs
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    render() {
        return (
            <form>
                <label className="searchLabel" htmlFor="searchInput">Pick-up Location</label>
                <div className="inputContainer">
                    <input
                        className="searchInput"
                        id="searchInput"
                        type="text"
                        value={this.state.searchValue}
                        onChange={this.handleChange}
                        placeholder={"city, airport, station, region and district..."}
                    />
                    {
                        this.state.searchValue.length > 1 && this.state.searchResults.length > 0 ?
                            <SearchResults locations={this.state.searchResults} /> :
                            null
                    }
                </div>
            </form>
        );
    }
}

export default SearchForm;
