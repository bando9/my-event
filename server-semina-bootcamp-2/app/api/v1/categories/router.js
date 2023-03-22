const express = require('express').Router;
const { create, index } = require('./controller');

const router = express();

router.get('/categories', index)

router.post('/categories', create);

module.exports = router;