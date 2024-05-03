const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/myproject';

async function connectDB() {
      try {
        await mongoose.connect('mongodb://localhost:27017/myproject', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
      }
    }

module.exports =connectDB;