import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {serviceDetailsLoaded, serviceDetailsRequested, serviceDetailsError} from '../actions';
import WithService from './WithService';
import Spinner from './spinner/Spinner';
import Error from './error/Error';

const ServiceDetails = ({Service, match, details, detailsLoading, detailsError, serviceDetailsLoaded, serviceDetailsRequested, serviceDetailsError}) => {

    const {id} = match.params;

    useEffect(() => {
        serviceDetailsRequested()

        Service.getService(id)
            .then(res => serviceDetailsLoaded(res))
            .catch(serviceDetailsError)
    }, []);

    const style = {
        border: '1px solid black',
        margin: '20px',
        width: '30%',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer'
    }

    if (detailsLoading) {
        return <Spinner />
    }

    if (detailsError) {
        return <Error idItem={id}/>
    }

    const {name, price, content} = details

    return (
        <div style={style}>
            <span>{name} ({content})</span>
            <span>{price}</span>
        </div>
    )
}

const mapStateToProps = ({details, detailsLoading, detailsError}) => {
    return {
        details,
        detailsLoading,
        detailsError
    }
}

const mapDispatchToProps = {
    serviceDetailsLoaded,
    serviceDetailsRequested,
    serviceDetailsError
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(ServiceDetails));