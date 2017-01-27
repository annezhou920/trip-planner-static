'use strict'

var express = require('express');
var router = express.Router();
var models = require('../models');

module.exports = router;

router.get('/', function(req, res, next){
  res.send('does this work?')
});
