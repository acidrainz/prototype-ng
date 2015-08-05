
(function(){
      'use strict'
      var controller = (function(){
               var vm;
               var userService;
               controller.$inject = ['UserService'];
               function controller(UserService){
                  vm =this;
                  userService = UserService;

              }

              controller.prototype.submitPost = function(){

                    userService.addUser(vm.data)
                      .success(function(data, status, headers, config){
                          console.log(data);
                      })
                      .error(function(data, status, headers, config){
                        console.log('error');
                      });
              }

              return controller;

      })();




      angular
          .module('sampleApp')
          .controller('GalleryCreateCtrl',controller);



})();
