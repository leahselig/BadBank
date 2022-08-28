import React from "react";
import Card from "./context";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <Card
      bgcolor="info"
      txtcolor="white"
      header="BadBank"
      title="Welcome to BadBank"
      text="The Most Unsecure Bank in the World"
      body={
        <>
          <img
            src="bank.png"
            style={{ padding: "20px" }}
            className="img-fluid"
            alt="Banking picture"
          />
          <br />
          <button type="submit" className="btn btn-dark">
            <NavLink style={{ color: "white" }} to="/createaccount/">
              Open A Free Account
            </NavLink>
          </button>
        </>
      }
    />
  );
}

export default Home;
