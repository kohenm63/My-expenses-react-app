import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BillProvider } from './Context/BillContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BillProvider><App /></BillProvider>, document.getElementById('root'));


serviceWorker.unregister();
