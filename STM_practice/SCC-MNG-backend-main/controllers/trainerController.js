const trainerservice=require('../services/trainerService')
const Trainer = require('../models/trainerModel');

exports.createTrainer =async (req,res)=>{
    try {
        // Create trainer
        const trainer = await trainerservice.createTrainer(req.body);
        res.status(201).json({ message: 'trainer created successfully', trainer });
      } catch (err) {
        res.status(400).json({ message: 'Error while creating trainer', error: err.message });
      }
}

exports.getAllTrainers=async (req,res)=>{
    try {
        const trainers = await trainerservice.getAllTrainers();
        res.status(200).json(trainers);
      } catch (err) {
        res.status(500).json({ message: 'Error while fetching trainers', error: err.message });
      }
}

exports.getTrainerById=async (req,res)=>{
    try {
        const programPlan = await trainerservice.getTrainerById(req.params.id);
        if (!programPlan) return res.status(404).json({ message: 'Trainer not found' });
        res.status(200).json(trainer);
      } catch (err) {
        res.status(500).json({ message: 'Error fetching trainer', error: err.message });
      }
}
exports.updateTrainer=async(req,res)=>{
        try {
          const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });
          if (!trainee) return res.status(404).json({ error: 'Trainee not found' });
          res.status(200).json(trainee);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
}
exports.deletetrainee = async (req, res) => {
    try {
      const programPlan = await trainerservice.deletetrainee(req.params.id);
      if (!programPlan) return res.status(404).json({ message: 'trainer not found' });
      res.status(200).json({ message: 'trainer deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error while deleting trainer', error: err.message });
    }
  };

