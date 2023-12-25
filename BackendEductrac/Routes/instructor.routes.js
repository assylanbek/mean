




const express = require('express');
const instructorRoutes = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {Instructormodel} = require('../Models/instructorModel');
const { auth } = require('../Middleware/Authmiddleware');



// Protected route example

// Instructor signup
instructorRoutes.post('/signup', async (req, res) => {
  try {
    const { name, gender, dateOfBirth, department, email, contactNumber, password } = req.body;

    // Check if the email already exists
    const existingInstructor = await Instructormodel.findOne({ email });

    if (existingInstructor) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new instructor
    const instructor = new Instructormodel({
      name,
      gender,
      dateOfBirth,
      department,
      email,
      contactNumber,
      password: hashedPassword,
    });

    await instructor.save();

    res.status(201).json({ message: 'Instructor registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Instructor login
instructorRoutes.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the instructor exists
    const instructor = await Instructormodel.findOne({ email });

    if (!instructor) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, instructor.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create a JSON Web Token (JWT) for authentication
    const token = jwt.sign(
      { email: instructor.email, id: instructor._id },
      'masai', // Replace with your secret key
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, instructor });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = {instructorRoutes};