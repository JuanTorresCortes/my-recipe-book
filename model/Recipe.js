const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const recipeSchema = new mongoose.Schema({
  _id: { type: String, default: () => uuid() },
  title: { type: String, required: true },
  ingredients: { type: Array, require: true },
  instructions: { type: String, require: true },
  createAt: { type: Date, default: Date.now },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;