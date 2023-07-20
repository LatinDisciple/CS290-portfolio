import 'dotenv/config';
import express from 'express';
import * as recipebook from './model.mjs';


const PORT = process.env.PORT;
const app = express();

// REST needs JSON MIME type.
app.use(express.json());

/*      CONTROLLERS     */

/*  CREATE operations  */

// CREATE a new recipe
app.post('/book', async (req, res) => {
    recipebook.createRecipe(
        req.body.name,
        req.body.description,
        req.body.servings,
        req.body.totalCalories,
        req.body.entryDate,
        // req.body.ingredients
    )
    .then(recipe => {
        res.status(201).json(recipe);
    })
    .catch(error => {
        console.error(error);
        res.status(400).json({error: 'Cannot create recipe document. Invalid syntax'});
    });
});

// CREATE a new ingredient
// app.post('/log', async (req, res) => {
//     recipebook.createIngredient(
//         req.body.name,
//         req.body.calories,
//     )
//     .then(ingredient => {
//         res.status(201).json(ingredient);
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(400).json({error: 'Cannot create ingredient document. Invalid syntax'});
//     });
// });

/*  RETRIEVE operations  */

// RETRIEVE all recipes
app.get('/book', (req, res) => {
    recipebook.findRecipe()
    .then(recipe => {
        if(recipe !== null) {
            res.json(recipe);
        }
        else {
            res.status(404).json({Error: 'Recipe document not found'});
        }
    })
    .catch(e => {
        console.log(e);
        res.status(400).json({error: 'Retrieve Failed. Cannot access document.'});
    });
});

// RETRIEVE all ingredients.
// app.get('/book/:_id/list', (req, res) => {
//     recipebook.findIngredient(req.params._id)
//     .then(ingredients => {
//         if(ingredients !== null) {
//             res.json(ingredients);
//         }
//         else {
//             res.status(400).json({error: 'Ingredient document not found'});
//         }
//     })
//     .catch(e => {
//         console.log(e);
//         res.status(400).json({error: 'Retrieve Failed. Cannot access document.'});
//     });
// });

// RETRIEVE recipes by _id.
app.get('/book/:_id', (req, res) => {
    recipebook.findRecipeById(req.params._id)
    .then(recipe => {
        if(recipe !== null) {
            res.json(recipe);
        }
        else {
            res.status(404).json({error: 'Recipe document not found'});
        }
    })
    .catch(e => {
        console.log(e);
        res.status(400).json({error: 'Retrieve Failed. Cannot access document.'});
    });
});



/*  UPDATE operations  */

// UPDATE recipe by _id.
app.put('/book/:_id', (req,res) => {
    recipebook.replaceRecipe(
        req.params._id,
        req.body.name,
        req.body.description,
        req.body.servings,
        req.body.totalCalories,
        req.body.entryDate,
        // req.body.ingredients
    )
    .then(recipe => {
        res.json(recipe);
    })
    .catch(e => {
        console.log(e);
        res.status(400).json({error: 'Request failed. Cannot replace document.'});
    });
});

// UPDATE ingredient by _id.
// app.put('/log/:id', (req, res) => {
//     recipebook.replaceIngredient(
//         req.
//     )
// });

/*  DELETE operations  */
app.delete('/book/:_id', (req,res) => {
    recipebook.deleteRecipeById(req.params._id)
    .then(deletedCount => {
        if(deletedCount === 1) {
            res.status(204).send();
        }
        else {
            res.status(404).json({error: 'Document does not exist.'});
        }
    })
    .catch(error => {
        console.error(error);
        res.send({error: 'Request failed. Cannot delete by ID.'});
    });
});


// REST and Express listen to the port noted above.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});