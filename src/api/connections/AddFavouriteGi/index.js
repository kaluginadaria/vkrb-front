import AuthorizedConnection from 'api/AuthorizedConnection';
import {methods} from '@ktx/api-connection'

class AddFavouriteGi extends AuthorizedConnection {
    constructor() {
      super({
        url: '/api/activity.add_favorite_gi/',
        method: methods.POST
      });
    }

    request = (data) => {
      return {
        'object_id': data.id,
      }
    };
}


export default AddFavouriteGi;