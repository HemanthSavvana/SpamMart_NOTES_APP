'use strict';

/**
 * @ngdoc service
 * @name googleKeepApp.homePageSrv
 * @description
 * # homePageSrv
 * Service in the googleKeepApp.
 */
angular.module('googleKeepApp')
  .service('homePageSrv', function ($http,getBaseUrl) {

  	var currentNote = {};
    var labelClickFlag=false;
    var labelId="";
    this.setlabelId = function(id){labelId = id};
    this.getlabelId = function(){return labelId;};
    this.setlabelClickFlag = function(flag){labelClickFlag = flag};
    this.getlabelClickFlag = function(){return labelClickFlag};
  	this.setNote = function(note){currentNote = note};
  	this.getNote = function(){return currentNote};

    this.addselectedLabelsToNote = function(id,selectedLabels){
      var json={};
      json.add=selectedLabels.toString();
      return $http.post(getBaseUrl.apiRoot+'/todo/note/'+id+'/label/',json)
      .then(function(data){
        return data.data;
      },function(data){
        alert('Add Labels to Notes API failed');
      });
    };
    
    this.getNotes = function(){
    	return $http.get(getBaseUrl.apiRoot+'/todo/note/')
			.then(function(data){
				return data.data;
			},function(data){
				alert('Get Notes API failed');
			});
    };
    this.addNotesToList = function(data){
    	var json = {};
    	json.name=data.noteName.$modelValue;
    	json.body=data.noteBody.$modelValue;
    	return $http.post(getBaseUrl.apiRoot+'/todo/note/',json)
			.then(function(data){
				return data.data;
			},function(data){
				alert('Get Notes API failed');
			});
    };
    this.updateNote = function(data){
    	var json={};
    	json.name=data.name;
    	json.body=data.body;
    	return $http.post(getBaseUrl.apiRoot+'/todo/note/'+data.id + '/',json)
			.then(function(data){
				return data.data;
			},function(data){
				alert('Get Notes API failed');
			});
    };

    this.deleteNote = function(id){
    	return $http.delete(getBaseUrl.apiRoot+'/todo/note/'+id + '/')
			.then(function(data){
				return data.data;
			},function(data){
				alert('Delete Notes API failed');
			});
    };


  });
