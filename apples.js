(function () {
    'use strict';
      
      angular.module('filApp', [])
      .controller('filController', filController)
      .filter('likes',LikesFilter)
      .filter('likesall',LikesAllFilter);
  
      filController.$inject = ['$scope', 'likesFilter'];
      function filController($scope,likesFilter) {
        $scope.name= "";
        $scope.numberOfApples= ""; 
        $scope.address="";
        $scope.total = 0;
        $scope.cal=function()
        {
        if ($scope.numberOfApples >0) 
        {
          var t=$scope.numberOfApples * 150;
          return t;
        }
        };
        $scope.sayLikesMessage = function () {
          var msg=$scope.name;
          msg = likesFilter(msg);
          return msg;
        };
      }
      function LikesFilter(){
        return function (input) {
          input = input.replace("."," ");
          return input;
        };
      }
      })();