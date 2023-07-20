// import dependencies
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BookTable from '../components/BookTable.js';

function RecipebookPage({ setRecipe }) {
    // define a variable to take advantage of useNavigate().
    const navigate = useNavigate();

    // define a variable to incorperate the document name and set that document equal to useState([]).
    const [recipes, setRecipes] = useState([]);

    // RETRIEVE the entire list of recipe documents
    const loadRecipes = async () => {
        const response = await fetch('/book');
        const recipebook = await response.json();
        setRecipes(recipebook);
    }

    // UPDATE a single recipe document.
    const onEditRecipe = async recipe => {
        setRecipe(recipe);
        navigate("/edit")
    }

    // DELETE a single recipe document.
    const onDeleteRecipe = async _id => {
        const response = await fetch(`/book/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            const getResponse = await fetch('/book');
            const recipebook = await getResponse.json();
            setRecipes(recipebook);
        }
        else {
            console.error(`Failed to delete recipe with _id:${_id}, status code:${response.status}`);
        }
    }

    // LOAD all recipes
    useEffect(() => {
        loadRecipes();
    }, []);

    return (
        <>
            <h2>Recipes</h2>
            <p>List of Recipes. Each recipe has a list of ingredients that can be modified.</p>
            <BookTable
                recipes={recipes}
                onEdit={onEditRecipe}
                onDelete={onDeleteRecipe}
            />
        </>
    );
}

export default RecipebookPage;