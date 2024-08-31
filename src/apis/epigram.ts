import type {
  EpigramsResponseType,
  GetEpigramsRequestType,
  GetEpigramsResponseType,
  GetEpigramsTodayResponseType,
  GetEpigramsIdRequestType,
  GetEpigramsIdResponseType,
  UpdateEpigramsIdRequestType,
  UpdateEpigramsIdResponseType,
  DeleteEpigramsIdRequestType,
  DeleteEpigramsIdResponseType,
  EpigramsLikeRequestType,
  EpigramsLikeResponseType,
  DeleteEpigramsLikeRequestType,
  DeleteEpigramsLikeResponseType,
  EpigramsCommentsRequestType,
  EpigramsCommentsResponseType,
} from '@/schema/epigram';
import httpClient from '.';

export const epigrams = async (): Promise<EpigramsResponseType> => {
  const response = await httpClient.post('/epigrams');
  return response.data;
};

export const getEpigrams = async (request: GetEpigramsRequestType): Promise<GetEpigramsResponseType> => {
  const { limit, cursor, keyword, writerId } = request;
  const response = await httpClient.get('/epigrams', {
    params: {
      limit,
      cursor,
      keyword,
      writerId,
    },
  });
  return response.data;
};

export const getEpigramsToday = async (): Promise<GetEpigramsTodayResponseType> => {
  const response = await httpClient.get('/epigrams/today');
  return response.data;
};

export const getEpigramsId = async (request: GetEpigramsIdRequestType): Promise<GetEpigramsIdResponseType> => {
  const { id } = request;
  const response = await httpClient.get(`/epigrams/${id}`);
  return response.data;
};

export const updateEpigramsId = async (request: UpdateEpigramsIdRequestType): Promise<UpdateEpigramsIdResponseType> => {
  const { id } = request;
  const response = await httpClient.patch(`/epigrams/${id}`, { ...request });
  return response.data;
};

export const deleteEpigramsId = async (request: DeleteEpigramsIdRequestType): Promise<DeleteEpigramsIdResponseType> => {
  const { id } = request;
  const response = await httpClient.delete(`/epigrams/${id}`);
  return response.data;
};

export const epigramsLike = async (request: EpigramsLikeRequestType): Promise<EpigramsLikeResponseType> => {
  const { id } = request;
  const response = await httpClient.post(`/epigrams/${id}/like`);
  return response.data;
};

export const deleteEpigramsLike = async (request: DeleteEpigramsLikeRequestType): Promise<DeleteEpigramsLikeResponseType> => {
  const { id } = request;
  const response = await httpClient.delete(`/epigrams/${id}/like`);
  return response.data;
};

export const epigramsComments = async (request: EpigramsCommentsRequestType): Promise<EpigramsCommentsResponseType> => {
  const { id, limit, cursor } = request;
  const response = await httpClient.post(`/epigrams/${id}/comments`, { id, limit, cursor });
  return response.data;
};
