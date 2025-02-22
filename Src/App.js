import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestroMenu from "./Components/RestroMenu";
import { lazy, Suspense } from "react";
import UserContext from "./Components/UserStatus";
import { Provider } from "react-redux";
import appStore from "./Utilities/appStore";
import Cart from "./Components/Cart";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
       
      <div className="app">
        <Header />
        <Outlet />
      </div>
    
    </Provider>
   
  );
};
const About = lazy(() => import("./Components/About"));

const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestroMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerPath} />);


/*<UserContext.Provider value={{loggedUser:"Aravind"}}></UserContext.Provider>
</UserContext.Provider>*/