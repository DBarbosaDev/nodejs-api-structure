const express = require('express');

const router = express.Router();

const authRouter = require('./auth.route');

router.use((req, res) => {
    res.status(404).send('Not Found');
});

router.use(authRouter);


module.exports = router;
