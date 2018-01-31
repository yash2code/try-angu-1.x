"use strict";

angular.module('blogList')
    .component('blogList', {

        template: '<div class=""><h1 class="new-class"> {{title}} </h1><button ng-click="clickme()">click me</button></div>',
        controller : function($scope) {
            $scope.title = "hi";

            $scope.clickme = function() {
              $scope.title = "clicked";
            };
        }
    })
