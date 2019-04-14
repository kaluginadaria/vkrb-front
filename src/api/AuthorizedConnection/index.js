import ApiConnection from '@ktx/api-connection';

import oAuthStore from 'store/oAuthStore';


class AuthorizedConnection extends ApiConnection{
  constructor(...args){
    super(...args);
  }

  requestHeaders = () => {
    return {
      'Authorization': 'Bearer ' + oAuthStore.authToken,
    }
  };
}


export default AuthorizedConnection;