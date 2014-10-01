var Roshambo = require('./roshambo');
var inquirer = require('inquirer');
var _ = require('lodash');

(function() {
  'use strict';
  var shapes = Roshambo.prototype.shapes;

  inquirer.prompt({
    type: 'list',
    message: 'Ready?',
    name: 'shape',
    choices: shapes
  }, function(answers) {
    var shape = _.indexOf(shapes, answers.shape);
    var rps = new Roshambo(shape);

    console.log('You played', rps.shapes[rps.playerA]);
    console.log('They played', rps.shapes[rps.playerB]);

    console.log('>', rps.outcome());
  });

})();
