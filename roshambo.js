// var rps = new Roshambo(shape)
// console.log(rps.outcome());

(function() {
  'use strict';
  var Roshambo, random;

  random = function (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  Roshambo = function(input) {
    this.playerA = input || 0;
    this.playerB = random(0, 2);
    this.result  = this.fight();

    return this;
  };

  Roshambo.prototype = {
    shapes: [
     'rock', 'paper', 'scissors'
    ],

    outcomes: [
      'Draw!', 'You won!', 'You lost!'
    ],

    fight: function() {
      return (3 + this.playerA - this.playerB) % 3;
    },

    outcome: function() {
      return this.outcomes[this.result];
    }
  };

  if (module && module.exports) {
    module.exports = Roshambo;
  } else {
    window.Roshambo = Roshambo;
  }
})();
