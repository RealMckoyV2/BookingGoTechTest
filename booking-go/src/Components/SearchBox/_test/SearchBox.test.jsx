import React from "react";
import { shallow } from "enzyme";
import { SearchBox } from "../SearchBox";

describe("<SearchBox />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SearchBox />);
    });

    it("should render where are you going label", () => {
        expect(wrapper.find("h2").text()).toBe("Where are you going?");
    });
});