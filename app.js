(function(){
  'use strict';

  angular.module('LunchChecker',[])
        .controller('LunchCheckController', LunchCheckController)
        .$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchItems = "";
    $scope.responseMessage = "";
    $scope.alertState = "";

    function getMenuItemsCount(string){
      var itemCount = 0;
      var stringArray = string.split(',');
      for (var i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].replace(/ /g,'');
        if(stringArray[i].length >0) itemCount++;
      }
      return itemCount;
    };

     $scope.checkIfTooMuch = function(){

       switch (getMenuItemsCount($scope.lunchItems)){

         case 0:
           $scope.responseMessage = 'Please enter data first';
           $scope.alertState = 'danger';
           break;
         case 1:
         case 2:
         case 3:
           $scope.responseMessage = 'Enjoy!';
           $scope.alertState = 'success';
           break;
         default:
           $scope.responseMessage = 'Too much!';
           $scope.alertState = 'warning';
       }
    };
  };
})();
