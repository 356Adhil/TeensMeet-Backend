const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const participantSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  contact: { type: String, required: true },
  points: { type: Number, default: 0 }
});

module.exports = mongoose.model('Participant', participantSchema);
