const mongoose = require('mongoose');
const { connectDB } = require('../db');
const { CuisineType, Recipe, Direction } = require('../models');

const main = async () => {

    const pizzaDirections = await Direction.findOne({ name: 'Pizza Margherita' });
    const carbonaraDirections = await Direction.findOne({ name: 'Pasta Carbonara' });
    const tiramisuDirections = await Direction.findOne({ name: 'Tiramisu' });

    const italianRecipes = [
        {
            name: 'Pizza Margherita',
            timeInMinutes: 60,
            vegetarian: true,
            pescatarian: false,
            expenseScaleOutof5: 3,
            directions: pizzaDirections._id
        },
        {
            name: 'Pasta Carbonara',
            timeInMinutes: 30,
            vegetarian: false,
            pescatarian: false,
            expenseScaleOutof5: 2,
            directions: carbonaraDirections._id
        },
        {
            name: 'Tiramisu',
            timeInMinutes: 45,
            vegetarian: true,
            pescatarian: true,
            expenseScaleOutof5: 4,
            directions: tiramisuDirections._id
        }
    ];
    await Recipe.insertMany(italianRecipes);

    const sushiDirections = await Direction.findOne({ name: 'sushi' });
    const ramenDirections = await Direction.findOne({ name: 'Ramen' });
    const tempuraDirections = await Direction.findOne({ name: 'Tempura' });

    const japaneseRecipes = [
        {
            name: 'Sushi',
            timeInMinutes: 90,
            vegetarian: false,
            pescatarian: true,
            expenseScaleOutof5: 4,
            directions: sushiDirections._id
        },
        {
            name: 'Ramen',
            timeInMinutes: 120,
            vegetarian: false,
            pescatarian: false,
            expenseScaleOutof5: 3,
            directions: ramenDirections._id
        },
        {
            name: 'Tempura',
            timeInMinutes: 45,
            vegetarian: true,
            pescatarian: true,
            expenseScaleOutof5: 3,
            directions: tempuraDirections._id
        }
    ];
    await Recipe.insertMany(japaneseRecipes);


    const cevicheDirections = await Direction.findOne({ name: 'Ceviche' });
    const llapingachosDirections = await Direction.findOne({ name: 'Llapingachos' });
    const empanadasDirections = await Direction.findOne({ name: 'Empanadas' });

    const ecuadorianRecipes = [
        {
            name: 'Ceviche',
            timeInMinutes: 60,
            vegetarian: false,
            pescatarian: true,
            expenseScaleOutof5: 2,
            directions: cevicheDirections._id
        },
        {
            name: 'Llapingachos',
            timeInMinutes: 45,
            vegetarian: true,
            pescatarian: false,
            expenseScaleOutof5: 1,
            directions: llapingachosDirections._id
        },
        {
            name: 'Empanadas',
            timeInMinutes: 60,
            vegetarian: true,
            pescatarian: false,
            expenseScaleOutof5: 2,
            directions: empanadasDirections._id
        }
    ];
    await Recipe.insertMany(ecuadorianRecipes);

    //-------------------------------

    console.log("Created some recipes!")
}
const run = async () => {
    await connectDB();
    await main();
    mongoose.connection.close();
};

run();