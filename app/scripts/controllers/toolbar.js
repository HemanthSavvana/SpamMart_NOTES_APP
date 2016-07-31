'use strict';

/**
 * @ngdoc function
 * @name googleKeepApp.controller:ToolbarCtrl
 * @description
 * # ToolbarCtrl
 * Controller of the googleKeepApp
 */
angular.module('googleKeepApp')
  .controller('ToolbarCtrl', function ($scope,$location,$mdDialog,homePageSrv,$window) {
    $scope.showAllNotes = function(){
    	$location.path('/home');
    };
    
    $scope.logOut = function(){
      localStorage.removeItem("token");
      $window.location.reload();
    };
    
    $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller:AddnotetolistCtrl,
      templateUrl: 'views/addnote.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
     });
  };

	function AddnotetolistCtrl($scope,homePageSrv,$mdDialog,$location,$route){
		$scope.addNote={};
    $scope.addNotesToList = function(){
    	homePageSrv.addNotesToList($scope.addNote)
    		.then(function(response){
    			$mdDialog.hide();
    			$route.reload();
    		},function(data){
    			alert('add Notes api failed');
    		});
    };
	}
  });
