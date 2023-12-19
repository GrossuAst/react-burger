export const apiConfig = {
    url: 'https://norma.nomoreparties.space/api/ingredients',
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
  }
};

export function getData() {
   return fetch(apiConfig.url, {
     method: "GET",
     headers: apiConfig.headers,
   }).then((res) => {
     if (res.ok) {
       return res.json();
     }
     return Promise.reject(`Ошибка ${res.status}`);
   });
 };