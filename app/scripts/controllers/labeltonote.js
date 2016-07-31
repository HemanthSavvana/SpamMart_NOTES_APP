'use strict';

/**
 * @ngdoc function
 * @name googleKeepApp.controller:LabeltonoteCtrl
 * @description
 * # LabeltonoteCtrl
 * Controller of the googleKeepApp
 */
angular.module('googleKeepApp')
  .controller('LabeltonoteCtrl', function (homePageSrv,$scope,$filter) {
    
    $scope.notes={};
    $scope.id=homePageSrv.getlabelId();
    $scope.actualFlagInTemp=homePageSrv.getlabelClickFlag();
    homePageSrv.getNotes()
    	.then(function(response){
    		
    		$scope.notes=$filter('labelToNoteFilter')(response,$scope.id);
    	},function(data){
    		alert('Get Notes API failed');
    	});
    

  });
