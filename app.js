(function(){
    'use strict';
    angular.module("mainApp", [])  
    .controller('appleController', function($scope) {
            $scope.name= "";
            $scope.numberOfApples= "";
            $scope.address="";
            $scope.total = 0;
            $scope.cal=function(){
                var t=calTotal();
                $scope.total=t;
            }
            function calTotal (numberOfApples) {
                if ($scope.numberOfApples >0) {
                  return $scope.numberOfApples * 150
                }
              }
         });
        })();