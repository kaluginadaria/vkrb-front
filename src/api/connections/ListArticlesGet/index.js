import AuthorizedConnection from 'api/AuthorizedConnection';


class ListArticlesGet extends AuthorizedConnection {
    constructor() {
      super({
        url: '/api/education.science_article_list/',
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


export default ListArticlesGet;