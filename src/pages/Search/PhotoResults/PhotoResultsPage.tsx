import { unsplashApi } from "@/components/libs/unsplash";
import { getAspectRatio } from "@/utils/utilFunctions";
import ImageCard from "@components/ui/ImageCard";
import { useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";

const searchPhotos = async (url: string) => {
  const {
    data: { results },
  } = await unsplashApi.get(url);

  return results;
};

export default function PhotoResultsPage() {
  const { query } = useParams();
  const {
    data: photoResultsArray,
    isLoading,
    size,
    setSize,
  } = useSWRInfinite<Array<Array<any>>>(
    (index) => `search/photos?page=${index + 1}&query=${query}`,
    searchPhotos,
    {
      revalidateOnFocus: false,
    }
  );
  return (
       <main className="masonry-layout">
        {photoResultsArray?.map((photoResults: Array<any>) => {
          return photoResults?.map((photo: Photo) => {
            return (
              <div
                className="masonry-item"
                style={{
                  aspectRatio: getAspectRatio(photo.width, photo.height),
                }}
              >
                <ImageCard
                  imageUrl={photo.urls.regular}
                  blurHash={photo.blur_hash}
                />
              </div>
            );
          });
        })}
      </main>
   );
}
