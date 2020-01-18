import { createBrowserHistory } from 'history';
import Main from './main';
import reducers from './reducers';
import configureStore from './store';
import sagas from './sagas';

const history = createBrowserHistory();
console.log('index');

const main = new Main({ configureStore, history, reducers, sagas });

const domNode = document.getElementById('app') as HTMLElement;

main.mountToNode(domNode);
