const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, purpose, collaboration } = req.body;

    const newContact = new Contact({ name, phone, email, purpose, collaboration });
    await newContact.save();

    res.status(201).json({ message: 'Contact details submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
