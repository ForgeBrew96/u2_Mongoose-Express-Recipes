const mongoose = require('mongoose');
const { connectDB } = require('../db');
const { CuisineType, Recipe, Direction } = require('../models');

const main = async () => {

    //Italian Food==============================
    const pizzaDirections = await new Direction({
        name: 'Pizza Margherita',
        ingredientList: 'Pizza Dough, Tomato Sauce, Mozzarella Cheese, Fresh Basil',
        directions: [
            { step: 1, instruction: 'Preheat the oven to 475°F (245°C).' },
            { step: 2, instruction: 'Roll out the pizza dough on a floured surface.' },
            { step: 3, instruction: 'Spread tomato sauce over the dough.' },
            { step: 4, instruction: 'Add mozzarella cheese slices evenly on top.' },
            { step: 5, instruction: 'Bake in the preheated oven for 10-15 minutes until crust is golden and cheese is bubbling.' },
            { step: 6, instruction: 'Garnish with fresh basil leaves before serving.' }
        ]
    });
    await pizzaDirections.save();

    const carbbonaraDirections = await new Direction({
        name: 'Pasta Carbonara',
        ingredientList: 'Pasta, pancetta, eggs, parmesan cheese, salt and pepper',
        directions: [
            { step: 1, instruction: 'Boil a large pot of salted water.' },
            { step: 2, instruction: 'Cook pasta according to package instructions.' },
            { step: 3, instruction: 'While pasta cooks, sauté pancetta in a large skillet until crispy.' },
            { step: 4, instruction: 'In a bowl, whisk eggs and Parmesan cheese together.' },
            { step: 5, instruction: 'Drain pasta and add to the skillet with pancetta.' },
            { step: 6, instruction: 'Remove skillet from heat and stir in the egg mixture, mixing quickly.' },
            { step: 7, instruction: 'Season with salt and pepper, then serve immediately.' }
        ]
    });
    await carbbonaraDirections.save();

    const tiramisuDirections = await new Direction({
        name: 'Tiramisu',
        ingredientList: 'espression, eggs, mascarpone cheese, ladyfingers, cocoa powder',
        directions: [
            { step: 1, instruction: 'Brew a strong cup of espresso and let it cool.' },
            { step: 2, instruction: 'Beat egg yolks and sugar until creamy.' },
            { step: 3, instruction: 'Add mascarpone cheese and mix until smooth.' },
            { step: 4, instruction: 'Dip ladyfingers in cooled espresso and layer them in a dish.' },
            { step: 5, instruction: 'Spread a layer of the mascarpone mixture over the ladyfingers.' },
            { step: 6, instruction: 'Repeat layers, finishing with a layer of mascarpone.' },
            { step: 7, instruction: 'Dust with cocoa powder and refrigerate for at least 4 hours.' }
        ]
    });
    await tiramisuDirections.save();

    //Japapnese recipes==============
    const sushiDirections = await new Direction({
        name: 'sushi',
        ingredientList: 'Sushi Rice, Rice Vinegar, Sugar, Salt, Nori Sheets, Bamboo Mat, Protein of choice, Cucumber, avocado (or choice of shredded veggie), soy sauce',
        directions: [
            { step: 1, instruction: 'Rinse sushi rice until water runs clear.' },
            { step: 2, instruction: 'Cook rice according to package instructions, then let cool.' },
            { step: 3, instruction: 'Mix rice vinegar, sugar, and salt, then fold into the rice.' },
            { step: 4, instruction: 'Lay a nori sheet on a bamboo mat, shiny side down.' },
            { step: 5, instruction: 'Spread a thin layer of rice over the nori, leaving a border at the top.' },
            { step: 6, instruction: 'Add fillings like fish, cucumber, and avocado.' },
            { step: 7, instruction: 'Roll tightly using the bamboo mat.' },
            { step: 8, instruction: 'Slice into bite-sized pieces and serve with soy sauce.' }
        ]
    });
    await sushiDirections.save();

    const ramenDirections = await new Direction({
        name: 'Ramen',
        ingredientList: 'chicken stock, ginger, garlic, soy sauce, ramen noodles, pork belly, eggs, green onions (scallions), nori, other desired topping/garnish',
        directions: [
            { step: 1, instruction: 'Prepare the broth by simmering chicken stock with ginger, garlic, and soy sauce.' },
            { step: 2, instruction: 'Cook ramen noodles according to package instructions.' },
            { step: 3, instruction: 'Sauté sliced pork belly until crispy.' },
            { step: 4, instruction: 'Assemble bowls by adding noodles, then ladling the hot broth over them.' },
            { step: 5, instruction: 'Top with pork belly, soft-boiled egg, and green onions.' },
            { step: 6, instruction: 'Add nori and any additional toppings as desired.' }
        ]
    });
    await ramenDirections.save();

    const tempuraDirections = await new Direction({
        name: 'Tempura',
        ingredientList: 'flour, eggs, oil, vegetables of choice, shrimp, tempura dipping sauce',
        directions: [
            {step: 1,instruction: 'Prepare a batter with cold water, flour, and a beaten egg.'},
            {step: 2, instruction: 'Heat oil in a deep fryer or pot to 350°F (175°C)'},
            {step: 3, instruction: 'Dip vegetables and shrimp in the batter.'},
            {step: 4, instruction: 'Fry until golden and crispy, about 2-3 minutes.'},
            {step: 5, instruction: 'Drain on paper towels and serve immediately with tempura dipping sauce.'}
        ]
    });
    await tempuraDirections.save();

    //Ecuarodian Recipes=============
    const cevicheDirections = await new Direction({
        name: 'Ceviche',
        ingredientList: 'Fresh fish or shrimp, Lime juice, Tomatoes, Red onion, Cilantro, Jalapeño, Salt, Pepper',
        directions: [
            { step: 1, instruction: 'Dice fresh fish or shrimp into bite-sized pieces.' },
            { step: 2, instruction: 'Marinate in lime juice for 30 minutes until opaque.' },
            { step: 3, instruction: 'Mix with diced tomatoes, red onion, cilantro, and jalapeño.' },
            { step: 4, instruction: 'Season with salt and pepper.' },
            { step: 5, instruction: 'Chill in the refrigerator for an hour before serving.' }
        ]
    });
    await cevicheDirections.save()

    const llapingachosDirections = await new Direction({
        name: 'Llapingachos',
        ingredientList: 'Potatoes, Butter, Cheese, Lettuce, Tomato, Peanut sauce',
        directions: [
            { step: 1, instruction: 'Boil potatoes until tender, then mash with butter and cheese.' },
            { step: 2, instruction: 'Form the mixture into small patties.' },
            { step: 3, instruction: 'Fry patties in a skillet until golden brown.' },
            { step: 4, instruction: 'Serve with a peanut sauce and a side of lettuce and tomato.' }
        ]
    });
    await llapingachosDirections.save();

    const empanadasDirections = await new Direction({
        name: 'Empanadas',
        ingredientList: 'Flour, Salt, Butter, Water, Beef, Onions, Spices, Egg wash',
        directions: [
            { step: 1, instruction: 'Prepare dough by mixing flour, salt, and butter with water.' },
            { step: 2, instruction: 'Roll out dough and cut into circles.' },
            { step: 3, instruction: 'Fill with a mixture of sautéed beef, onions, and spices.' },
            { step: 4, instruction: 'Fold and seal the edges, then brush with an egg wash.' },
            { step: 5, instruction: 'Bake at 375°F (190°C) until golden brown, about 20 minutes.' }
        ]
    });
    await empanadasDirections.save();

    //-------------------------------

    console.log("Created some directions!")
}
const run = async () => {
    await connectDB();
    await main();
    mongoose.connection.close();
};

run();