import { apiConfig } from "./constants";
import { TGetData, TSendOrderResponse } from "../types/types";

export function checkResponse<T>(res: Response): Promise<T> {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

// получение начальных данных
export function getData() {
    return fetch(`${apiConfig.url + 'ingredients'}`, {
      method: "GET",
      headers: apiConfig.headers
    }).then((res) => {
        return checkResponse<TGetData>(res);
    });
 };
 
 // отправка заказа
export function sendOrder(data: string[]) {
    return fetch(`${apiConfig.url + 'orders'}`, {
        method: "POST",
        headers: apiConfig.headers,
        body: JSON.stringify({ingredients: data})
    }).then((res) => {
        return checkResponse<TSendOrderResponse>(res);
    })
};

