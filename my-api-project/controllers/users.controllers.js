const User = require('../models/users.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    try {
        const { userName, userRole, userPassword } = req.body;

        const customerId = `CUS${Date.now()}`;
        const roodId = Math.floor(Math.random() * 10) + 1; // Random room ID between 1 and 10
        const hashedPassword = await bcrypt.hash(userPassword, 10);

        const newUser = new User({
            customerId,
            userName,
            userRole,
            userStayOnline: false,
            roodId,
            userPassword: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', customerId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

const signIn = async (req, res) => {
    try {
        const { customerId, userPassword, stayOnline } = req.body;
        const user = await User.findOne({ customerId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(userPassword, user.userPassword);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ customerId: user.customerId }, process.env.JWT_SECRET, {
            expiresIn: stayOnline ? '1h' : '50m'
        });

        res.status(200).json({ message: 'Sign in successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error signing in', error });
    }
};

module.exports = {
    signUp,
    signIn
};