const mongoose = require('mongoose');
const { connectDB } = require('../db');
const { CuisineType, Recipe, Direction } = require('../models');

const main = async () => {

const pizzaMargherita = await Recipe.findOne({ name: 'Pizza Margherita' });
const pastaCarbonara = await Recipe.findOne({ name: 'Pasta Carbonara' });
const tiramisu = await Recipe.findOne({ name: 'Tiramisu' });

const italianFood = await new CuisineType({
    name: 'Italian',
    origin: 'Italy',
    regionOfTheWorld: 'Europe',
    commonIngredients: 'Tomatoes, Olive oil, Garlic, Basil',
    popularDishes: ['Pizza', 'Pasta', 'Gelato'],
    recipes: [pizzaMargherita._id, pastaCarbonara._id, tiramisu._id]
});
await italianFood.save();

const Sushi = await Recipe.findOne({ name: 'Sushi' });
const Ramen = await Recipe.findOne({ name: 'Ramen' });
const Tempura = await Recipe.findOne({ name: 'Tempura' });

const japaneseFood = await new CuisineType({
    name: 'Japanese',
    origin: 'Japan',
    regionOfTheWorld: 'Asia',
    commonIngredients: 'Rice, Soy sauce, Fish, Seaweed',
    popularDishes: ['Sushi', 'Ramen', 'Tempura'],
    recipes: [Sushi._id, Ramen._id, Tempura._id] 
});
await japaneseFood.save();

const Ceviche = await Recipe.findOne({ name: 'Ceviche' });
const Llapingachos = await Recipe.findOne({ name: 'Llapingachos' });
const Empanadas = await Recipe.findOne({ name: 'Empanadas' });

const ecuadorianFood = await new CuisineType({
    name: 'Ecuadorian',
    origin: 'Ecuador',
    regionOfTheWorld: 'South America',
    commonIngredients: 'Plantains, Potatoes, Corn, Fresh seafood',
    popularDishes: ['Ceviche', 'Llapingachos', 'Empanadas'],
    recipes: [Ceviche._id, Llapingachos._id, Empanadas._id] 
});
await ecuadorianFood.save();

//-------------------------------

    console.log("Created some cuisineType!")
}
const run = async () => {
    await connectDB();
    await main();
    mongoose.connection.close();
};

run();