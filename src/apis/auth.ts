import httpClient from '.';

import { SignUpResponseType, SignUpRequestType, SignInResponseType, SignInRequestType, refreshTokenRequestType, refreshTokenResponseType } from '@/schema/auth';

export const signUp = async (signUpObj: SignUpRequestType): Promise<SignUpResponseType> => {
  const { email, nickname, password, passwordConfirmation } = signUpObj;
  const response = await httpClient.post('/auth/signUp', { email, nickname, password, passwordConfirmation });
  return response.data;
};

export const signIn = async (signInObj: SignInRequestType): Promise<SignInResponseType> => {
  const { email, password } = signInObj;
  const response = await httpClient.post('/auth/signIn', { email, password });
  return response.data;
};

export const refreshToken = async (signInObj: refreshTokenRequestType): Promise<refreshTokenResponseType> => {
  const response = await httpClient.post('/auth/refresh-token', { refreshToken });
  return response.data;
};

export const provider = async (signInObj: refreshTokenRequestType): Promise<refreshTokenResponseType> => {
  const response = await httpClient.post('/auth/refresh-token', { refreshToken });
  return response.data;
};
