'use strict';

const express = require('express');
const router = new express.Router();

router.get('/', (req, res, next) => {
  res.json();
});

module.exports = router;
