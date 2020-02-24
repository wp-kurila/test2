const initialState = {
    services: [],
    loading: true,
    error: false,
    details: {},
    detailsLoading: true,
    detailsError: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SERVICE_LOADED':
            return {
                ...state,
                services: action.payload,
                loading: false,
                error: false
            };
        case 'SERVICE_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'SERVICE_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            };
        case 'SERVICE_DETAILS_LOADED':
            return {
                ...state,
                details: action.payload,
                detailsLoading: false,
                detailsError: false
            };
        case 'SERVICE_DETAILS_REQUESTED':
            return {
                ...state,
                detailsLoading: true
            };
        case 'SERVICE_DETAILS_ERROR':
            return {
                ...state,
                detailsError: true,
                detailsLoading: false
            };
        default: 
            return state;
    }
}

export default reducer;