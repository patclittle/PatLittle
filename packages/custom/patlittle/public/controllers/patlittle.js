'use strict';

/* jshint -W098 */
angular.module('mean.patlittle').controller('PatlittleController', ['$scope', 'Global', 'Patlittle',
  function($scope, Global, Patlittle) {
    $scope.global = Global;
    $scope.package = {
      name: 'patlittle'
    };
  }
]);
