import { normalize } from '@ktx/api-connection';

import AuthorizedConnection from 'api/AuthorizedConnection';
import giItem from 'api/parsers/giItem';


class ListGiGet extends AuthorizedConnection {
    constructor() {
      super({
        url: '/api/activity.list_gi/',
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
        parser: giItem,
      });

      return {
        entities,
        ids,
      };
    };
}


export default ListGiGet;