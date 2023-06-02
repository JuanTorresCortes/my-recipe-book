const express = require("express");
const  router = express.Router();

const {createRecipe} = require("../controller/recipeController");

router.post("/new-recipe", createRecipe);

module.exports = router;