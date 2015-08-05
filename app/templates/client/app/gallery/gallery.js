'use strict';

angular.module('sampleApp')
  .config(function ($stateProvider) {
        $stateProvider
          .state('gallery', {
            url: '/gallery',
            templateUrl: 'app/gallery/gallery.html',
            controller: 'GalleryCtrl'
          })


          .state('gallery-create', {
            url: '/gallery-create',
            templateUrl: 'app/gallery/gallery.create.html',
            controller: 'GalleryCreateCtrl'
          });


  });
