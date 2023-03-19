const express = require('express').Router;

const router = express();

router.get('/events', (req, res) => {
    res.status(200).json({
        message: 'Halaman events'
    });
});

module.exports = router;