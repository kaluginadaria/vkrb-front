import React from 'react';
import cn from 'classnames';

import ListLitGet from 'api/connections/ListLitGet';

import styles from './styles.scss';


class Lit extends React.PureComponent {

  constructor(props) {
    super(props);

    this._apiListLitGet = new ListLitGet();

    this.state = {
      lit: null,
    };
  }

  componentDidMount = async () => {
    const [response] = await this._apiListLitGet.call({
      limit: 100,
    });

    if(response){
      this.setState({
        lit: response,
      });
    }
  };

  render() {
    const { lit } = this.state;

    if(lit === null){
      return null;
    }

    return <div className={ styles.root }>
      <h1 className={styles.title}>Рекомендованная литература</h1>

      { lit.list.map(data => {
        return <div
          key={data.id}
          className={styles.article}
        >
          <img className={styles.cover} src={data.photo.url} alt=""/>
          <h2 className={styles.name}>{ data.title }</h2>
          <div className={styles.info}>
            <span className={styles.infoItem}>
              Автор: { data.author }
            </span>
            <span className={styles.infoItem}>
              Год издания: { data.date_of_issued }
            </span>
          </div>
        </div>
      }) }
    </div>;
  }
}


Lit.propTypes = {};

Lit.defaultProps = {};


export default Lit;
