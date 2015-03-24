angular
  .module('villagesquare')
  .controller ('AddressFormCtrl', AddressFormCtrl)


  function AddressFormCtrl ($http, API_KEY, PARAM, GGL_URL, $rootScope) {
    var vm = this;

    vm.getAddress = function () {
      var key     = PARAM + API_KEY,
          re      = / /g,
          re1      = / ,/g,
          re2      = /,/g,
          street  = vm.newAddress.street.replace(re, '+').replace(re1, '+').replace(re2, '+'),
          city    = vm.newAddress.city,
          state   = vm.newAddress.state,
          zip     = vm.newAddress.zip,
          address = street + '+' + city + '+' + state + '+' + zip,
          baseUrl = GGL_URL,
          jsonUrl = baseUrl + address + key;

          console.log(jsonUrl);

          $http
            .get(jsonUrl)
            .success(function(data){
              $rootScope.data = data;
              console.log(data);
              console.log(data.offices[0].name);
              console.log(data.officials[0].name);
              console.log(data.officials[0].party);
              console.log(data.officials[2].channels[1].id);
            }).error(console.log("error!"))

            // return jsonUrl;
     }
  }
