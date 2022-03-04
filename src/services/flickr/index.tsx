import axios from 'axios';

const BASE_PATH = 'https://www.flickr.com/services/rest/?method';

// services/rest/?method=flickr.galleries.getPhotos

export const getGalleryImages = async (galleryId: string) => {
  try {
    const response = await axios.get(
      `${BASE_PATH}=flickr.galleries.getPhotos`,
      {
        params: {
          api_key: '381366e20aaf491bd5ca92a780c5f938',
          gallery_id: galleryId,
          format: 'rest'
        }
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
