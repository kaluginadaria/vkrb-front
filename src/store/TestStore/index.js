import Relax, { async } from '@ktx/react-relax';

import TestConnection from 'api/connections/TestConnection';
// import TestConnection from 'api/connections/OauthToken';


class TestStore extends Relax{
  constructor(){
    super();

    this._apiTestConnection = new TestConnection();

    this.repos = null;
  }

  @async()
  load = async () => {
    const [response, error] = await this._apiTestConnection.call({
      sort: 'created',
    });

    if(response){
      this.repos = response;
    }
  };
}


export default TestStore;