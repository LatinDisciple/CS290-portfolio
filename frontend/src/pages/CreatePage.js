import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import {}

function CreatePage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [servings, setServings] = useState(1);
    const [totalCalories, setTotalCalories] = useState(0);
    const [entryDate, setEntryDate] = useState();
    // const [ingredients, setIngredients] = useState([]);

    const navigate = useNavigate();

    const addRecipe = async () => {
        const newRecipe = {name, description, servings, totalCalories, entryDate};
        const res = await fetch('/book', {
            method:'POST',
            body: JSON.stringify(newRecipe),
            headers: {
                'content-type': 'application/json',
            },
        });

        if (res.status === 201) {
            alert("Successfully added a recipe to a row in the recipebook.");
        } else {
            alert("Failed to add a new row");
        }
        navigate("/recipes");
    };
    return (
        <>
            <h2>Add a Recipe.</h2>
            <article>
                <p>
                    Add a new delicious recipe to the collection.
                </p>
                <table id="recipes">
                    <caption>Add a new recipe to the recipebook.</caption>
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
                            {/* <td></td> */}
                            <td><button class="wait" onClick={addRecipe}>Save</button></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );

}

export default CreatePage;