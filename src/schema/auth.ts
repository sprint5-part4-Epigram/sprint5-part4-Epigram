import * as z from 'zod';

export const SignUpRequest = z.object({
  email: z.string().email('올바른 이메일 형식이 아닙니다.'),
  nickname: z.string(),
  password: z.string(),
  passwordConfirmation: z.string(),
});

const User = z.object({
  id: z.number(),
  nickname: z.string(),
  teamId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  image: z.string().nullable(),
  email: z.string().email(),
});

export const SignUpResponse = z.object({
  user: User,
});

export const SignInRequest = z.object({
  email: z.string().email('올바른 이메일 형식이 아닙니다.'),
  password: z.string(),
});

export const SignInResponse = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  user: User,
});

export const refreshTokenRequest = z.object({
  refreshToken: z.string(),
});

export const refreshTokenResponse = z.object({
  accessToken: z.string(),
});



export type User = z.infer<typeof User>;
export type SignUpRequestType = z.infer<typeof SignUpRequest>;
export type SignUpResponseType = z.infer<typeof SignUpResponse>;
export type SignInRequestType = z.infer<typeof SignInRequest>;
export type SignInResponseType = z.infer<typeof SignInResponse>;
export type refreshTokenRequestType = z.infer<typeof refreshTokenRequest>;
export type refreshTokenResponseType = z.infer<typeof refreshTokenResponse>;
