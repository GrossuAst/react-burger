import { sendOrder } from "../../utils/api";
import { clearConstructor } from "../burger-constructor/action";

export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCES = 'CREATE_ORDER_SUCCES';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';

export function createOrder(data) {
    return function(dispatch) {
        if(data.includes(null)) {
            return
        }
        dispatch({
            type: CREATE_ORDER
        });
        sendOrder(data)
            .then((res) => {
                dispatch({
                    type: CREATE_ORDER_SUCCES,
                    payload: res
                });
                dispatch(clearConstructor());
            })
            .catch((err) => {
                dispatch(CREATE_ORDER_FAILED)
            })
    }
};
