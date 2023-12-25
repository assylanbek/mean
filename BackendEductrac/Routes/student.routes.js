const express = require('express');
const studentRoutes = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { auth } = require('../Middleware/Authmiddleware');
const { ModelStudent } = require('../Models/Studentmodel');






// Student signup
studentRoutes.post('/signup', async (req, res) => {
  try {
    const { name, gender, dateOfBirth, email, contactNumber, password } = req.body;

    // Check if the email already exists
    const existingStudent = await ModelStudent.findOne({ email });

    if (existingStudent) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new instructor
    const student = new ModelStudent({
      name,
      gender,
      dateOfBirth,
      email,
      contactNumber,
      password: hashedPassword,
    });

    await student.save();

    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Student login
studentRoutes.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the instructor exists
    const student = await ModelStudent.findOne({ email });

    if (!student) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, student.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create a JSON Web Token (JWT) for authentication
    const token = jwt.sign(
      { email: student.email, id: student._id },
      'masai', 
      { expiresIn: '1h' }
    );
    console.log('token',token)
    res.status(200).json({ token, student });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = {studentRoutes};