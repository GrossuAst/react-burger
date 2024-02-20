export const apiConfig = {
    url: 'https://norma.nomoreparties.space/api/',
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
  }
};

export const getUserDataOptions = {
  headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      authorization: localStorage.getItem("accessToken")
  }
};

export const getUserDataUrl = apiConfig.url + 'auth/user';