import React from 'react';

const MealSuggestion = ({ meal }) => {
    return (
        <div className="meal-suggestion">
            <h2>{meal.name}</h2>
            <p>{meal.description}</p>
        </div>
    );
};

export default MealSuggestion;