import React from "react";

const MealSuggestion = ({ meal, className }) => {
  return (
    <div className={`meal-suggestion ${className || ""}`}>
      <h2>{meal.name}</h2>
      <p>{meal.description}</p>
    </div>
  );
};

export default MealSuggestion;
