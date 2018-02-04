"use strict";

angular.module('blogList',[])
    .component('blogList', {

      //  template: '<div class=""><h1 class="new-class"> {{title}} </h1><button ng-click="clickme()">click me</button></div>',
      templateUrl: '/templates/blog-list.html',  
      controller : function($routeParams, $scope) {
            console.log($routeParams);
            var blogItems = [

                    {title:'title',id:1,description:'desc...'},
                    {title:'title2',id:2,description:'desc...2'},
                    {title:'title3',id:3,description:'desc...3'},
                    {title:'title4',id:4,description:'desc...4'}
            ] 

            $scope.items = blogItems;

            $scope.title = "hi";

            $scope.clickme = function() {
              $scope.title = "clicked";
            };
        }
    })
