import type {
  EmotionLogTodayRequestType,
  EmotionLogTodayResponseType,
  GetEmotionLogTodayRequestType,
  GetEmotionLogTodayResponseType,
  GetEmotionLogMonthlyRequestType,
  GetEmotionLogMonthlyResponseType,
} from '@/schema/emotionLog';
import httpClient from '.';

export const emotionLogToday = async (request: EmotionLogTodayRequestType): Promise<EmotionLogTodayResponseType> => {
  const { emotion } = request;
  const response = await httpClient.post('/emotionLogs/today', { emotion });
  return response.data;
};

export const getEmotionLogToday = async (request: GetEmotionLogTodayRequestType): Promise<GetEmotionLogTodayResponseType> => {
  const { userId } = request;
  const response = await httpClient.get('/emotionLogs/today', { params: { userId } });
  return response.data;
};

export const getEmotionLogMonthly = async (request: GetEmotionLogMonthlyRequestType): Promise<GetEmotionLogMonthlyResponseType> => {
  const { userId, year, month } = request;
  const response = await httpClient.get('/emotionLogs/monthly', { params: { userId, year, month } });
  return response.data;
};
