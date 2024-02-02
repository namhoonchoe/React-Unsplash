import { getAspectRatio } from "@/utils/utilFunctions";
import {
  queryParamState,
  SearchQueryParams,
} from "@components/libs/recoil-atoms";
import { unsplashApi } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import LoadingPlaceHolder from "@components/ui/LoadingPlaceHolder";
import LoadMoreButton from "@components/ui/LoadMoreButton";
import { Photo } from "@Types/photo";
import { Link, Outlet, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useSWRInfinite from "swr/infinite";


const getPhotoResults = async (url: string) => {
  const {
    data: { results },
  } = await unsplashApi.get(url);
  return results;
};


export default function PhotoResultsPage() {
  const { orientation, isRelevant } =
    useRecoilValue<SearchQueryParams>(queryParamState);
  const { query } = useParams();


  const {
    data: photoResult,
    isLoading,
    isValidating,
    size,
    setSize,
  } = useSWRInfinite<Array<Photo>>(
    (index) =>
      `search/photos?query=${query}&page=${index + 1}${
        orientation !== undefined ? `&orientation=${orientation}` : ""
      }${isRelevant ? "" : "&order_by=latest"}`,
      getPhotoResults,
    {
      revalidateOnFocus: false,
    },
  );

  if (isLoading)
    return (
      <main className="masonry-layout">
        <LoadingPlaceHolder />
      </main>
    );

  if (photoResult && photoResult[0].length === 0)
    return (
      <main className="flex h-32 w-full items-center justify-center">
        <p>Cannot find photos</p>
      </main>
    );

  if (photoResult)
    return (
      <>
        <main className="masonry-layout">
          {photoResult.map((photoFeed) => {
            return photoFeed.map((photo) =>{
              return (
                <Link
                  to={`/s/photo/${query}/photo/${photo.id}`}
                  state={{
                    aspectRatio: getAspectRatio(photo.width, photo.height),
                  }}
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
        <LoadMoreButton
          ArrayData={photoResult}
          size={size}
          setSize={setSize}
          isValidating={isValidating}
        />
      </>
    );
}
