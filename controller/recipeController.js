const { json } = require("express");
const Recipe = require("../model/Recipe");

const createRecipe = async (req, res) => {
  // http://localhost:3000/recipes/new-recipe
  try {
    const newRecipe = await new Recipe(req.body);
    const saveRecipe = await newRecipe.save();
    res.status(200).json({ success: true, data: saveRecipe });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAll = async (req, res) => {
  // http://localhost:3000/recipes/getAllRecipes
  try {
    const allRecipes = await Recipe.find({});
    res.status(200).json({ success: true, data: allRecipes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getRecipeByID = async (req, res) => {
  // http://localhost:3000/recipes/getRecipeID/> recipe id here <
  try {
    const targetRecipe = await Recipe.findById({ _id: req.params.id });
    if (!targetRecipe) {
      return res
        .status(400)
        .json({ success: false, message: "recipe not found" });
    }
    res.status(200).json({ success: true, data: targetRecipe });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateRecipe = async (req, res) => {
  // http://localhost:3000/recipes/updateRecipe/ > recipe id here <
  try {
    const targetRecipe = await Recipe.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!targetRecipe) {
      return res
        .status(400)
        .json({ success: false, message: "recipe not found" });
    }
    res.status(200).json({ success: true, data: targetRecipe });
  } catch (error) {
    res.status(500).json({ success: true, message: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  // http://localhost:3000/recipes/deleteRecipe/ > recipe id here <
  try {
    const targetRecipe = await Recipe.findByIdAndDelete({ _id: req.params.id });
    if (!targetRecipe) {
      return res
        .status(400)
        .json({ success: false, message: " recipe not found" });
    }
    res.status(200).json({ success: true, data: targetRecipe });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = {
  createRecipe,
  getAll,
  getRecipeByID,
  updateRecipe,
  deleteRecipe,
};
