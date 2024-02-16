import { getAspectRatio } from "@/utils/utilFunctions";
import { Photo } from "@Types/photo";
import { unsplashApi } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import LoadMoreButton from "@components/ui/LoadMoreButton";
import LoadingPlaceHolder from "@components/ui/LoadingPlaceHolder";
import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";



export default function UserPhotosPage() {
  const { username } = useParams();
  const { totalPhotos } = useOutletContext<ContextType>();
  const getPhotos = async (url: string) => {
    const { data } = await unsplashApi.get(url, {
      params: {
        order_by: "latest",
      },
    });
    return data;
  };
  const { data: photoFeeds, isLoading, size, setSize, isValidating } = useSWRInfinite<Array<Photo>>(
    (index) => `/users/${username}/photos?page=${index + 1}`,
    getPhotos, {
      revalidateOnFocus:false
    }
  );

  if (isLoading)
    return (
      <main className="masonry-layout">
        <LoadingPlaceHolder />
      </main>
    );

  if (totalPhotos === 0)
    return (
      <main className="w-full h-32 flex justify-center items-center">
        <p>There are no photos here yet</p>
      </main>
    );

  if (photoFeeds && photoFeeds.length > 0)
    return (
  <>
  <main className="masonry-layout">
        {photoFeeds?.map((homeFeed: Array<Photo>) => {
          return homeFeed?.map((photo) => {
            return (
              <Link
                to={`/user/${username}/photo/${photo.id}`}
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
          isValidating={isValidating}
          size={size}
          setSize={setSize}
          ArrayData={photoFeeds}
        />
  </>
      
    );
}