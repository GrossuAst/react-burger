import { CREATE_ORDER, CREATE_ORDER_SUCCES, CREATE_ORDER_FAILED } from "./action";

const initialState = {
    feedRequest: false,
    feedFailed: false,
    orderDetails: null
};

export const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_ORDER:
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
                orderDetails: action.payload
            }
        case CREATE_ORDER_SUCCES:
            return {
                ...state,
                orderDetails: action.payload,
                feedRequest: false
            }
        case CREATE_ORDER_FAILED: 
            return {
                ...state,
                feedFailed: true,
                feedRequest: false
            }
        default:
            return state;
    }
};