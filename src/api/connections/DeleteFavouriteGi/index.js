import AuthorizedConnection from 'api/AuthorizedConnection';


class DeleteFavouriteGi extends AuthorizedConnection {
    constructor() {
      super({
        url: '/api/activity.delete_favorite_gi/',
      });
    }

    request = (data) => {
      return {
        'object_id': data.id,
      }
    };
}


export default DeleteFavouriteGi;