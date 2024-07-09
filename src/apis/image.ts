import type { ImageRequestType, ImageResponseType } from '@/schema/image';
import httpClient from '.';

const imageUpload = async (image: ImageRequestType): Promise<ImageResponseType> => {
  const response = await httpClient.post('/images/upload', { image });
  return response.data;
};

export default imageUpload;