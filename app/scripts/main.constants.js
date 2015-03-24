angular
  .module('villagesquare')
  .constant('API_KEY', 'AIzaSyCZg2wO9dpOCT9qn8Xh2am1mbY5XTLIQqg')
  .constant('GGL_URL', 'https://www.googleapis.com/civicinfo/v2/representatives?address=')
  .constant('PARAM', '&levels=administrativeArea1&levels=country&fields=offices(name%2CofficialIndices%2Csources)%2Cofficials(address(city%2Cline1%2Cline2%2ClocationName%2Cstate%2Czip)%2Cchannels%2Cemails%2Cname%2Cparty%2Cphones%2CphotoUrl%2Curls)&key=');
