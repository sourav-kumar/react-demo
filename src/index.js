import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StickyContainer from './StickyContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StickyContainer />, document.getElementById('root'));
registerServiceWorker();
