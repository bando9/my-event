const express = require('express').Router;

const router = express();

router.get('/ticket-categories', (req, res) => {
    res.status(200).json({
        message: 'Halaman ticket categories'
    });
});

module.exports = router;