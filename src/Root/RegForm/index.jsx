import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import UserRegister from 'api/connections/UserRegister';

import history from 'utils/history';

import TextInput from 'components/TextInput';
import Button from 'components/Button';
import Link from 'components/Link';

import oAuthStore from 'store/oAuthStore';

import styles from './styles.scss';


class RegForm extends PureComponent {

  constructor(props) {
    super(props);

    this.attach(oAuthStore);
    this.store = oAuthStore;

    this._apiUserRegister = new UserRegister();

    this.state = {
      name: '',
      email: '',
      password1: '',
      password2: '',
      errorMessage: null,
    };
  }

  dropError = () => {
    this.setState({
      errorMessage: null,
    });
  };

  setName = (e) => {
    this.setState({
      name: e.target.value,
    });

    this.dropError();
  };

  setEmail = (e) => {
    this.setState({
      email: e.target.value,
    });

    this.dropError();
  };

  setPassword1 = (e) => {
    this.setState({
      password1: e.target.value,
    });

    this.dropError();
  };

  setPassword2 = (e) => {
    this.setState({
      password2: e.target.value,
    });

    this.dropError();
  };

  reg = async () => {
    const {
      name,
      email,
      password1,
      password2,
    } = this.state;

    if(password1 !== password2){
      this.setState({
        errorMessage: 'Пароли не совпадают',
      });
      return;
    }


    await this._apiUserRegister.call({
      name,
      email,
      password: password1,
    });

    history.push('/auth');
  };

  render() {
    const {
      name,
      email,
      password1,
      password2,
      errorMessage,
    } = this.state;

    return <div className={ styles.root }>
      <div className={styles.card}>
        <h1 className={styles.title}>Регистрация</h1>
        <TextInput
          onChange={this.setName}
          value={name}
          placeholder={'Имя'}
        />
        <TextInput
          onChange={this.setEmail}
          value={email}
          placeholder={'Email'}
          type={'email'}
        />
        <TextInput
          onChange={this.setPassword1}
          value={password1}
          placeholder={'Пароль'}
          type={'password'}
        />
        <TextInput
          onChange={this.setPassword2}
          value={password2}
          placeholder={'Повторите пароль'}
          type={'password'}
        />
        { errorMessage && <p className={styles.error}>{ errorMessage }</p> }
        <Button onClick={this.reg}>
          Регистрация
        </Button>
        <Link to={'/auth'} className={styles.link}>
          Войти
        </Link>
      </div>
    </div>;
  }
}


RegForm.propTypes = {};

RegForm.defaultProps = {};


export default RegForm;
