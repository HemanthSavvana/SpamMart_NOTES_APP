'use strict';

/**
 * @ngdoc service
 * @name googleKeepApp.everyhttpBlocker
 * @description
 * # everyhttpBlocker
 * Factory in the googleKeepApp.
 */
angular.module('googleKeepApp')
  .factory('everyhttpBlocker', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
