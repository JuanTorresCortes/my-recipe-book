const express = require("express");
const router = express.Router();

const { createRecipe, getAll, getRecipeByID, updateRecipe, deleteRecipe} = require("../controller/recipeController");

router.post( "/new-recipe", createRecipe );
router.get ( "/getAllRecipes", getAll );
router.get( "/getRecipeID/:id", getRecipeByID );
router.put( "/updateRecipe/:id", updateRecipe );
router.delete( "/deleteRecipe/:id", deleteRecipe )

module.exports = router;
