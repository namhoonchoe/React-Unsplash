import LoadMoreButton from "@/components/ui/LoadMoreButton";
import { getAspectRatio } from "@/utils/utilFunctions";
import { Photo } from "@Types/photo";
import { unsplashApi } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import LoadingPlaceHolder from "@components/ui/LoadingPlaceHolder";
import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";

export default function UserLikesPage() {
  const { username } = useParams();
  const { totalLikes } = useOutletContext<ContextType>();

  const getPhotos = async (url: string) => {
    const { data } = await unsplashApi.get(url, {
      params: {
        order_by: "latest",
      },
    });
    return data;
  };
  const {
    data: likeFeeds,
    isLoading,
    isValidating,
    size,
    setSize,
  } = useSWRInfinite<Array<Photo>>(
    (index) => `/users/${username}/likes?page=${index + 1}`,
    getPhotos,
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

  if (totalLikes === 0)
    return (
      <main className="flex h-32 w-full items-center justify-center">
        <p>There are no collections here yet</p>
      </main>
    );

  if (likeFeeds)
    return (
      <>
        <main className="masonry-layout">
          {likeFeeds?.map((likeFeed: Array<Photo>) => {
            return likeFeed?.map((photo) => {
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
          ArrayData={likeFeeds}
        />
      </>
    );
}
