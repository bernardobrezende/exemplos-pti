'use strict';

starFoz.filter('reverse', function() {
  return function(input) {
    console.log(input);
    return input + ' !!!!';
  }
});