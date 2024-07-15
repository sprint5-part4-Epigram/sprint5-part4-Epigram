import * as z from 'zod';

export const EmotionLogTodayRequest = z.object({
  emotion: z.literal('MOVED'),
});

export const EmotionLogTodayResponse = z.object({
  createdAt: z.string().datetime(),
  emotion: z.literal('MOVED'),
  userId: z.number(),
  id: z.number(),
});

export const GetEmotionLogTodayRequest = z.object({
  userId: z.number(),
});

export const GetEmotionLogTodayResponse = z.object({
  createdAt: z.string().datetime(),
  emotion: z.literal('MOVED'),
  userId: z.number(),
  id: z.number(),
});

export const GetEmotionLogMonthlyRequest = z.object({
  userId: z.number(),
  year: z.number(),
  month: z.number(),
});

export const GetEmotionLogMonthlyResponse = z.object({
  createdAt: z.string().datetime(),
  emotion: z.literal('MOVED'),
  userId: z.number(),
  id: z.number(),
});

export type EmotionLogTodayRequestType = z.infer<typeof EmotionLogTodayRequest>;
export type EmotionLogTodayResponseType = z.infer<typeof EmotionLogTodayResponse>;
export type GetEmotionLogTodayRequestType = z.infer<typeof GetEmotionLogTodayRequest>;
export type GetEmotionLogTodayResponseType = z.infer<typeof GetEmotionLogTodayResponse>;
export type GetEmotionLogMonthlyRequestType = z.infer<typeof GetEmotionLogMonthlyRequest>;
export type GetEmotionLogMonthlyResponseType = z.infer<typeof GetEmotionLogMonthlyResponse>;
