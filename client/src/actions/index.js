const serviceLoaded = (newServices) => {
    return {
        type: 'SERVICE_LOADED',
        payload: newServices
    };
};

const serviceRequested = () => {
    return {
        type: 'SERVICE_REQUESTED'
    };
};

const serviceError = () => {
    return {
        type: 'SERVICE_ERROR'
    };
};

const serviceDetailsLoaded = (serviceDetails) => {
    return {
        type: 'SERVICE_DETAILS_LOADED',
        payload: serviceDetails
    };
};

const serviceDetailsRequested = () => {
    return {
        type: 'SERVICE_DETAILS_REQUESTED'
    };
};

const serviceDetailsError = () => {
    return {
        type: 'SERVICE_DETAILS_ERROR'
    };
};

export {
    serviceLoaded,
    serviceRequested,
    serviceError,
    serviceDetailsLoaded,
    serviceDetailsRequested,
    serviceDetailsError
}