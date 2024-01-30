import { queryParamState, SearchQueryParams } from "@/components/libs/recoil-atoms";
import { unsplashApi } from "@/components/libs/unsplash";
import { getAspectRatio } from "@/utils/utilFunctions";
import ImageCard from "@components/ui/ImageCard";
import { Link, Outlet, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useSWRInfinite from "swr/infinite";

const searchPhotos = async (url: string) => {
  const {
    data: { results },
  } = await unsplashApi.get(url);

  return results;
};

export default function PhotoResultsPage() {
  const { orientation, isRelevant } = useRecoilValue<SearchQueryParams>(queryParamState);
  const { query } = useParams();
   const {
    data: photoResultsArray,
    isLoading,
    size,
    setSize,
  } = useSWRInfinite<Array<Array<any>>>(
    (index) => `search/photos?page=${index + 1}&query=${query}${orientation !== undefined
      ? `&orientation=${orientation}`
      : ""}${isRelevant ?  "" :"&order_by=latest" }`,
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
            <Link
              to={`/s/photo/${query}/photo/${photo.id}`}
              state={{ aspectRatio: getAspectRatio(photo.width, photo.height) }}
            >
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
            </Link>
          );
        });
      })}
      <Outlet />
    </main>
  );
}
