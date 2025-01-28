const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }
    try {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized!' });
    }
};

const verifySession = (req, res, next) => {
    // Implement session verification logic here
    // This is a placeholder for session verification
    next();
};

module.exports = {
    verifyToken,
    verifySession
};