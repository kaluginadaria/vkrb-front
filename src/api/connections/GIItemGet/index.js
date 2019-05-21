import {normalize} from '@ktx/api-connection';

import AuthorizedConnection from 'api/AuthorizedConnection';
import giItem from 'api/parsers/giItem';


class GiItemGet extends AuthorizedConnection {
    constructor() {
        super({
            url: '/api/activity.get_gi/',
        });
    }

    request = (data) => {
        return {
            'id': data.id
        }
    };

    response = (response) => {
        return  giItem(response.data.data);
    };
}


export default GiItemGet;