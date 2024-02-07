import { v4 as uuidv4 } from 'uuid';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';

export function addIngredientInConstructor(item) {
    return {
        type: ADD_INGREDIENT,
        payload: { data: { ...item, key: uuidv4() } },
    }
};

export function removeIngredient(id) {
    return {
        type: REMOVE_INGREDIENT,
        payload: id
    }
};

export function moveInvgredient(toIndex, fromIndex) {
    return {
        type: MOVE_INGREDIENT,
        payload: {
            toIndex: toIndex,
            fromIndex: fromIndex
        }
    }
}