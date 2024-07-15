import * as z from 'zod';

export const ImageRequest = z.object({
  image: z.string(),
});

export const ImageResponse = z.object({
  url: z.string(),
});

export type ImageRequestType = z.infer<typeof ImageRequest>;
export type ImageResponseType = z.infer<typeof ImageResponse>;
