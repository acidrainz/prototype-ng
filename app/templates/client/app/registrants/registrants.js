'use strict';

angular.module('sampleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('registrants', {
        url: '/registrants',
        templateUrl: 'app/registrants/registrants.html',
        controller: 'RegistrantsCtrl'
      });
  });