import * as z from 'zod';

const tags = z.object({
  name: z.string(),
  id: z.number(),
});

export const EpigramsResponse = z.object({
  likeCount: z.number(),
  tags: tags,
  writerId: z.number(),
  referenceUrl: z.string(),
  referenceTitle: z.string(),
  author: z.string(),
  content: z.string(),
  id: z.number(),
});

export const GetEpigramsRequest = z.object({
  limit: z.number(),
  cursor: z.number().optional(),
  keyword: z.string(),
  writerId: z.number().optional(),
});

export const GetEpigramsResponse = z.object({
  nextCursor: z.number(),
  list: EpigramsResponse,
});

export const GetEpigramsTodayResponse = z.object({
  likeCount: z.number(),
  tags: tags,
  writerId: z.number(),
  referenceUrl: z.string(),
  referenceTitle: z.string(),
  author: z.string(),
  content: z.string(),
  id: z.number(),
  isLiked: z.boolean(),
});

export const GetEpigramsIdRequest = z.object({
  id: z.number(),
});

export const GetEpigramsIdResponse = z.object({
  likeCount: z.number(),
  tags: tags,
  writerId: z.number(),
  referenceUrl: z.string(),
  referenceTitle: z.string(),
  author: z.string(),
  content: z.string(),
  id: z.number(),
  isLiked: z.boolean(),
});

export const UpdateEpigramsIdRequest = z.object({
  id: z.number(),
});

export const UpdateEpigramsIdResponse = z.object({
  tags: z.array(z.string()),
  referenceUrl: z.string(),
  referenceTitle: z.string(),
  author: z.string(),
  content: z.string(),
});

export const DeleteEpigramsIdRequest = z.object({
  id: z.number(),
});

export const DeleteEpigramsIdResponse = z.object({
  id: z.number(),
});

export const EpigramsLikeRequest = z.object({
  id: z.number(),
});

export const EpigramsLikeResponse = z.object({
  likeCount: z.number(),
  tags: tags,
  writerId: z.number(),
  referenceUrl: z.string(),
  referenceTitle: z.string(),
  author: z.string(),
  content: z.string(),
  id: z.number(),
  isLiked: z.boolean(),
});

export const DeleteEpigramsLikeRequest = z.object({
  id: z.number(),
});

export const DeleteEpigramsLikeResponse = z.object({
  id: z.number(),
});

export const EpigramsCommentsRequest = z.object({
  id: z.number(),
  limit: z.number(),
  cursor: z.number().optional(),
});

const Writer = z.object({
  image: z.string(),
  nickname: z.string(),
  id: z.number(),
});

const EpigramItem = z.object({
  epigramId: z.number(),
  writer: Writer,
  updatedAt: z.string(),
  createdAt: z.string(),
  isPrivate: z.boolean(),
  content: z.string(),
  id: z.number(),
});

export const EpigramsCommentsResponse = z.object({
  nextCursor: z.number(),
  list: z.array(EpigramItem),
});

export type EpigramsResponseType = z.infer<typeof EpigramsResponse>;
export type GetEpigramsRequestType = z.infer<typeof GetEpigramsRequest>;
export type GetEpigramsResponseType = z.infer<typeof GetEpigramsResponse>;
export type GetEpigramsTodayResponseType = z.infer<typeof GetEpigramsTodayResponse>;
export type GetEpigramsIdRequestType = z.infer<typeof GetEpigramsIdRequest>;
export type GetEpigramsIdResponseType = z.infer<typeof GetEpigramsIdResponse>;
export type UpdateEpigramsIdRequestType = z.infer<typeof UpdateEpigramsIdRequest>;
export type UpdateEpigramsIdResponseType = z.infer<typeof UpdateEpigramsIdResponse>;
export type DeleteEpigramsIdRequestType = z.infer<typeof DeleteEpigramsIdRequest>;
export type DeleteEpigramsIdResponseType = z.infer<typeof DeleteEpigramsIdResponse>;
export type EpigramsLikeRequestType = z.infer<typeof EpigramsLikeRequest>;
export type EpigramsLikeResponseType = z.infer<typeof EpigramsLikeResponse>;
export type DeleteEpigramsLikeRequestType = z.infer<typeof DeleteEpigramsLikeRequest>;
export type DeleteEpigramsLikeResponseType = z.infer<typeof DeleteEpigramsLikeResponse>;
export type EpigramsCommentsRequestType = z.infer<typeof EpigramsCommentsRequest>;
export type EpigramsCommentsResponseType = z.infer<typeof EpigramsCommentsResponse>;
