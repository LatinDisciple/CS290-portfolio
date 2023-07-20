// Imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// EDIT function
function EditPage({recipe}) {
    const [name, setName] = useState(recipe.name);
    const [description, setDescription] = useState(recipe.description);
    const [servings, setServings] = useState(recipe.servings);
    const [totalCalories, setTotalCalories] = useState(recipe.totalCalories);
    const [entryDate, setEntryDate] = useState(recipe.entryDate.slice(0,10));
    // const [ingredients, setIngredients] = useState(recipe.ingredients);

    const navigate = useNavigate();

    const editRecipe = async () => {
        let response = await fetch(`/book/${recipe._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                description: description,
                servings: servings,
                totalCalories: totalCalories,
                entryDate: entryDate,
                // ingredients: ingredients
            }),
            headers: {
                'content-type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Recipe edit successful!");
        }
        else {
            const eMessage = await response.json();
            alert(`Cannot edit recipe. Status ${response.status}. ${eMessage.error}`);
        }
        navigate("/recipes");
    };
    return (
        <>
            <h2>Edit Recipe</h2>
            <p>Use the icons to edit a row of the recipebook.</p>

            <table id="recipes">
                <caption>Edit a Recipe.</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Servings</th>
                        <th>Total Calories</th>
                        <th>Entry Date</th>
                        {/* <th>Ingredients</th> */}
                        <th>Save</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                                <label for="rename" class="Required">
                                    <input type="text" value={name} id="rename" name="name" 
                                    onChange={e => setName(e.target.value)} required
                                    autofocus
                                    />
                                </label>
                            </td>
                            <td>
                                <label for="redescription" class="Required">
                                    <input type="text" value={description} id="redescription" name="description"
                                    onChange={e => setDescription(e.target.value)} required
                                    />
                                </label>
                            </td>
                            <td>
                                <label for="reservings" class="Required">
                                    <input type="number" value={servings} id="reservings" name="servings"
                                    onChange={e => setServings(e.target.value)} required
                                    />
                                </label>
                            </td>
                            <td>
                                <label for="retotalCalories" class="Required">
                                    <input type="number" value={totalCalories} id="retotalCalories" name="totalCalories"
                                    onChange={e => setTotalCalories(e.target.value)} required
                                    />
                                </label>
                            </td>
                            <td>
                                <label for="reentryDate" class="Required">
                                    <input type="date" value={entryDate} id="reentryDate" name="entryDate"
                                    pattern="\d{2}-\d{2}-\d{2}"
                                    onChange={e => setEntryDate(e.target.value)} required
                                    />
                                </label>
                            </td>
                            <td><button class="wait" onClick={editRecipe}>Save</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default EditPage;