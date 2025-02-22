import { headImg } from "../Utilities/img";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";
import UserContext from "./UserStatus";
import { useSelector } from "react-redux";
import React from "react";
const Header = () => {
  const [login, setUpdate] = useState("Login");

  const onlineStatus=useOnlineStatus();

  const {loggedUser}=useContext(UserContext)

  const cart=useSelector((store)=>(store.cart.items))
  console.log(cart)


  //console.log("header")

  return (
    <div className="flex justify-between bg-amber-200 shadow-lg">
      <div className="logoContainer">
        <img className="w-28" src={headImg}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-5">
            OnlineStatus:{onlineStatus?"yes":"no"}
          </li>
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-5">
            <Link to="/cart">Cart:{cart.length}items</Link></li>
          
          <li className="px-5">
            UserName: {loggedUser}

          </li>
          <button
            className="border-2 p-1 bg-green-200 rounded-lg"
            onClick={() => {
              login === "Login" ? setUpdate("Logout") : setUpdate("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
