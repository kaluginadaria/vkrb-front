import AuthorizedConnection from 'api/AuthorizedConnection';


class UserGet extends AuthorizedConnection {
    constructor() {
      super({
        url: '/api/user.get/',
      });
    }

    response = (response) => {
      console.warn(response);
      return {};
    };
}


export default UserGet;