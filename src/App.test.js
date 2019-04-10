import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "react-testing-library";
import App, { Greeter } from "./App";

describe("<App />", () => {
  // you can used it.only to only run one test.
  it.skip("matches snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    // this is all done with jest. not react-test-renderer
    expect(tree).toMatchSnapshot();
  });

  // it.todo doesn't work because create react app doesn't use latest version of jest.
});

describe("mocking", () => {
  it("is mocking me", () => {
    const mock = jest.fn();

    const result = mock();
    mock();

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalledTimes(2);
  });

  it("controls the mock", () => {
    const mock = jest.fn(() => "hello");

    const result = mock("smile");

    expect(result).toBe("hello");
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("smile");
  });
});

describe("<Greet />", () => {
  it("should save when clicking Save button", () => {
    const saveMock = jest.fn();
    const { getByText, queryByText } = render(<Greeter save={saveMock} />);

    const saveButton = getByText(/save/i);
    // expect(queryByText(/saving/i)).toBeFalsy();

    fireEvent.click(saveButton);
    // expect(queryByText(/saving/i)).toBeTruthy();

    expect(saveMock).toHaveBeenCalledTimes(1);
  });
});
