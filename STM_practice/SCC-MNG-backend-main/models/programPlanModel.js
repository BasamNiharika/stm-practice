const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  topicname: {
    type: String,
    required: true,
  },
  startdate: {
    type: Date,
    required: true,
  },
  enddate: {
    type: Date,
    required: true,
  },
  trainername: {
    type: String,
    required: true,
  }
});

const programPlanSchema = new mongoose.Schema({
  ModuleName: {
    type: String,
    required: true,
  },
  topics: [topicSchema],
  mode: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'completed'],
    default: 'active',
  },
}, { timestamps: true });

const ProgramPlan = mongoose.model('ProgramPlan', programPlanSchema);

module.exports = ProgramPlan;
