const Recipe = require('../models/recipe');

const getAllRecipes = async (req, res) => {
    try {
        console.log('Fetching all recipes...');
        const recipes = await Recipe.find({});
        console.log('Recips fetched successfully');
        res.json(recipes);
    } catch (e) {
        console.error('Error fetching recipes:', e);
        return res.status(500).send(e.message);
    }
};

//Get Show
const getRecipesById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        if (recipe) {
            return res.json(recipe);
        }
        return res.status(404).send('Recipe not found');
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

//Create -> POST
const createRecipe = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body);
        await recipe.save();
        return res.status(201).json({ recipe });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

//Update -> PUT
const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
        if (recipe) {
            return res.status(200).json(recipe);
        }
        throw new Error('Recipe not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

//Delete -> DELETE
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send('recipe deleted');
        }
        throw new Error('recipe not found');
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = {
    getAllRecipes,
    getRecipesById,
    createRecipe,
    deleteRecipe,
    updateRecipe
};