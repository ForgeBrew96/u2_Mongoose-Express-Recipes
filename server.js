//============Boilder Plate=======================================
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cuisineTypeController = require('./controllers/cuisineTypeController');
const directionController = require('./controllers/directionController');
const recipeController = require('./controllers/recipeController');
const PORT = process.env.PORT || 3003;

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

(async () => {
    try {
        await connectDB();
    } catch (error) {
        console.error('Failed to connect to the database');
        process.exit(1); // Exit process if the DB connection fails
    }
})();

app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}`);
});
//=================================================================


//Paths-------------------------
app.get('/', (req, res) => {
    res.send('Door that leads to the back of the restraunt. Where would you like to go?');
});

// app.get('/cuisinetype', (req, res) => {
//     console.log("GET /cuisinetype route hit");
//     cuisineTypeController.getAllCuisineTypes(req, res);
// });

app.get('/recipe', (req, res) => {
    console.log("GET /recipe route hit");
    recipeController.getAllRecipes(req, res);
});

app.get('/direction', (req, res) => {
    console.log("GET /direction route hit");
    directionController.getAllDirections(req, res);
});

//Controller Functionality------------------------
//cuisinetype==============================

// app.get('/cuisinetype/:id', (req, res) => {
//     console.log(`GET /cuisinetype/${req.params.id} route hit`);
//     cuisineTypeController.getCuisineTypesById(req, res);
// });

app.get('/cuisinetype', (req, res) => {
    const name = req.query.name;
    if (name) {
        console.log(`GET /cuisinetype?name=${name} route hit`);
        return cuisineTypeController.getCuisineTypesByName(req, res);
    }
    console.log("GET /cuisinetype route hit");
    return cuisineTypeController.getAllCuisineTypes(req, res);
});

app.post('/cuisinetype', (req, res) => {
    console.log("POST /cuisinetype route hit");
    cuisineTypeController.createCuisineType(req, res);
});

app.put('/cuisinetype/:id', (req, res) => {
    console.log(`PUT /cuisinetype/${req.params.id} route hit`);
    cuisineTypeController.updatecuisineType(req, res);
});

app.delete('/cuisinetype/:id', (req, res) => {
    console.log(`DELETE /cuisinetype/${req.params.id} route hit`);
    cuisineTypeController.deleteCuisineType(req, res);
});
//recipe==============================

app.get('/recipe/:id', (req, res) => {
    console.log(`GET /recipe/${req.params.id} route hit`);
    recipeController.getRecipesById(req, res);
});

app.post('/recipe', (req, res) => {
    console.log("POST /recipe route hit");
    recipeController.createRecipe(req, res);
});

app.put('/recipe/:id', (req, res) => {
    console.log(`PUT /recipe/${req.params.id} route hit`);
    recipeController.updateRecipe(req, res);
});

app.delete('/recipe/:id', (req, res) => {
    console.log(`DELETE /recipe/${req.params.id} route hit`);
    recipeController.deleteRecipe(req, res);
});
//Direction==============================

app.get('/direction/:id', (req, res) => {
    console.log(`GET /direction/${req.params.id} route hit`);
    directionController.getDirectionsById(req, res);
});

app.post('/direction', (req, res) => {
    console.log("POST /direction route hit");
    directionController.createDirection(req, res);
});

app.put('/direction/:id', (req, res) => {
    console.log(`PUT /direction/${req.params.id} route hit`);
    directionController.updateDirection(req, res);
});

app.delete('/direction/:id', (req, res) => {
    console.log(`DELETE /direction/${req.params.id} route hit`);
    directionController.deleteDirection(req, res);
});


//------Exiting the Database, but leaving time to actually CRUD and populate pieces
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
});