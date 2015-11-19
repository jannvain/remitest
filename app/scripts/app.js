'use strict';

/**
 * @ngdoc overview
 * @name rem2App
 * @description
 * # rem2App
 *
 * Main module of the application.
 */
angular
  .module('rem2App', [
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/item', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl',
        controllerAs: 'item'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
