export const ACTIVE_INGREDIENT = 'ACTIVE_INGREDIENT';
export const DEACTIVE_INGREDIENT = 'DEACTIVE_INGREDIENT';

export function showIngredientDetails(data) {
    return {
        type: ACTIVE_INGREDIENT,
        payload: { data: data }
    }
};

export function clearModalData() {
    return {
        type: DEACTIVE_INGREDIENT
    }
}