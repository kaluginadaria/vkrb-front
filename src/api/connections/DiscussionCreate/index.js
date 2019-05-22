import AuthorizedConnection from 'api/AuthorizedConnection';
import { methods } from '@ktx/api-connection';


class DiscussionsCreate extends AuthorizedConnection {
    constructor() {
        super({
          url: '/api/recourse.create/',
          method: methods.POST,
        });
    }

    response = (response) => {
        return response.data.data;
    };
}


export default DiscussionsCreate;