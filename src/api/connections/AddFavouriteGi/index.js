import AuthorizedConnection from 'api/AuthorizedConnection';


class AddFavouriteGi extends AuthorizedConnection {
    constructor() {
      super({
        url: '/api/activity.add_favorite_gi/',
      });
    }

    request = (data) => {
      return {
        'object_id': data.id,
      }
    };
}


export default AddFavouriteGi;