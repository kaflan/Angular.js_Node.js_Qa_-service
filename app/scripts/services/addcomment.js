'use strict';

/**
 * @ngdoc service
 * @name myRepoApp.addComment
 * @description
 * # addComment
 * Factory in the myRepoApp.
 */
angular.module('myRepoApp')
  .factory('addComment', [
    '$http',
    function($http) {
    return {
      addComment: function(input, index) {
        return $http.post('/answer/:'+ index, input);
      }
    };
  }]);
