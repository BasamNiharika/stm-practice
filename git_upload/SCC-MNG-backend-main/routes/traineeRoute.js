const express = require('express');
const router = express.Router();
const Trainee = require('../models/traineeModel');
const traineecontroller=require('../controllers/trainerController');

// Create a Trainee
router.post('/',traineecontroller.createTrainer);

// Get All Trainees
router.get('/', traineecontroller.getAllTrainers);

// Get a Trainee by ID
router.get('/:id',traineecontroller.getTrainerById);

// Update a Trainee
router.put('/:id',traineecontroller.updateTrainer);

// Delete a Trainee
router.delete('/:id', async (req, res) => {
  try {
    const trainee = await Traine.findByIdAndDelete(req.params.id);
    if (!trainee) return res.status(404).json({ error: 'Trainee not found' });
    res.status(200).json({ message: 'Trainee deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
