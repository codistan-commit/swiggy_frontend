import { brandLogo } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const header = () => {
  const [isLogin, setisLogin] = useState(false);
  const isOnline = useOnlineStatus;
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
          {isOnline ? (
            <li
              style={{
                color: "green",
                backgroundColor: "white",
                boxShadow: " 0px 0px 28px 2px rgba(0, 0, 0, 0.141)",
              }}
            >
              🟢 Online{" "}
            </li>
          ) : (
            <li
              style={{
                color: "red",
                backgroundColor: "white",
                boxShadow: "0px 0px 28px 2px rgba(0, 0, 0, 0.141)",
              }}
            >
              🛑 Offline
            </li>
          )}
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
