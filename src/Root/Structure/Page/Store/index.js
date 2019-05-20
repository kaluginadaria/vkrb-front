import Relax, { async } from '@ktx/react-relax';

import GiItemGet from 'api/connections/GIItemGet';
import ListSiGet from "api/connections/ListSiGet";


class Store extends Relax {
  constructor() {
    super();

    this._apiGiItemGet = new GiItemGet();
    this._apiListSiGet = new ListSiGet();
    this.data = null;
    this.items = null;
  };

  @async()
  load = async (id) => {
    const [response, error] = await this._apiGiItemGet.call({
      id,
    });
    if(response){
      this.data = response;
    }
  };


  @async()
  loadSi = async (giId) => {
    const [response, error] = await this._apiListSiGet.call({
      giId,
    });
    if(response){
      this.items = response;
    }
  };

}


export default Store;
