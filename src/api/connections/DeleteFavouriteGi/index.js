import AuthorizedConnection from 'api/AuthorizedConnection';
import {methods} from "@ktx/api-connection";


class DeleteFavouriteGi extends AuthorizedConnection {
    constructor() {
      super({
        url: '/api/activity.delete_favorite_gi/',
          method: methods.POST
      });
    }

    request = (data) => {
      return {
        'object_id': data.id,
      }
    };
}


export default DeleteFavouriteGi;