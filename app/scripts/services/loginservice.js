'use strict';

/**
 * @ngdoc service
 * @name googleKeepApp.loginService
 * @description
 * # loginService
 * Service in the googleKeepApp.
 */
angular.module('googleKeepApp')
  .service('loginService', function ($http,getBaseUrl) {
    var loggedIn=false;
    this.setLoggedIn = function(flag){loggedIn = flag;};
    this.getLoggedIn = function(){return loggedIn;};
    this.logIn = function(data){
      var json={};
      json.username=data.userName;
      json.password=data.password;
      return $http.post(getBaseUrl.apiRoot+'/auth/login/',json)
      .then(function(data){
        return data.data;
      },function(data){
        alert('Add Labels to Notes API failed');
      });

    }
  });
