'use strict';

/**
 * @ngdoc overview
 * @name googleKeepApp
 * @description
 * # googleKeepApp
 *
 * Main module of the application.
 */
angular
  .module('googleKeepApp', [
    'ngRoute','ngMaterial','ngMaterialSidemenu','ngMdIcons','angular-loading-bar'
  ])
  .config(function ($routeProvider,$httpProvider,cfpLoadingBarProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/noteContent.html',
        controller: 'NotesCtrl'
      })
      .when('/label/:id/true',{
        templateUrl : 'views/labelToNote.html',
        controller : 'LabeltonoteCtrl'
      })
      .when('/label/:id/false',{
        redirectTo: '/home'
      })
      .otherwise({
        redirectTo: '/'
      });
      cfpLoadingBarProvider.includeSpinner = false;
      $httpProvider.defaults.headers.common.Authorization = 'Token 6aa00fc27f93fa704d08cf14bbd411634700627e';
      $httpProvider.interceptors.push('getBaseUrl');
      $httpProvider.interceptors.push('setTokenInterceptor');
      
  });
