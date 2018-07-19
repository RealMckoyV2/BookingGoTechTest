import React from "react";
import { shallow } from "enzyme";
import { SearchListItem } from "../SearchListItem";

describe("<SearchListItem />", () => {
    let testProps;
    let wrapper;
    beforeEach(() => {
        testProps = {
            location: {
                name: "Manchester Airport",
                iata: "MAN",
                city: "Manchester",
                country: "United Kingdom",
                placeType: "A",
            }
        }
        wrapper = shallow(<SearchListItem {...testProps} />);
    });

    it("should render three div components", () => {
        expect(wrapper.find("span").length).toBe(3);
        expect(wrapper.find("span").at(0).text().trim()).toBe("Airport");
        expect(wrapper.find("span").at(1).text().trim()).toBe(`${testProps.location.name} (${testProps.location.iata})`);
    });

    describe("buildAreaInformation", () => {
        it("should return city if present", () => {
            const information = wrapper.instance().buildAreaInformation();
            expect(information).toBe(`${testProps.location.city}, ${testProps.location.country}`);
        });

        it("should return region if no city is present", () => {
            const region = "Greater Manchester";
            wrapper.setProps({
                location: {
                    ...testProps.location,
                    city: null,
                    region,
                }
            })
            wrapper.update();
            const information = wrapper.instance().buildAreaInformation();
            expect(information).toBe(`${region}, ${testProps.location.country}`);
        });
    });
});