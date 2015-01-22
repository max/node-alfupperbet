'use strict';
var test        = require('ava');
var alfupperbet = require('./');

var characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

test(function (t) {
  t.assert(alfupperbet.indexOf(characters[Math.floor(Math.random() * characters.length)]) !== -1);
  t.end();
});
