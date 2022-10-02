const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskScheme = new Schema({
  text: {
    type: String, 
    required: true 
  },
  isCheck: Boolean
});

module.exports = Task = mongoose.model('Tasks', taskScheme);