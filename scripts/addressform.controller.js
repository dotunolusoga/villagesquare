angular
  .module('villagesquare')
  .controller ('AddressFormCtrl', AddressFormCtrl)


  function AddressFormCtrl ($http, API_KEY, PARAM, GGL_URL, $rootScope, $location) {
    var vm = this,
    dataKey = {},

    whiteHouse = [];


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
              for (var i in data.offices) {
                  var checkOffice = data.offices[i].officialIndices;
                  for (var k in checkOffice) {
                    dataKey[checkOffice[k]] = [];
                    dataKey[checkOffice[k]].office = data.offices[i];
                    dataKey[checkOffice[k]].officials = data.officials[checkOffice[k]];
                  }
                  $rootScope.dataKey = dataKey;
                  console.log(dataKey);
              }
            })
      $location.path('/profiles');
     }
  }
