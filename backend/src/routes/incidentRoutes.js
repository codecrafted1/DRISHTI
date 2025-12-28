const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');
const multer = require('multer');
const path = require('path');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, location, time, description } = req.body;
    const image = req.file ? req.file.filename : null;

    const newIncident = new Incident({ name, location, time, description, image });
    await newIncident.save();

    res.status(201).json({ message: 'Incident reported successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
