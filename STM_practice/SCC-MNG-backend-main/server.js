require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const cors = require('cors');
const traineeRoutes = require('./routes/traineeRoute');
const trainerRoutes = require('./routes/trainerRoute');
const programPlanRoute = require('./routes/programPlanRoute');
const BlogRoutes=require('./routes/blogRoute')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded


// Routes
app.use('/api/trainees', traineeRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/program-plans', programPlanRoute);
app.use('/api/blog',BlogRoutes);
app.use('/scores',require('./routes/scoreCardRoute'));


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
