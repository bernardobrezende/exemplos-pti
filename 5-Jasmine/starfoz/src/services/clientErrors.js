'use strict';

starFoz.service('clientErrors', function(apiInfo) {
  this.register = function(error) {

    $.ajax({
      type: 'POST',
      url: apiInfo.baseUrl + '/clientErrors',
      data: error
    });

  };
});