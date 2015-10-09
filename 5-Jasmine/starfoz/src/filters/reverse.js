'use strict';

starFoz.filter('reverse', function() {
  return function(input) {

    String.prototype.customReverse = function() {
      return this.split("").reverse().join("");
    };

    // Array.prototype.reverse
    return input.customReverse();
  }
});
/*
function validaCPF(str) {
  return new RegEx("([0-9]{3}.?){3}-[0-9]{2}").test(str);
};

String.prototype.validaCPF = function() {
  return new RegEx("([0-9]{3}.?){3}-[0-9]{2}").test(this);
};
*/