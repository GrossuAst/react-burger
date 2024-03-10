export interface IIngredient {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    type: string,
    __v: number;
    _id: string;
};

export interface IIngredientInConstructor extends IIngredient { key?: string };

export interface IApiConfigHeaders {
    "Content-Type": string;
    "Accept": string;
    "authorization"?: string;
};

export interface ILoginData {
    email: string;
    password: string;
};

export interface IRegisterUserData {
    email: string;
    password: string;
    name: string;
};

type TServerResponse<T> = {
    succes: boolean;
} & T;

export type TGetData = TServerResponse <{
    data: IIngredient[];
}>;

export type TGetUserDataResponse = TServerResponse<{
    user: {email: string; name: string;}
}>;

export type TSendOrderResponse = TServerResponse <{
    name: string;
    order: {number: number};
}>;

export type TLoginResponse = TServerResponse <{
    accessToken: string;
    refreshToken: string;
    user: {email: string; name: string}
}>;

export type TLogoutResponse = TServerResponse<{
    message: string;
}>;

export type TRegisterUserResponse = TServerResponse<{
    user: {email: string; name: string;};
    aaccessToken: string;
    refreshToken: string;
}>;