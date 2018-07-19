import React from "react";
import { shallow } from "enzyme";
import mockAxios from "axios";
import * as Fixtures from "./Fixtures"
import { SearchForm } from "../SearchForm";
import { SearchResults } from "../../SearchResults/SearchResults";

describe("<SearchBox />", () => {
    let wrapper;
    beforeEach(() => {
        mockAxios.get.mockClear();
        mockAxios.get.mockReturnValue(Promise.resolve({}));
        wrapper = shallow(<SearchForm />);
    });

    it("should not render search results on initial render", () => {
        expect(wrapper.find(SearchResults).exists()).toBe(false);
    });

    it("should render search label and input", () => {
        expect(wrapper.find("label").text()).toBe("Pick-up Location");
        expect(wrapper.find("input").exists()).toBe(true);
        expect(wrapper.find("input").prop("placeholder")).toBe("city, airport, station, region and district...");
    });

    it("should render search results if search results are present", () => {
        wrapper.setState({
            searchValue: "some text longer than 1 character",
            searchResults: [
                {
                    city: "Madrid",
                    country: "Spain",
                    iata: "MAD",
                    name: "Madrid Airport",
                    placeType: "A",
                    region: "Community of Madrid",
                }
            ]
        })
        expect(wrapper.find(SearchResults).exists()).toBe(true);
    })

    it("should update state with search results on handleSearch", async () => {
        wrapper.setState({
            searchValue: "searchForThis",
        })
        wrapper.update();
        mockAxios.get.mockReturnValue(new Promise(res => res(Fixtures.GetResponseFromApi)));

        await wrapper.instance().handleSearch();
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith("https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=searchForThis");
        expect(wrapper.state().searchResults.length).toBe(1);
    })

    it("should not call the api if search term is less than 2 characters", () => {
        wrapper.setState({
            searchValue: "s",
        })
        wrapper.update();

        wrapper.instance().handleSearch();
        expect(mockAxios.get).toHaveBeenCalledTimes(0);
    })
});