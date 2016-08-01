'use strict';

/**
 * @ngdoc service
 * @name googleKeepApp.getBaseUrl
 * @description
 * # getBaseUrl
 * Value in the googleKeepApp.
 */
angular.module('googleKeepApp')
  .factory('setTokenInterceptor', function($location,$q) {
		return {
		    request: function(config) {
		    	var defer = $q.defer();
		      
		      if(!config.url.includes('login')){
		      	config.headers = config.headers || {};
				  if(localStorage.getItem("token")){
				  	config.headers.Authorization = 'Token ' + localStorage.getItem("token");
				  	return config;
				  } else {
				  	defer.reject(config);
				  	$location.path('/');
				  }
			   }
			  return config;
		    }
  	};
});


