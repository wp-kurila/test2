import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import ServiceList from './ServiceList';
import ServiceDetails from './ServiceDetails';

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
            </Switch>            
        </div>        
    )
}

export default App;