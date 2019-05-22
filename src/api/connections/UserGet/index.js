import AuthorizedConnection from 'api/AuthorizedConnection';

import parseUser from 'api/parsers/user';


class UserGet extends AuthorizedConnection {
    constructor() {
      super({
        url: '/api/user.get/',
      });
    }

    response = (response) => {
      return parseUser(response.data.data);
    };
}


export default UserGet;