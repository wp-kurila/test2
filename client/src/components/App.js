import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import ServiceList from './ServiceList';
import ServiceDetails from './ServiceDetails';
import ErrorPage from './ErrorPage';

const App = () => {

    return (
        <div>
            <Header />
            <Switch>
                <Route
                    path='/'
                    exact 
                    component={ServiceList} />
                <Route
                    path='/:id/details'
                    component={ServiceDetails} />
                <Route
                    path='*'
                    component={ErrorPage} />
            </Switch>            
        </div>        
    )
}

export default App;