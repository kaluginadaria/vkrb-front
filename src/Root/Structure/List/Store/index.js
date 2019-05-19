import Relax, { async } from '@ktx/react-relax';

import ListGiGet from 'api/connections/ListGiGet';
import AddFavouriteGi from 'api/connections/AddFavouriteGi';
import DeleteFavouriteGi from 'api/connections/DeleteFavouriteGi';


class Store extends Relax {
  constructor() {
    super();

    this._apiListGiGet = new ListGiGet();
    this._apiAddFavouriteGi = new AddFavouriteGi();
    this._apiDeleteFavouriteGi = new DeleteFavouriteGi();

    this.items = null;
  };

  @async()
  load = async () => {
    const [response, error] = await this._apiListGiGet.call({
      offset: 0,
      limit: 100,
    });


    if(response){
      this.items = response;
    }
  };

  @async()
  toggleFav = async (id) => {
    const entity = this.items.entities[id];

    if(entity.isFav){
      const [response] = await this._apiDeleteFavouriteGi.call({
        id,
      });

      if(response){
        entity.isFav = false;
      }
    }else{
      const [response] = await this._apiAddFavouriteGi.call({
        id,
      });

      if(response){
        entity.isFav = true;
      }
    }
  };
}


export default Store;
