import React from 'react';

import DiscussionsGet from 'api/connections/DiscussionsGet';

import Button from 'components/Button';

import wmsToDDMonthNameYYYY from 'utils/time/wmsToDDMonthNameYYYY';

import styles from './styles.scss';


class Discussions extends React.PureComponent {

  constructor(props) {
    super(props);

    this._apiDiscussionsGet = new DiscussionsGet();

    this.state = {
      discussions: null,
    };
  }

  componentDidMount = async () => {
    const [response] = await this._apiDiscussionsGet.call({
      limit: 100,
    });

    if(response){
      this.setState({
        discussions: response,
      })
    }
  };

  render() {
    const { discussions } = this.state;

    if(discussions === null){
      return null;
    }

    console.warn(discussions.list);

    return <div className={ styles.root }>

      { discussions.list.map(data => {
        return <div
          className={styles.dis}
          key={data.id}
        >
          <h5 className={styles.title}>{ data.subject }</h5>
          <p className={styles.text}>{ data.question }</p>
          <div className={styles.info}>
            <span className={styles.infoItem}>Автор: { data.user.first_name }</span>
            <span className={styles.infoItem}>Создано: {wmsToDDMonthNameYYYY(Number(data.created) * 1000)}</span>
            <Button className={styles.button}>
              Просмотр
            </Button>
          </div>
        </div>
      }) }
    </div>;
  }
}


Discussions.propTypes = {};

Discussions.defaultProps = {};


export default Discussions;
