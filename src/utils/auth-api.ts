import { checkResponse } from "./api";
import { apiConfig, getUserDataUrl, getUserDataOptions } from "./constants";
import { IApiConfigHeaders, ILoginData, TLoginResponse, TGetUserDataResponse, TLogoutResponse,
    IRegisterUserData, TRegisterUserResponse } from "../types/types";

export function getUserData(): Promise<TGetUserDataResponse> {
    return fetchWithRefresh(getUserDataUrl, getUserDataOptions)
        .then((res) => {
            return res as TGetUserDataResponse;
        })
};

export function editProfile(data: object): Promise<TGetUserDataResponse> {
    const headers: IApiConfigHeaders = apiConfig.headers;
    headers.authorization = localStorage.getItem("accessToken") || undefined;
    return fetchWithRefresh(`${apiConfig.url + 'auth/user'}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then((res) => {
            return res as TGetUserDataResponse;
        })
};

export function login(data: ILoginData) {
    return fetch(`${apiConfig.url + 'auth/login'}`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({ email: data.email, password: data.password })
    })
        .then((res) => {
            return checkResponse<TLoginResponse>(res);
        })
};

export function logout() {
    return fetch(`${apiConfig.url + 'auth/logout'}`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
    })
        .then((res) => {
            return checkResponse<TLogoutResponse>(res);
        })
};

export function registerUser(data: IRegisterUserData) {
    return fetch(`${apiConfig.url + 'auth/register'}`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({ email: data.email, password: data.password, name: data.name })
    })
        .then((res) => {
            return checkResponse<TRegisterUserResponse>(res);
        })
};

export function restorePassword(email: string) {
    return fetch(`${apiConfig.url + 'password-reset'}`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({ email: email })
    })
        .then((res) => {
            return checkResponse<{success: boolean; message: string}>(res);
        })
};

export function resetPassword(data: {password: string; code: string}) {
    return fetch(`${apiConfig.url + 'password-reset/reset'}`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({ password: data.password, token: data.code })
    })
        .then((res) => {
            return checkResponse<{success: boolean; message: string}>(res);
        })
};

export function refreshToken() {
    return fetch(`${apiConfig.url + 'auth/token'}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    })
    .then((res) => {
        return checkResponse(res) as any
    })
    .then((refreshData) => {
        if (!refreshData.success) {
            return Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken); 
        localStorage.setItem("accessToken", refreshData.accessToken);
        return refreshData;
    });
  };

export async function fetchWithRefresh(url: string, options: any) {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err) {
        const refreshData = await refreshToken();
        options.headers.authorization = refreshData.accessToken;
        const res = await fetch(url, options);
        return await checkResponse(res);
    }
};