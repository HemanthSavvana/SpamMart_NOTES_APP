'use strict';

/**
 * @ngdoc function
 * @name googleKeepApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the googleKeepApp
 */
angular.module('googleKeepApp')
  .controller('NotesCtrl', function (homePageSrv,$scope,$mdDialog,$route,SideNavSrv) {
    
    $scope.notes=[];
    $scope.allLabels= {};
    $scope.selectedLabels=[];
    SideNavSrv.getLabels()
      .then(function(response){
        $scope.allLabels=response;
      });
    homePageSrv.getNotes()
    	.then(function(response){
    		$scope.notes=response;
    	},function(data){
    		alert('Get Notes API failed');
    	});

      $scope.addLabelsToNote = function(id){
        angular.forEach($scope.allLabels,function(value,key){
          if(value.addFlag==true){
            $scope.selectedLabels.push(value.id);
            value.addFlag=false;
          }
        });
        homePageSrv.addselectedLabelsToNote(id,$scope.selectedLabels)
          .then(function(){
            $scope.selectedLabels=[];
            $route.reload();
          });

      };
    
    $scope.deleteNotes=function(id){
    	homePageSrv.deleteNote(id)
    	.then(function(response){
    		$route.reload();
    	},function(data){
    		alert('Delete Notes API failed');
    	});
      };

     $scope.editNote =function(ev,note){
     	homePageSrv.setNote(note);
     	$mdDialog.show({
      controller:EditNoteCtrl,
      templateUrl: 'views/editnote.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
     });
     };

     
    
 

	function EditNoteCtrl($scope,homePageSrv,$route,$mdDialog){
	$scope.note=homePageSrv.getNote();
    $scope.addNotesToList = function(){
    	homePageSrv.addNotesToList($scope.addNote)
    		.then(function(response){
    			$mdDialog.hide();
    			$route.reload();
    		},function(data){
    			alert('add Notes api failed');
    		});
    };
    $scope.updateNote = function(){
    	homePageSrv.updateNote($scope.note)
    		.then(function(response){
    			$mdDialog.hide();
    			$route.reload();
    		},function(){
    			alert('update note api failed');
    		});
    };
	}

  });
