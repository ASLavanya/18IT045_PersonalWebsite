(function(){
    'use strict';
    angular.module('simplecal',[])
    .controller('simplecalcontroller',function($scope) {
       
            
            $scope.n1 = "";
            $scope.n2 = "";
            $scope.totalvalue = 0;
            $scope.cal=function(){
                var t=tcal();
                $scope.totalvalue=t;
            }

        
          function tcal (n1, n2) {
            if ($scope.n1 > $scope.n2) {
              return $scope.n1 - $scope.n2
            } else {
              return $scope.n2 - $scope.n1
            }
          }
        


       
});
})();