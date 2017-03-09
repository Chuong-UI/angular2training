const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({  
  title: String,
  content: String,
  assignedTo: {
    type: Number, 
  },
  status: {
    type: String,
    enum: ['closed', 'open', 'fixed'],
    default: 'open'
  },
  createdDay: {
    type: Date,
    default: Date.now,
    unique: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('task', taskSchema);