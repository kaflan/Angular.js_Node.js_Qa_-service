'use strict';

/**
 * @ngdoc overview
 * @name myRepoApp
 * @description
 * # myRepoApp
 *
 * Main module of the application.
 */
angular
  .module('myRepoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    var routeConfig = {
      templateUrl: 'views/state.html',
      controller: 'QaCtrl',
      controllerAs: 'qa'
    };
    $routeProvider
    .when('/', routeConfig)
    .when('/:state', routeConfig)
    .otherwise({
        redirectTo: '/'
      });
  });
