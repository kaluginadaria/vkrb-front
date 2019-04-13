import ApiConnection, {normalize} from '@ktx/api-connection';

import oAuthStore from 'store/oAuthStore'

class NewsList extends ApiConnection {
    constructor() {
        super({
            url: 'http://127.0.0.1:8000/api//news.list/',
        });
    }

    request = (data) => {
        return {
            'sort': data.sort,
        }
    };

    requestHeaders = (data) => {
        const authToken = oAuthStore.token
        return {
            'Authorization': 'Bearer ' + authToken

        }
    };

    response = (response) => {
        console.info(response);
    };

}


export default NewsList;