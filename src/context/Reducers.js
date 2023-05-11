export const dataReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export const userReducer = (state, action) => {
    console.log(state, action.payload, action.type);
    switch (action.type) {
        case "FILTER_BY_AVAILABLE":
            return { ...state, available : action.payload};
        case "FILTER_BY_STOCK":
            return { ...state, byStock: !state.byStock };
        case "FILTER_BY_DELIVERY":
            return { ...state, byFastDelivery: !state.byFastDelivery };
        case "FILTER_BY_RATING":
            return { ...state, byRating: action.payload };
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload };
        case "CLEAR_FILTERS":
            return { byStock: false, byFastDelivery: false, byRating: 0 };
        default:
            return state;
    }
}