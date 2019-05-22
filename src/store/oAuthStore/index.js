import Relax, { async, sync } from '@ktx/react-relax';

import OauthToken from 'api/connections/OauthToken';
import UserGet from 'api/connections/UserGet';


class OAuthStore extends Relax{
  constructor(){
    super();

    this._apiOauthToken = new OauthToken();
    this._apiUserGet = new UserGet();

    this.isAuthorized = null;
    this.token = null;
    this.data = null;
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
      this.loadUser();
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
      this.loadUser();
    }
  };

  @async()
  loadUser = async () => {
    const [ response ] = await this._apiUserGet.call();

    if(response){
      this.data = response;
    }
  }
}


export default new OAuthStore();