angular.module('myApp')
.controller('ctrl', function ($scope, mainService) {
  mainService.test().then(function (res) {
    $scope.test = res.data[0].value;
  })
})
