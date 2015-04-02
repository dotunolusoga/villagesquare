angular
  .module('villagesquare')

  .config(squareConfig);

function squareConfig($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: '/app/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
  })
    .when('/submit', {
      templateUrl: '/app/addressform.html',
      controller: 'AddressFormCtrl',
      controllerAs: 'address'
    })
    .when('/profiles', {
      templateUrl: '/app/profiles.html',
      controller: 'AddressFormCtrl',
      controllerAs: 'address'
    })
    .otherwise({
			redirectTo: '/home'
		})
}
