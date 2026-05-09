import { brandLogo } from "../utils/constants";
import { useState } from "react";
import { Link, RouterProvider } from "react-router-dom";

const header = () => {
  const [isLogin, setisLogin] = useState(false);
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo_container">
          <img className="header-logo" src={brandLogo} />
        </div>
      </Link>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search For your favourite restaurants,cuisines..."
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          {isLogin ? (
            <li
              onClick={() => {
                setisLogin(!isLogin);
              }}
            >
              {" "}
              Logout
            </li>
          ) : (
            <li
              onClick={() => {
                setisLogin(!isLogin);
              }}
            >
              Login
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
