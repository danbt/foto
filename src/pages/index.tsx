// import { getGalleryImages } from '@/services/flickr';
import type { NextPage } from 'next';
// import { useQuery } from 'react-query';

const Home: NextPage = () => {
  // const {
  //   isLoading: isLoadingImages,
  //   refetch: getAllImages,
  //   data: imageData
  // } = useQuery(
  //   'gallery-images',
  //   async () => {
  //     return await getGalleryImages('72157720447961788');
  //   },
  //   {
  //     enabled: false,
  //     onSuccess: (res) => {
  //       console.log(res);
  //     },
  //     onError: (err) => {
  //       console.log(err);
  //     }
  //   }
  // );
  return (
    <>
      <h1 className="text-5xl">Hello Dan</h1>
      <div></div>
    </>
  );
};

export default Home;
