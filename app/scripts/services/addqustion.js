'use strict';

/**
 * @ngdoc service
 * @name myRepoApp.addQustion
 * @description
 * # addQustion
 * Factory in the myRepoApp.
 */
angular.module('myRepoApp')
  .factory('addQustion', [
    '$http',
    function($http) {
      return {
        qustion: function(input) {
          return $http.post('/new', input);
        }
      };
    }
  ]);
