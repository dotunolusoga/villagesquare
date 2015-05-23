angular
  .module('villagesquare')

  .config(squareConfig);

function squareConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeController',
      controllerAs: 'home'
  })
    .when('/submit', {
      templateUrl: 'addressform.html',
      controller: 'AddressFormCtrl',
      controllerAs: 'address'
    })
    .when('/profiles', {
      templateUrl: 'profiles.html',
      controller: 'AddressFormCtrl',
      controllerAs: 'address'
    })
    .otherwise({
			redirectTo: '/home'
		})
}
