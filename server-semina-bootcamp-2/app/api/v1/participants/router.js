const express = require('express').Router;

const router = express();

router.get('/participants', (req, res) => {
    res.status(200).json({
        message: 'Halaman participants'
    })
})

module.exports = router;