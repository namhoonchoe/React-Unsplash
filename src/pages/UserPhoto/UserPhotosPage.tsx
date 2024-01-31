import { unsplashApi } from "@/components/libs/unsplash";
import ImageCard from "@/components/ui/ImageCard";
import { getAspectRatio } from "@/utils/utilFunctions";
import { Link, Outlet, useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";

export default function UserPhotosPage() {
  const { username } = useParams();

  const getPhotos = async (url: string) => {
    const { data } = await unsplashApi.get(url, {
      params: {
        order_by: "latest",
      },
    });
    return data;
  };
  const { data: homeFeeds } = useSWRInfinite<Array<Array<any>>>(
    (index) => `/users/${username}/photos?page=${index + 1}`,
    getPhotos
  );
  return (
    <main className="masonry-layout">
      {homeFeeds?.map((homeFeed: Array<any>) => {
        return homeFeed?.map((photo: any) => {
          return (
            <Link
              to={`/user/${username}/photo/${photo.id}`}
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
