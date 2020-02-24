import React from 'react';
import WithService from '../WithService';
import {connect} from 'react-redux';
import {serviceLoaded, serviceRequested, serviceError, serviceDetailsLoaded, serviceDetailsError, serviceDetailsRequested} from '../../actions';

import './error.css';

const Error = ({serviceLoaded, serviceRequested, serviceError, Service, idItem, serviceDetailsLoaded, serviceDetailsError, serviceDetailsRequested}) => {

    const refreshRes = () => {

        if (idItem) {
            serviceDetailsRequested()

            Service.getService(idItem)
                .then(res => serviceDetailsLoaded(res))
                .catch(serviceDetailsError)
        } else {
            serviceRequested()

            Service.getServices()
                .then(res => serviceLoaded(res))
                .catch(serviceError)
        }
    }

    return (
        <div className='error'>
            <span>Произошла ошибка</span>
            <button 
                type='button'
                onClick={refreshRes}>Повторить запрос</button>
        </div>
    )
}

const mapStateToProps = ({services, loading, error}) => {
    return {
        services,
        loading,
        error
    }
}

const mapDispatchToProps = {
    serviceLoaded,
    serviceRequested,
    serviceError,
    serviceDetailsLoaded,
    serviceDetailsError,
    serviceDetailsRequested
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(Error));