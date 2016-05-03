'use strict';

/**
 * @ngdoc service
 * @name myRepoApp.getTask
 * @description
 * # getTask
 * Factory in the myRepoApp.
 */

angular.module('myRepoApp')
  .factory('getTask', [
    '$http',
    function($http) {
      return {
        query: function() {
          return $http.get('http://localhost:8080/tasks').then(function(res) {
            return res.data;
          });
        }
      };
    }
  ]);
