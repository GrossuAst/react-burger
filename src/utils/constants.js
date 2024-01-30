export const apiConfig = {
    url: 'https://norma.nomoreparties.space/api/',
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
  }
};

// получение начальных данных
export function getData() {
   return fetch(`${apiConfig.url + 'ingredients'}`, {
     method: "GET",
     headers: apiConfig.headers
   }).then((res) => {
     if(res.ok) {
       return res.json();
     }
     return Promise.reject(`Ошибка ${res.status}`);
   });
};

// отправка заказа
export function sendOrder(data) {
  console.log(JSON.stringify(data))
  return fetch(`${apiConfig.url + 'orders'}`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({ingredients: data})
  }).then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`)
  })
}
