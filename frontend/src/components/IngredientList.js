import React from 'react';


function IngredientList (ingredients) {
    let list = "";
    for(let i = 0; i<ingredients.length; i++) {
        list += ingredients[i].name;
    }
    return (
        <td>{list}</td>
    )
}

export default IngredientList;