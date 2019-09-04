import React from "react";
import mockAxios from "axios";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MakeDropDown } from "./MakeDropdown";
import { mockMakes } from "../constants/mocks/vehicle";

// suppress console warnings caused by SemanticUI
console.warn = jest.fn();

let container;

describe("MakeDropdown", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.clearAllMocks();
  });

  it("should load makes from api", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockMakes
      })
    );
    await act(async () => {
      render(<MakeDropDown></MakeDropDown>, container);
    });

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
