const express = require('express').Router;
const { create, index, find, update, destroy } = require('./controller');

const router = express();

router.get('/categories', index)

router.post('/categories', create);

router.get('/categories/:id', find);

router.delete('/categories/:id', destroy);

router.put('/categories/:id', update);

module.exports = router;