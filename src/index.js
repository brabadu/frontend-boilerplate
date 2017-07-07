import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { reducer, Greeter } from './component';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Greeter />
    </Provider>,
    document.getElementById('root')
 );
