// dependencies
import 'dotenv/config'
import mongoose from 'mongoose';

// connect to mongoose using the connect() function
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

// Confirm that the database has connected 
// and print a message in the console.
db.once("open", (e) => {
    if(e) {
        res.status(500).json({error: '500:Connection to server failed.'});
    }
    else {
        console.log("Successfully connected to MongoDB recipe collection using Mongoose!");
    }
});

// define ingredient schema
// const ingredientSchema = mongoose.Schema({
//     name:           {type: String, required:true},
//     calories:       {type: Number, required: true, default: 0},
//     amount:         {type: Number, required: true, default: 0},
//     unit:           {type: String, required: true, default: 'g'}
// });

// const Ingredient = mongoose.model("Ingredient", ingredientSchema);

// define recipe schema
const recipeSchema = mongoose.Schema({
    name:           {type: String, required: true},
    description:    {type: String},
    servings:       {type: Number, default: 1},
    totalCalories:  {type: Number, required: true, default: 0},
    entryDate:      {type: Date, required: true, default: Date.now},
    // ingredients:    [{name: String, calories: Number, amount: Number, unit: String}]
});

const Recipe = mongoose.model("Recipe", recipeSchema);



/*      MODELS      */

/*  CREATE operations  */
// Create a recipe document in the collection
const createRecipe = async (name, description, servings, totalCalories, entryDate) => {
    // totalCalories property determined by the total calories of each ingredient.
    // let totalCalories = 0;
    // for(const ingredient of ingredients) {
    //     totalCalories += ingredient.calories;
    // }
    // Create an instance of the model class Recipe
    const recipe = new Recipe({
        name: name,
        description: description,
        servings: servings,
        totalCalories: totalCalories,
        entryDate: entryDate,
        // ingredients: ingredients
    });
    return recipe.save();
}
// Create an ingredient document in the collection
// const createIngredient = async (name, calories, amount, unit) => {
//     // Create an instance of the model class Ingredient
//     const ingredient = new Ingredient({
//         name: name,
//         calories: calories,
//         amount: amount,
//         unit: unit
//     });
//     return ingredient.save();
// }


/*  RETRIEVE operations  */

// Retrive recipes
const findRecipe = async () => {
    const query = Recipe.find();
    return query.exec();
}

// Retrieve ingredients based on recipe id
// const findIngredient = async (id) => {
//     const query = Recipe.findById(id, 'ingredients');
//     return query.exec();
// }

// Retrieve by ID
const findRecipeById = async (id) => {
    const query = Recipe.findById(id);
    return query.exec();
}


/*  UPDATE operations  */
// replace the properties of the recipe based on the id value
const replaceRecipe = async (id, name, description, servings, totalCalories, entryDate) => {
    // let totalCalories = 0;
    // for(const ingredient of ingredients) {
    //     totalCalories += ingredient.calories;
    // }
    const result = await Recipe.replaceOne({ _id: id}, {
        name: name,
        description: description,
        servings: servings,
        totalCalories: totalCalories,
        entryDate: entryDate,
        // ingredients: ingredients
    });
    return {
        id: id,
        name: name,
        description: description,
        servings: servings,
        totalCalories: totalCalories,
        entryDate: entryDate,
        // ingredients: ingredients
    };
}

// replace the properties of the ingredient based on the id value
// const replaceIngredient = async (name, calories, weight, weightUnit) => {
//     const result = await Ingredient.replaceOne({_id: id}, {
//         name: name,
//         calories: calories,
//         weight: weight,
//         weightUnit: weightUnit
//     });
//     return {
//         id: id,
//         name: name,
//         calories: calories,
//         weight: weight,
//         weightUnit: weightUnit
//     }
// }

/*  DELETE operations  */

// delete the recipe with the provided id value
const deleteRecipeById = async (_id) => {
    const result = await Recipe.deleteOne({_id: _id});
    return result.deletedCount;
}

// Delete the ingredient with the provided id value
// const deleteIngredientById = async (id) => {
//     const result = await Ingredient.deleteOne({_id: id});
//     return result.deletedCount;
// }

export {createRecipe, findRecipe, findRecipeById, replaceRecipe, deleteRecipeById}