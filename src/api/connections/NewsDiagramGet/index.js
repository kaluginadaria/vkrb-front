import AuthorizedConnection from 'api/AuthorizedConnection';


class NewsDiagramGet extends AuthorizedConnection {
    constructor() {
      super({
        url: '/api/news.diagram/',
      });
    }

    request = (data) => {
      return {
        'limit': data.limit,
      }
    };

    response = (response) => {
      return response.data.data;
    };
}


export default NewsDiagramGet;