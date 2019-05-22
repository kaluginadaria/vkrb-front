import AuthorizedConnection from 'api/AuthorizedConnection';


class ListLitGet extends AuthorizedConnection {
    constructor() {
      super({
        url: '/api/education.literature_list/',
      });
    }

    request = (data) => {
      return {
        'limit': data.limit,
        'offset': data.offset,
      }
    };

    response = (response) => {
      return response.data.data;
    };
}


export default ListLitGet;