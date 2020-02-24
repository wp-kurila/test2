import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {serviceLoaded, serviceRequested, serviceError} from '../actions';
import WithService from './WithService';
import Spinner from './spinner/Spinner';
import Error from './error/Error';
import {Link} from 'react-router-dom'


const ServiceList = ({services, loading, error, serviceLoaded, serviceRequested, serviceError, Service, onServiceSelected}) => {

    useEffect(() => {
        serviceRequested()

        Service.getServices()
            .then(res => serviceLoaded(res))
            .catch(serviceError)
    }, []);

    const style = {
        border: '1px solid black',
        margin: '20px',
        width: '20%',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer',
        color: '#000000',
        textDecoration: 'none'
    }

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <Error />
    } 

    return (
        <div>
            {
                services.map(service => {
                    const {id, name, price} = service;
                    return (
                        <div key={id}>
                            <Link to={`/${id}/details`} style={style}>
                                <span>{name}</span>
                                <span>{price}</span>
                            </Link>
                        </div>
                    )
                })
            }
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
    serviceError
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(ServiceList));