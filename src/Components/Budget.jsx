import React, { useState, useContext } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";
import { AppContext } from "../context_API/AppContext";
import '../App.css'
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Poppins", "Roboto:700,400,500"],
  },
});

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div id='budgetCard' class="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        // For part 1 render component inline rather than create a seperate one
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
      </div>
    
  );
};

export default Budget;
