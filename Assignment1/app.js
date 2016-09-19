(function () {
'use strict';
angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.input= "";
  $scope.message = "";
  $scope.check = function () {
  var tokens = $scope.input.split(",");
  var length = 0;
  var index;
  for(index = 0 ; index < tokens.length;index++)
    if(tokens[index].trim().length > 0)
      length++;
  if(length == 0)
    $scope.message = "Please enter data first";
  else if(length <= 3)
    $scope.message = "Enjoy!";
  else if (length > 3)
    $scope.message = "Too much!";
  }
});

})();
