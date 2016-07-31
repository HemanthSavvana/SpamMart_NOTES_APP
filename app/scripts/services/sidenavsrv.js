'use strict';

/**
 * @ngdoc service
 * @name googleKeepApp.SideNavSrv
 * @description
 * # SideNavSrv
 * Service in the googleKeepApp.
 */
angular.module('googleKeepApp')
  .service('SideNavSrv', function ($http,getBaseUrl) {

    
    this.getLabels = function(){
			return $http.get(getBaseUrl.apiRoot+'/todo/label/')
			.then(function(data){
				return data.data;
			},function(data){
				alert('Get Labels API failed');
			});
		};

	this.deleteLabel = function(id){
		return $http.delete(getBaseUrl.apiRoot+'/todo/label/'+id+'/')
			.then(function(data){
				return data.data;
			},function(data){
				alert('Get Labels API failed');
			});
	};
	this.addLabel = function(data){
		var json={};
		json.name=data.name;
		return $http.post(getBaseUrl.apiRoot+'/todo/label/',json)
			.then(function(data){
				return data.data;
			},function(data){
				alert('Get Labels API failed');
			});
	};

  });
