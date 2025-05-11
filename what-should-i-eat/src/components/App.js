import React, { useState } from "react";
import MealSuggestion from "./MealSuggestion";
import meals from "../data/meals";
import "../styles/App.css";

const App = () => {
  const [meal, setMeal] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const getRandomMeal = () => {
    setIsFading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * meals.length);
      setMeal(meals[randomIndex]);
      setIsFading(false);
    }, 400);
  };

  return (
    <div className="app">
      <h1>What Should I Eat for Dinner?</h1>
      <button className="button-container" onClick={getRandomMeal}>
        Get Meal Suggestion
      </button>

      {meal && (
        <MealSuggestion meal={meal} className={isFading ? "fade-out" : ""} />
      )}
    </div>
  );
};

export default App;
