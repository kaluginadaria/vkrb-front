import { normalize } from '@ktx/api-connection';

import AuthorizedConnection from 'api/AuthorizedConnection';
import newsItem from 'api/parsers/newsItem';


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
      const [entities, ids] = normalize({
        array: response.data.data.list,
        parser: newsItem,
      });

      return {
        entities,
        ids,
      };
    };
}


export default NewsList;