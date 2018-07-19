import React from "react";
import { shallow } from "enzyme";
import { SearchResults } from "../SearchResults";
import { SearchListItem } from "../../SearchListItem/SearchListItem";

describe("<SearchResults />", () => {
    let wrapper;
    let testProps;
    beforeEach(() => {
        testProps = {
            locations: [
                {name: "1"},
                {name: "2"},
                {name: "3"},
                {name: "4"}]
        }
        wrapper = shallow(<SearchResults {...testProps} />);
    });

    it("should render an ordered list", () => {
        expect(wrapper.find("ol").exists()).toBe(true);
    });

    it("should render the correct number of searchListItem", () => {
        expect(wrapper.find(SearchListItem).length).toBe(4);
    });
});