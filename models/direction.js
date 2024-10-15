const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const DirectionSchema = new Schema({
    name: { type: String, required: true},
    ingredientList: { type: String, required: true },
    directions: [{
        step: {type: Number, required: true},
        instruction: { type: String, required: true }
}]
});

module.exports = mongoose.model('Direction', DirectionSchema);
