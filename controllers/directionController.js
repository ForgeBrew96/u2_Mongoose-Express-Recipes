const Direction = require('../models/direction');

const getAllDirections = async (req, res) => {
    try {
        console.log('Fetching all direction...');
        const directions = await Direction.find({});
        console.log('direction fetched successfully');
        res.json(directions);
    } catch (e) {
        console.error('Error fetching direction:', e);
        return res.status(500).send(e.message);
    }
};

//Get Show
const getDirectionsById = async (req, res) => {
    try {
        const { id } = req.params;
        const direction = await Direction.findById(id);
        if (direction) {
            return res.json(direction);
        }
        return res.status(404).send('Direction not found');
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

//Create -> POST
const createDirection = async (req, res) => {
    try {
        const direction = await new Direction(req.body);
        await direction.save();
        return res.status(201).json({ direction });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

//Update -> PUT
const updateDirection = async (req, res) => {
    try {
        const { id } = req.params;
        const direction = await Direction.findByIdAndUpdate(id, req.body, { new: true });
        if (direction) {
            return res.status(200).json(direction);
        }
        throw new Error('direction not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

//Delete -> DELETE
const deleteDirection = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Direction.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send('direction deleted');
        }
        throw new Error('direction not found');
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = {
    getAllDirections,
    getDirectionsById,
    createDirection,
    deleteDirection,
    updateDirection
};