const mongoose = require('mongoose');

const CuisineType = require('./cuisineType');  // Ensure these files export models
const Recipe = require('./recipe'); 
const Direction = require('./direction');

module.exports = {
    CuisineType,
    Recipe,
    Direction
};