import React, { useContext } from "react";
import { AppContext } from "../context_API/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const total = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div id='totalExpenseCard' class="alert alert-primary p-4">
      <span >Total Expense: ৳ {total}</span>
    </div>
  );
};

export default ExpenseTotal;
