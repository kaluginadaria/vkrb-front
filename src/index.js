import ReactDOM from 'react-dom';

import appConfig from 'config/app';

import Root from './Root';

import styles from './styles/global.scss';


document.getElementsByTagName('html')[0].classList.add(appConfig.isMobile ? '__IS_MOBILE__' : '__IS_DESKTOP__');
const appRoot = document.createElement('div');
appRoot.className = styles.root;
document.body.appendChild(appRoot);
ReactDOM.render(Root, appRoot);