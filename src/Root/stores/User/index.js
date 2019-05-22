import Relax, { sync, async } from '@ktx/react-relax';

import UserGet from 'api/connections/UserGet';


class User extends Relax {
  constructor() {
    super();

    this.data = null;
    this.isAuthorized = null;

    this._apiUserGet = new UserGet();
  };

  @async()
  check = async () => {
    const [response, error] = await this._apiUserGet.call();

    if(response){
      this.isAuthorized = true;
      this.data = response;
    }else{
      this.isAuthorized = false;
    }
  };
}


export default User;
