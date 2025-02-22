import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import React from "react";

describe("Contact us test cases", () => {
  it("Component rendering", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  it("Should load the input box",()=>{
    render(<Contact/>)

    const inputBoxes=screen.getAllByRole("textbox")

    expect(inputBoxes).toBeInTheDocument

  })
});
