'use strict';

angular.module('mean.patlittle').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('patlittle example page', {
      url: '/patlittle/example',
      templateUrl: 'patlittle/views/index.html'
    });
  }
]);
angular.module('mean.patlittle')
.config(['$viewPathProvider', function($viewPathProvider) {
  $viewPathProvider.override('system/views/index.html', 'patlittle/views/index.html');
}]);
