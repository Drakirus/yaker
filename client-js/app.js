﻿(function () {
  'use strict';

  angular
    .module('app', ['ngRoute', 'ngCookies', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .config(config)
    .run(run);

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: 'home/home.view.html',
        controllerAs: 'vm'
      })

      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'login/login.view.html',
        controllerAs: 'vm'
      })

      .when('/register', {
        controller: 'RegisterController',
        templateUrl: 'register/register.view.html',
        controllerAs: 'vm'
      })

      .when('/playsolo', {
        controller: 'SoloGameController',
        templateUrl: 'sologame/sologame.view.html',
        controllerAs: 'vm'
      })

      .when('/multi', {
        controller: 'MultiController',
        templateUrl: 'multi/multi.view.html',
        controllerAs: 'vm'
      })

      .otherwise({ redirectTo: '/login' });
  }

  function in_array(needle, haystack){
    var found = 0;
    for (var i=0, len=haystack.length;i<len;i++) {
      if (haystack[i] == needle) return i;
      found++;
    }
    return -1;
  }

  run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
  function run($rootScope, $location, $cookies, $http) {
    $rootScope.backend = "https://api.yaker.drakirus.xyz"
    $rootScope.backendWs = "wss://ws.yaker.drakirus.xyz"
    // DEV
    // $rootScope.backend = "http://localhost:8000"
    // $rootScope.backendWs = "ws://localhost:8000"
    // keep user logged in after page refresh
    $rootScope.globals = $cookies.getObject('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Token ' + $rootScope.globals.currentUser.token;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      var restrictedPage = ['/login', '/register'].indexOf( $location.path() ) === -1;
      var loggedIn = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
        $location.path('/login');
      }
    });
  }

})();
