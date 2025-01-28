const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controllers');
const { verifyToken, verifySession } = require('../middlewares/users.middlewares');

router.post('/signUp', usersController.signUp);
router.post('/signIn', usersController.signIn);
router.get('/dashboard', verifyToken, verifySession, (req, res) => {
    res.send('Welcome to the dashboard!');
});

module.exports = router;