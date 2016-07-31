'use strict';

/**
 * @ngdoc function
 * @name googleKeepApp.controller:SidenavCtrl
 * @description
 * # SidenavCtrl
 * Controller of the googleKeepApp
 */
angular.module('googleKeepApp')
  .controller('SidenavCtrl', function (SideNavSrv,$scope,$mdDialog,homePageSrv,$location,$window) {
    $scope.labels=[];
    $scope.newLabel={};
    $scope.flag=false;
    SideNavSrv.getLabels()
    	.then(function(response){
    		$scope.labels=response;
    	},function(data){
    		alert('failed');
    	});

    $scope.labelToNote = function(id){
    	homePageSrv.setlabelId(id);
    	homePageSrv.setlabelClickFlag(!homePageSrv.getlabelClickFlag());
    	$location.path('/label/'+id.id+'/'+homePageSrv.getlabelClickFlag());
    };

    $scope.deleteLabel = function(id){
    	SideNavSrv.deleteLabel(id)
    		.then(function(response){
    		$window.location.reload();
    		});
    };
    $scope.showInputForLabel = function(){
    	$scope.flag=true;
    };
    $scope.cancelLabel = function(){
    	$scope.flag=false;
    };

    $scope.addLabel = function(){

    	SideNavSrv.addLabel($scope.newLabel)
    			.then(function(response){
    				$scope.flag=false;
    				$scope.newLabel={};
    				$window.location.reload();
    			});
	};

  });
