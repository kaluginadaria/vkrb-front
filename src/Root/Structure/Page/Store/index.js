import Relax, { async } from '@ktx/react-relax';

import GiItemGet from 'api/connections/GIItemGet';
import ListSiGet from "api/connections/ListSiGet";
import AddFavouriteSi from 'api/connections/AddFavouriteSi';
import DeleteFavouriteSi from 'api/connections/DeleteFavouriteSi';


class Store extends Relax {
  constructor() {
    super();

    this._apiGiItemGet = new GiItemGet();
    this._apiListSiGet = new ListSiGet();
    this.data = null;
    this.items = null;

    this._apiAddFavouriteSi = new AddFavouriteSi();
    this._apiDeleteFavouriteSi = new DeleteFavouriteSi();
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

  @async()
  toggleFav = async (id) => {
    const entity = this.items.entities[id];

    if(entity.isFav){
      const [response] = await this._apiDeleteFavouriteSi.call({
        id,
      });

      if(response){
        entity.isFav = false;
      }
    }else{
      const [response] = await this._apiAddFavouriteSi.call({
        id,
      });

      if(response){
        entity.isFav = true;
      }
    }
  };
}


export default Store;
