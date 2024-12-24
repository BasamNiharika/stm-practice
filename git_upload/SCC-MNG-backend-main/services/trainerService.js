const trainer=require('../models/trainerModel');

//create a trainer
exports.createTrainer= async(data)=>{
    const trainer=new trainer(data);
    return await trainer.save();
}

//Get all trainer details
exports.getAlltrainers = async () => {
  return await trainer.find();
};

exports.getTrainerById = async (id) => {
    return await trainer.findById(id);
  };

// Update a Trainer details
exports.updateTrainer = async (id, data) => {
    return await trainer(id, data, { new: true, runValidators: true }).populate(
      'trainers',
      'name email'
    );
  };

  exports.deletetrainee = async (id) => {
    return await trainer.findByIdAndDelete(id);
  };