'use strict';

/**
 * @ngdoc function
 * @name myRepoApp.controller:QaCtrl
 * @description
 * # QaCtrl
 * Controller of the myRepoApp
 */
angular.module('myRepoApp')
  .controller('QaCtrl', [
    'getTask',
    '$scope',
    '$routeParams',
    '$location',
    '$uibModal',
    'addQustion',
    'addComment',
    function(getTask, $scope, $routeParams, $location, $uibModal, addQustion, addComment) {
       getTask.query().then(function(res){
         $scope.tasks = res;
       });
      var QA = this;
      QA.location = $location;
      $scope.task = {
        email: 'exemple@mail.com',
        description: 'loremipsumasdasdasd',
        header: 'words words words',
        name: 'admin',
        date: new Date(),
        done: false,
        comments: []
      };
      $scope.$watch('QA.location.path()', function(path) {
        $scope.statusFilter = {
          '/active': {
            done: false
          },
          '/completed': {
            done: true
          }
        }[path];
      });
      $scope.addQustion = function() {
        addQustion.qustion($scope.task).then(function(resp, status) {
          console.log(resp, status);
        });
      };

      $scope.showTask = function(task, index) {
        $uibModal.open({
          bindTocontroller: true,
          controller: [
            'addComment',
            function(addComment) {
              var $ctrl = this;
              $ctrl.task = task;
              $ctrl.index = index;
              $ctrl.comment = {
                email: 'exemple@mail.com',
                description: 'loremipsumasdasdasd',
                name: 'admin',
                date: new Date(),
              };
              $ctrl.addAnswer = function(index) {

                $ctrl.task.comments.push($ctrl.comment);
              };
            }
          ],
          controllerAs: '$ctrl',
          templateUrl: 'views/task.html'
        });
      };
    }
  ]);
