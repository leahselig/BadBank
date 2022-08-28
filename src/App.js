import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./components/context";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import AllData from "./components/alldata";
import Deposit from "./components/deposit";
import CreateAccount from "./components/createaccount";
import Withdraw from "./components/withdraw";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "User",
              email: "user@mit.edu",
              password: "secret456",
              balance: "0",
            },
          ],
        }}
      >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/alldata" element={<AllData />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
