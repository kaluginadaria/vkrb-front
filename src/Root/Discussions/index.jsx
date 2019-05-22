import React from 'react';

import DiscussionsGet from 'api/connections/DiscussionsGet';
import DiscussionCreate from 'api/connections/DiscussionCreate';

import Button from 'components/Button';
import TextInput from 'components/TextInput';

import wmsToDDMonthNameYYYY from 'utils/time/wmsToDDMonthNameYYYY';

import styles from './styles.scss';


class Discussions extends React.PureComponent {

  constructor(props) {
    super(props);

    this._apiDiscussionsGet = new DiscussionsGet();
    this._apiDiscussionCreate = new DiscussionCreate();

    this.state = {
      discussions: null,
      newSubject: '',
      newQuestion: '',
    };
  }

  componentDidMount = () => {
    this.loadDiscussions();
  };

  loadDiscussions = async () => {
    const [response] = await this._apiDiscussionsGet.call({
      limit: 100,
    });

    if(response){
      this.setState({
        discussions: response,
      })
    }
  };

  setSubject = (e) => {
    this.setState({
      newSubject: e.target.value,
    })
  };

  setQuestion = (e) => {
    this.setState({
      newQuestion: e.target.value,
    })
  };

  createSubject = async () => {
    const { newSubject, newQuestion } = this.state;

    const [ response ] = await this._apiDiscussionCreate.call({
      subject: newSubject,
      question: newQuestion,
    });

    if(response) {
      this.setState({
        newSubject: '',
        newQuestion: '',
      });

      this.loadDiscussions();
    }
  };

  render() {
    const { discussions, newSubject, newQuestion } = this.state;

    if(discussions === null){
      return null;
    }

    return <div className={ styles.root }>

      <div className={styles.dis}>
        <h5 className={styles.title}>Создать обсуждение</h5>
        <TextInput
          placeholder={'Введите тему'}
          value={newSubject}
          onChange={this.setSubject}
        />
        <textarea
          placeholder={'Введите вопрос'}
          value={newQuestion}
          onChange={this.setQuestion}
          className={styles.textArea}
        />
        <Button onClick={this.createSubject}>
          Создать
        </Button>
      </div>

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
