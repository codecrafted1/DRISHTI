const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // filename of uploaded image
}, { timestamps: true });

module.exports = mongoose.model('Incident', incidentSchema);
