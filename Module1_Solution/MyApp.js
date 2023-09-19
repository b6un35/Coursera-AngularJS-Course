(function () {
    'use strict';
    angular.module('LunchCheckerApp', [])
    .controller('LunchCheckerController', LunchCheckerController)
    LunchCheckerController.$inject = ['$scope'];

    function LunchCheckerController($scope) {
        
        $scope.CheckLunch = function () {
            
            var currentItems = $scope.LunchItems;
            if (currentItems) {
                var currentItemsCount = SplitAndCheckCount(currentItems);
                if (currentItemsCount <= 3) {
                    $scope.Response = "Enjoy!";
                }
                else {
                    $scope.Response = "Too much!";
                }
            } else
            {
                $scope.Response = "Please enter data first";
            }
            
        }
        function SplitAndCheckCount(string) {
            const myarray = string.split(',');
            return myarray.length;
                  
        }
    }
    
})();

// (function () {
//     'use strict';
//     angular.module('LunchCheckerApp', [])
//     .controller('LunchCheckerController', function ($scope) {

//         $scope.CheckLunch = function () {
//             console.log($scope.LunchItems);
//             var currentItems = $scope.LunchItems;
//             if (currentItems) {
//                 var currentItemsCount = SplitAndCheckCount(currentItems);
//                 if (currentItemsCount <= 3) {
//                     $scope.Response = "Bon apetité dear.";
//                 }
//                 else {
//                     $scope.Response = "bit much, no?";
//                 }
//             } else
//             {
//                 $scope.Response = "You Must eat something, it's not likely to be healthy this way.";
//             }
            
//         }
//         function SplitAndCheckCount(string) {
//             const myarray = string.split(',');
//             return myarray.length;
                  
//         }
//     });
    
// })();