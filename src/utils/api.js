import { apiConfig } from "./constants";

// получение начальных данных
export function getData() {
    return fetch(`${apiConfig.url + 'ingredients'}`, {
      method: "GET",
      headers: apiConfig.headers
    }).then((res) => {
        return checkResponse(res);
    });
 };
 
 // отправка заказа
export function sendOrder(data) {
    return fetch(`${apiConfig.url + 'orders'}`, {
        method: "POST",
        headers: apiConfig.headers,
        body: JSON.stringify({ingredients: data})
    }).then((res) => {
        return checkResponse(res);
    })
};

function checkResponse(res) {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};
