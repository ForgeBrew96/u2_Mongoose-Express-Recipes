const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const CuisineTypeSchema = new Schema({
    name: { type: String, required: true},
    origin: { type: String, required: true },
    regionOfTheWorld: { type: String, required: true },
    commonIngredients: { type: String, required: true },
    popularDishes: [{ type: String, required: true }],
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }]
});

module.exports = mongoose.model('CuisineType', CuisineTypeSchema);
