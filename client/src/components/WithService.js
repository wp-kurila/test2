import React from 'react';
import ServiceContext from './ServiceContext';

const WithService = () => (Wrapped) => {
    return (props) => {
        return (
            <ServiceContext.Consumer>
                {
                    (Service) => {
                        return <Wrapped {...props} Service={Service} />
                    }
                }
            </ServiceContext.Consumer>
        )
    }
};

export default WithService;