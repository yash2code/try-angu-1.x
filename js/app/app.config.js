"use strict";

angular.module("try",['ngRoute','blogDetail','blogList'])
    .config(function(
        $locationProvider,
        $routeProvider
    ) {
        $locationProvider.html5Mode({enabled:true});
        $routeProvider
          .when("/", { template: "<blog-list></blog-list>" })
          .when("/about", { templateUrl: "templates/about.html" })
          .when("/blog/:id", { template: "<blog-detail></blog-detail>" })
          /* .when("/blog/2", {
                template: '<blog-list></blog-list>'
            }) */
          .otherwise({ template: "Not found" });
        
    });
