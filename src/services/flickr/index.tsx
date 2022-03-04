import axios, { AxiosResponse } from 'axios';

const BASE_PATH = 'https://www.flickr.com/services/rest';

export const getGalleryImages = async (galleryId: string) => {
  try {
    const response = await axios.get(
      `${BASE_PATH}/flickr.galleries.getPhotos`,
      {
        params: {
          api_key: '381366e20aaf491bd5ca92a780c5f938',
          gallery_id: galleryId,
          format: 'rest'
        }
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
