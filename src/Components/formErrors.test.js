import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FormErrors from "./formErrors";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders an error when error exists", () => {
  act(() => {
    render(<FormErrors Error="Error!" />, container);
  });
  expect(container.textContent).toBe("Error!");

  act(() => {
    render(<FormErrors Error={null} />, container);
  });
  expect(container.textContent).toBe("");

});
