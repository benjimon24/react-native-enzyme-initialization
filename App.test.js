import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("initialization", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
