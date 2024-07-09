import type { SignUpResponseType, SignUpRequestType, SignInResponseType, SignInRequestType, RefreshTokenRequestType, RefreshTokenResponseType } from '@/schema/auth';
import httpClient from '.';

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

export const refreshAccessToken = async (refreshToken: RefreshTokenRequestType): Promise<RefreshTokenResponseType> => {
  const response = await httpClient.post('/auth/refresh-token', { refreshToken });
  return response.data;
};
