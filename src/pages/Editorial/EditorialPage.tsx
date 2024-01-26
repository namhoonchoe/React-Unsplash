/* eslint-disable @typescript-eslint/no-explicit-any */
import { unsplashApi } from "@/components/libs/unsplash";
import ImageCard from "@/components/ui/ImageCard";
import { getAspectRatio } from "@/utils/utilFunctions";
import useSWRInfinite from "swr/infinite";


export default function EditorialPage() {
  const getEditorials = async (url: string) => {
    const { data } = await unsplashApi.get(url, {
      params: {
        per_page: 25,
        order_by: "popular",
      },
    });
    return data;
  };
  const {
    data: homeFeeds,
    size,
    setSize,
    isLoading,
  } = useSWRInfinite<Array<Photo>>(
    (index) => `/photos?page=${index + 1}`,
    getEditorials
  );

  return (
    <div className="column-layout">
      <header className="w-full aspect-[70/24] bg-slate-300"></header>
      <main className="masonry-layout">
        {homeFeeds?.map((homeFeed: Array<Photo>) => {
          return homeFeed?.map((photo: Photo) => {
            return (
              <div
                className="masonry-item"
                style={{
                  aspectRatio: getAspectRatio(photo.width, photo.height),
                }}
              >
                <ImageCard  imageUrl={photo.urls.regular}  blurHash={photo.blur_hash}/>
              </div>
            );
          });
        })}
      </main>
    </div>
  );
}
