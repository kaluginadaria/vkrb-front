import Relax, { sync, async } from '@ktx/react-relax';

import NewsListGet from 'api/connections/NewsListGet';


class Store extends Relax {
  constructor() {
    super();

    this.__apiNewsListGet = new NewsListGet();

    this.news = null;
  };

  @async()
  load = async () => {
    const [response, error] = await this.__apiNewsListGet.call({
      offset: 0,
      limit: 100,
    });

    if(response){
      this.news = response;
    }
  };
}


export default Store;
