import React from "react";
import mockAxios from "axios";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ModelDropDown } from "./ModelDropdown";
import { mockModels } from "../constants/mocks/vehicle";

// suppress console warnings caused by SemanticUI
console.warn = jest.fn();

let container;

describe("ModelDropdown", () => {
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

  it("should not load anything if empty", async () => {
    await act(async () => {
      render(<ModelDropDown></ModelDropDown>, container);
    });

    expect(mockAxios.get).toHaveBeenCalledTimes(0);
  });

  it("should load models for year/make combo", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockModels
      })
    );

    const mockProps = {
      year: 2010,
      make: "Test Make"
    };

    await act(async () => {
      render(<ModelDropDown {...mockProps}></ModelDropDown>, container);
    });

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it("should load models for make w/o year", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockModels
      })
    );

    const mockProps = {
      make: "Test Make"
    };

    await act(async () => {
      render(<ModelDropDown {...mockProps}></ModelDropDown>, container);
    });

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
