import Relax, { async, sync } from '@ktx/react-relax';

import OauthToken from 'api/connections/OauthToken';


class OAuthStore extends Relax{
  constructor(){
    super();

    this._apiOauthToken = new OauthToken();

    this.isAuthorized = null;
    this.token = null;
  }

  @async()
  auth = async (email, password) => {
    const [response, error] = await this._apiOauthToken.call({
      // userName: 'admin@admin.com',
      userName: email,
      // password: 'jWWzgyfh',
      password: password,
      grantType: 'password',
    });

    if(response){
      this.isAuthorized = true;
      this.token = response.entity.accessToken;
      window.localStorage.setItem('AUTH_TOKEN', this.token);
    }
  };

  @sync()
  unAuth = () => {
    this.isAuthorized = false;
    this.token = null;
    window.localStorage.removeItem('AUTH_TOKEN');
  };

  @sync()
  checkIsAuth = () => {
    const hasToken = window.localStorage.hasOwnProperty('AUTH_TOKEN');
    this.isAuthorized = hasToken;

    if(hasToken){
      this.authToken = window.localStorage.getItem('AUTH_TOKEN');
    }
  };
}


export default new OAuthStore();