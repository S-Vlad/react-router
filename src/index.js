import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { routes } from './routes.js';


ReactDOM.render(
  routes
  ,document.getElementById('root')
);

registerServiceWorker();