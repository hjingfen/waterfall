'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.page = 0;
    $scope.items = [];
    $scope.isLoading = false;

    $scope.getMore = function() {
      $scope.page++;
      var items = getData();
      $scope.items = $scope.items.concat(items);
    };

    function getData() {
      if($scope.page < 10){
        //return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20].map(function(item) {
        //  return {title: 100 * $scope.page + item};
        //})
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (item) {
          return {src: '../images/'+ item + '.jpg'};
        });
      }else {
        $scope.finished = true;
      }
    }
  });
