import ApiConnection, { normalize } from '@ktx/api-connection';

import testParser from 'api/parsers/testParser';


class TestConnection extends ApiConnection{
  constructor(){
    super({
      url: 'https://api.github.com/users/casinx/repos',
    });
  }

  request = (data) => {
    return {
      'sort': data.sort,
    }
  };

  response = (response) => {
    const [entities, ids] = normalize({
      array: response.data,
      parser: testParser,
    });

    return {
      entities,
      ids,
    };
  };
}


export default TestConnection;