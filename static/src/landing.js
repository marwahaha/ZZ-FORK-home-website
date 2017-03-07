angular.module('landing', [
    'ngRoute',
    'ngMessages'
])

    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "landing.tpl.html",
            controller: "LandingPageCtrl"
        })
    })

    .config(function ($routeProvider) {
        $routeProvider.when('/landing/:landingPageName', {
            templateUrl: "landing.tpl.html",
            controller: "LandingPageCtrl"
        })
    })

    .config(function ($routeProvider) {
        $routeProvider.when('/wood', {
            templateUrl: "wood.tpl.html",
            controller: "WoodPageCtrl"
        })
    })





    .config(function ($routeProvider) {
        $routeProvider.when('/page-not-found', {
            templateUrl: "page-not-found.tpl.html",
            controller: "PageNotFoundCtrl"
        })
    })

    .controller("PageNotFoundCtrl", function($scope){
        console.log("PageNotFound controller is running!")

    })

    .controller("WoodPageCtrl", function($scope){
        console.log("WoodPageCtrl controller is running!")

    })


    .controller("LandingPageCtrl", function ($scope,
                                             $document,
                                             $location,
                                             $rootScope,
                                             $mdDialog,
                                             $timeout) {

        console.log("i am the landing page ctrl")
        var about = angular.element(document.getElementById('faq'));


        var scrollToFaq =  function(){
            console.log("scroll to about!", about)
            $document.scrollToElement(about, 0, 1000);
        }


        $scope.scrollToAbout = scrollToFaq

        console.log("location.search", $location.search())
        if ($location.search().faq){
            $timeout(scrollToFaq, 500)
        }

        $scope.scrollToTop = function(){
            console.log("scroll to top.")
            $document.scrollTop(0, 1000)
        }

        $scope.fxAddon = function($event){

            $mdDialog.show({
              controller: function($scope, $mdDialog){
                  console.log("dialog ctrl!")
                  $scope.cancel = function(){
                      $mdDialog.cancel()
                  }
              },
              templateUrl: 'firefox-coming-soon.tpl.html',
              targetEvent: $event,
              clickOutsideToClose:true
            })

            $event.preventDefault()


        }

    })










