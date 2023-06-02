const Recipe = require("../model/Recipe")

const createRecipe = async (req, res) => {
    try {
        const newRecipe = await new Recipe(req.body);
        const saveRecipe = await newRecipe.save();       
    res.status(200).json({ success: true, data: saveRecipe});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = {createRecipe};