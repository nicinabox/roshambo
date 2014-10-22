var Roshambo = require('./roshambo');
var inquirer = require('inquirer');
var _ = require('lodash');
var colors = require('colors');

(function() {
  'use strict';
  var shapes = Roshambo.prototype.shapes;

  var play = function() {
    inquirer.prompt({
      type: 'list',
      message: 'Ready?',
      name: 'shape',
      choices: shapes
    }, function(answers) {
      result(answers.shape);
      _.delay(play, 1500);
    });
  };

  var result = function(shape) {
    var index = _.indexOf(shapes, shape);
    var rps   = new Roshambo(index);

    console.log('You played', rps.shapes[rps.playerA]);
    console.log('They played', rps.shapes[rps.playerB]);

    var colors = ['gray', 'green', 'red'];
    console.log('> ' + rps.outcome()[colors[rps.result]]);
  };

  play();
})();
