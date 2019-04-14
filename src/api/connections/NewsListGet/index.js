import AuthorizedConnection from 'api/AuthorizedConnection';


class NewsList extends AuthorizedConnection {
    constructor() {
        super({
            url: '/api/news.list/',
        });
    }

    request = (data) => {
      return {
        'limit': data.limit,
        'offset': data.offset,
      }
    };

    response = (response) => {
        return response.data.data.list.map(item => {
          return {
            id: item['id'],
            title: item['title'],
          }
        });
    };
}


export default NewsList;