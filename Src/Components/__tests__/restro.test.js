import { render,screen } from "@testing-library/react"
import Restro from "../Restro"
import Mock_Data from "../MockData.js/restroMock.json"
import React from "react";
import "@testing-library/jest-dom";


it("",()=>{
    render(<Restro rescard={Mock_Data} />)
    const name=screen.getByText("Pizza Hut")
    expect(name).toBeInTheDocument();
})