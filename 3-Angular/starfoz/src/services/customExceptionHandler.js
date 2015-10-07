'use strict';

starFoz.factory('$exceptionHandler', function(clientErrors) {
  return function(exception, cause) {
    return clientErrors.register({
      exception: exception,
      cause: cause,
      timestamp: new Date().getTime(),
      userAgent: navigator.userAgent,
      platform: navigator.platform
    });
  }
});