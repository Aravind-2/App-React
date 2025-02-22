import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../Utilities/appStore";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";

it("Should be load with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});
it("Should be change login to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button",{name:"Logout"});
  
    expect(logoutButton).toBeInTheDocument();
  });
