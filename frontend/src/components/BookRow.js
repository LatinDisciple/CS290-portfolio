// Recipebook row

// Import dependencies
import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
// import IngredientList from './IngredientList.js';

function BookRow({recipe, onDelete, onEdit}) {
    return (
        <tr> 
            <td>{recipe.name}</td>
            <td>{recipe.description}</td>
            <td>{recipe.servings}</td>
            <td>{recipe.totalCalories}</td>
            <td>{recipe.entryDate.slice(0,10)}</td>
            {/* <td>{recipe.ingredients.toString()}</td> */}
            {/* <IngredientList ingredients={recipe.ingredients} /> */}
            <td><MdDeleteForever onClick={() => onDelete(recipe._id)} /></td>
            <td><MdEdit onClick={() => onEdit(recipe)} /></td>
        </tr>
    );
}

export default BookRow;