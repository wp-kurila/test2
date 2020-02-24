import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import Service from './service/service';
import ServiceContext from './components/ServiceContext';

const service = new Service();

ReactDOM.render(
    <Provider store={store}>
        <ServiceContext.Provider value={service}>
            <Router>
                <App />
            </Router>
        </ServiceContext.Provider>
    </Provider>, 
    document.getElementById('root'));