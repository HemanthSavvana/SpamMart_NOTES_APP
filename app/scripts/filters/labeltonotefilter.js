'use strict';

/**
 * @ngdoc filter
 * @name googleKeepApp.filter:labelToNoteFilter
 * @function
 * @description
 * # labelToNoteFilter
 * Filter in the googleKeepApp.
 */
angular.module('googleKeepApp')
  .filter('labelToNoteFilter', function () {
    return function (input,id) {
    	var notes=[];
      angular.forEach(input,function(value,key){
      	angular.forEach(value.labels,function(obj,key){
          if(obj.id==id.id){
            notes.push(value);
          }
        });
      });
      return notes;
    };
  });
