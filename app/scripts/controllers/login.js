'use strict';

/**
 * @ngdoc function
 * @name googleKeepApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the googleKeepApp
 */
angular.module('googleKeepApp')
  .controller('LoginCtrl', function ($scope,loginService,$location,$rootScope) {
    $scope.user={};
    $scope.loggedIn = localStorage.getItem("token");
    $scope.logIn = function(){
    	loginService.logIn($scope.user)
    		.then(function(response){
    			localStorage.setItem("token", response.Token);
    			loginService.setLoggedIn(true);
    			$scope.loggedIn = loginService.getLoggedIn();
    			$scope.loggedIn = localStorage.getItem("token");
				$location.path('/home');
    		},function(){
    			alert('Login Failed');
    		});
    };
  });
