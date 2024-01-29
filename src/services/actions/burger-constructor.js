import { v4 as uuidv4 } from 'uuid';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export function addIngredientInConstructor(item) {
    return {
        type: ADD_INGREDIENT,
        payload: { data: { ...item, key: uuidv4() } },
    }
}