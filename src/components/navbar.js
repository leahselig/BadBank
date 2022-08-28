import { NavLink } from "react-router-dom";
import React from "react";

function NavBar() {
  const navStyling = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#00bbf0" : "#555",
    };
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <h4>BadBank</h4>
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Home Page"
          >
            <NavLink to="/" style={navStyling} className="nav-link">
              Home
            </NavLink>
          </li>

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Create A New Account"
          >
            <NavLink
              to="/createaccount/"
              style={navStyling}
              className="nav-link"
            >
              Create Account
            </NavLink>
          </li>

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Make A Deposit"
          >
            <NavLink to="/deposit/" style={navStyling} className="nav-link">
              Deposit
            </NavLink>
          </li>

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Make A Withdrawal"
          >
            <NavLink to="/withdraw/" className="nav-link" style={navStyling}>
              Withdraw
            </NavLink>
          </li>

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="top"
            title="See All User Data"
          >
            <NavLink to="/alldata/" style={navStyling} className="nav-link">
              All Data
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
