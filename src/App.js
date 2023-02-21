import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context_API/AppContext";
import Budget from "./Components/Budget";
import ExpenseTotal from "./Components/ExpenseTotal";
import ExpenseList from "./Components/ExpenseList";
import AddExpenseForm from "./Components/AddExpenseForm";
import RemainingBudget from "./Components/Remaining";
import Sidebar from "./Components/Sidebar";
import WebFont from "webfontloader";
import './App.css'




WebFont.load({
  google: {
    families: ["Poppins", "Roboto:700,400,500"],
  },
});

const App = () => {
  return (
    <AppProvider>
      <Sidebar />
      <div className="container">
        <h1 className="mt-3">My Expense Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expense History</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
       </div>
      
    </AppProvider>
  );
};

export default App;
