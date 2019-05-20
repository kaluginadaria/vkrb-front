import {normalize} from '@ktx/api-connection';

import AuthorizedConnection from 'api/AuthorizedConnection';
import siItem from 'api/parsers/siItem';


class ListSiGet extends AuthorizedConnection {
    constructor() {
        super({
            url: '/api/activity.list_si/',
        });
    }

    request = (data) => {
        return {
            'gi': data.giId,
            'limit': data.limit,
            'offset': data.offset,
        }
    };

    response = (response) => {
        const [entities, ids] = normalize({
            array: response.data.data.list,
            parser: siItem,
        });

        return {
            entities,
            ids,
        };
    };
}


export default ListSiGet;