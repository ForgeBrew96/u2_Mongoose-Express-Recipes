const CuisineType = require('../models/cuisineType');

const getAllCuisineTypes = async (req, res) => {
    try {
        console.log('Fetching all CuisineType...');
        const cuisineTypes = await CuisineType.find({});
        console.log('CuisineType fetched successfully');
        res.json(cuisineTypes);
    } catch (e) {
        console.error('Error fetching cuisinetypes:', e);
        return res.status(500).send(e.message);
    }
};


// const getCuisineTypesById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const cuisineTypes = await CuisineType.findById(id);
//         if (cuisineTypes) {
//             return res.json(cuisineTypes);
//         }
//         return res.status(404).send('CuisineType not found');
//     } catch (e) {
//         return res.status(500).send(e.message);
//     }
// };
const getCuisineTypesByName = async (req, res) => {
    try {
        const { name } = req.query;
        console.log(`Searching for cuisine type: '${name}'`);
        const cuisineType = await CuisineType.findOne({ name });
        console.log('Query Result:', cuisineType);
        if (cuisineType) {
            return res.json(cuisineType);
        }
        console.log('CuisineType not found');
        return res.status(404).send('CuisineType not found');
    } catch (e) {
        console.error(e.message);
        return res.status(500).send(e.message);
    }
};




//Create -> POST
const createCuisineType = async (req, res) => {
    try {
        const cuisineType = await new CuisineType(req.body);
        await cuisineType.save();
        return res.status(201).json({ cuisineType });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

//Update -> PUT
const updatecuisineType = async (req, res) => {
    try {
        const { id } = req.params;
        const cuisineType = await CuisineType.findByIdAndUpdate(id, req.body, { new: true });
        if (cuisineType) {
            return res.status(200).json(cuisineType);
        }
        throw new Error('cuisineType not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

//Delete -> DELETE
const deleteCuisineType = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await CuisineType.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send('CuisineType deleted');
        }
        throw new Error('CuisineType not found');
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = {
    getAllCuisineTypes,
    // getCuisineTypesById,
    getCuisineTypesByName,
    createCuisineType,
    deleteCuisineType,
    updatecuisineType
};