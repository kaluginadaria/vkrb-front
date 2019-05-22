import ApiConnection, { methods } from '@ktx/api-connection';


class UserRegister extends ApiConnection{
  constructor() {
    super({
      url: '/api/auth.register/',
      method: methods.POST,
    });
  }

  request = (data) => {
    return {
      'email': data.email,
      'password': data.password,
      'first_name': data.name,
    }
  };
}


export default UserRegister;