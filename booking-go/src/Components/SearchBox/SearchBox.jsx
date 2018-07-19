import React from "react";
import { SearchForm } from "../SearchForm/SearchForm";

export class SearchBox extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="searchBox col-xs-12 col-md-8" >
                        <h2>Where are you going?</h2>
                        <SearchForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;
