import * as z from 'zod';

export const SignUpRequest = z.object({
  email: z.string().email('올바른 이메일 형식이 아닙니다.'),
  nickname: z.string(),
  password: z.string(),
  passwordConfirmation: z.string(),
});

const SignUpUser = z.object({
  id: z.number(),
  nickname: z.string(),
  teamId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  image: z.string().nullable(),
  email: z.string().email(),
});

export const SignUpResponse = z.object({
  user: SignUpUser,
});

export const SignInRequest = z.object({
  email: z.string().email('올바른 이메일 형식이 아닙니다.'),
  password: z.string(),
});

const SignInUser = z.object({
  id: z.number(),
  email: z.string().email(),
  nickname: z.string(),
  teamId: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
  image: z.string().nullable(),
});

export const SignInResponse = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  user: SignInUser,
});

export const RefreshTokenRequest = z.object({
  refreshToken: z.string(),
});

export const RefreshTokenResponse = z.object({
  accessToken: z.string(),
});

export type SignUpRequestType = z.infer<typeof SignUpRequest>;
export type SignUpResponseType = z.infer<typeof SignUpResponse>;
export type SignInRequestType = z.infer<typeof SignInRequest>;
export type SignInResponseType = z.infer<typeof SignInResponse>;
export type RefreshTokenRequestType = z.infer<typeof RefreshTokenRequest>;
export type RefreshTokenResponseType = z.infer<typeof RefreshTokenResponse>;
