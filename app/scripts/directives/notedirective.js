'use strict';

/**
 * @ngdoc directive
 * @name googleKeepApp.directive:noteDirective
 * @description
 * # noteDirective
 */
angular.module('googleKeepApp')
  .directive('noteDirective', function () {
    return {
      templateUrl: 'views/eachNote.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
       
      }
    };
  });
