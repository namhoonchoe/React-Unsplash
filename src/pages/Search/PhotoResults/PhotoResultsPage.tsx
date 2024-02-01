import { getAspectRatio } from "@/utils/utilFunctions";
import {
  queryParamState,
  SearchQueryParams,
} from "@components/libs/recoil-atoms";
import { unsplashFetcher } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import LoadingPlaceHolder from "@components/ui/LoadingPlaceHolder";
import { Photo } from "@Types/photo";
import { PhotoResults } from "@Types/photoResults";
import { Link, Outlet, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useSWR from "swr";
 
export default function PhotoResultsPage() {
  const { orientation, isRelevant } =
    useRecoilValue<SearchQueryParams>(queryParamState);
  const { query } = useParams();

  const { data: photoResult, isLoading } = useSWR<PhotoResults>(
    `search/photos?query=${query}${
      orientation !== undefined ? `&orientation=${orientation}` : ""
    }${isRelevant ? "" : "&order_by=latest"}`,
    unsplashFetcher,
    {
      revalidateOnFocus: false,
    }
  );

  if (isLoading)
    return (
      <main className="masonry-layout">
        <LoadingPlaceHolder />
      </main>
    );

  if (photoResult && photoResult.total === 0)
    return (
      <main className="w-full h-32 flex justify-center items-center">
        <p>Cannot find photos</p>
      </main>
    );

  return (
    <main className="masonry-layout">
      {photoResult?.results.map((photo: Photo) => {
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
      })}
      <Outlet />
    </main>
  );
}
