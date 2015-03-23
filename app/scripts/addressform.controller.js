angular
  .module('villagesquare')
  .controller ('AddressFormCtrl', AddressFormCtrl)


  function AddressFormCtrl ($http, API_KEY, GGL_URL) {
    var vm = this;

    vm.getAddress = function () {
      var key     = '&key=' + API_KEY,
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
            .success(function(response){
              console.log(response);
            }).error(console.log("error!"))

            return jsonUrl;
     }
  }
