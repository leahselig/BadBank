import React from "react";
import Card from "./context";
import { UserContext } from "./context";

function Withdraw() {
  const [withdraw, setWithdraw] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);
  let userBalance = ctx.users[ctx.users.length - 1].balance;
  let userName = ctx.users[ctx.users.length - 1].name;

  function validate(number) {
    if (isNaN(number) || number < 0) {
      setStatus("Transaction Failed. Please enter a valid, positive number.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function overdraw(number) {
    if (Number(number) > userBalance) {
      setStatus(
        "Transaction Failed. Withdrawal amount cannot exceed your current balance."
      );
      clearForm();
      return false;
    }
    return true;
  }

  function handleWithdrawal(amount) {
    if (!validate(amount) || !overdraw(amount)) return;
    setBalance(userBalance - amount);
    setStatus("");

    ctx.users[ctx.users.length - 1].balance -= Number(amount);
    setShow(false);
  }

  function clearForm() {
    setWithdraw("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      txtcolor="dark"
      header="Make a Withdrawal"
      status={status}
      body={
        show ? (
          <>
            <h2>Welcome, {userName}!</h2>
            <br />
            <h4>Current Balance: $ {userBalance}</h4>
            <br />
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter Amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-dark"
              disabled={withdraw === ""}
              onClick={() => handleWithdrawal(withdraw)}
            >
              Withdraw Amount
            </button>
          </>
        ) : (
          <>
            <h5>Success!</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>
              Make Another Withdrawal
            </button>
          </>
        )
      }
    />
  );
}

export default Withdraw;
