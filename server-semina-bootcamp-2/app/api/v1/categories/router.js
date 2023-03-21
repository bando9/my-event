const express = require('express').Router;
// const { create } = require('./controller');

const router = express();

router.get('/categories', (req, res) => {
    const data = [
        {
            _id: 1,
            name: 'seminar',
        },
        {
            _id: 2,
            name: 'MERN'
        },
    ]
    
    res.status(200).json({
        data,
    });
});

// router.post('/categories', create);

module.exports = router;