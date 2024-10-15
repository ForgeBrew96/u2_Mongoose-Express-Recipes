const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const RecipeSchema = new Schema({
    name: { type: String, required: true},
    timeInMinutes: { type: Number, required: true },
    vegetarian: { type: Boolean, required: true },
    pescatarian: { type: Boolean, required: true },
    expenseScaleOutof5: {
        type: Number, 
        required: true,
        min: 1, 
        max: 5 
    },
    directions: { type: Schema.Types.ObjectId, ref: 'Direction' }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
