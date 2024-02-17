import { checkResponse } from "./api";
import { apiConfig } from "./constants";

export function login() {
    
};

export function logout() {

};

export function registerUser(data) {
    return fetch(`${apiConfig.url + 'auth/register'}`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({ email: data.email, password: data.password, name: data.name })
    })
        .then((res) => {
            return checkResponse(res);
        })
};

export function restorePassword(email) {
    return fetch(`${apiConfig.url + 'password-reset'}`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({ email: email })
    })
        .then((res) => {
            return checkResponse(res);
        })
};

export function resetPassword(data) {
    return fetch(`${apiConfig.url + 'password-reset/reset'}`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({ password: data.password, token: data.code })
    })
        .then((res) => {
            return checkResponse(res);
        })
};
