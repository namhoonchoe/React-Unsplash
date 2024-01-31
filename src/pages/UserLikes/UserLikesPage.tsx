import { unsplashApi } from "@/components/libs/unsplash";
import ImageCard from "@/components/ui/ImageCard";
import { getAspectRatio } from "@/utils/utilFunctions";
import { useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";

export default function UserLikesPage() {
  const { username } = useParams();

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
 
  } = useSWRInfinite<Array<Array<any>>>(
    (index) => `/users/${username}/likes?page=${index + 1}`,
    getPhotos
  );
  return (
    <main className="masonry-layout">
    {likeFeeds?.map((likeFeed: Array<any>) => {
      return likeFeed?.map((photo: any) => {
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
  )
}
