/* eslint-disable @typescript-eslint/no-explicit-any */
import { unsplashApi } from "@/components/libs/unsplash";
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
    <div className="flex flex-col justify-start items-center w-full max-w-[70.5rem] gap-20">
      <header className="w-full aspect-[70/24] bg-slate-300"></header>
      <main className="w-full columns-4	gap-8 mb-20">
        {homeFeeds?.map((homeFeed: Array<Photo>) => {
          return homeFeed?.map((photo: Photo ) => {
            return (
              <div
                className="rounded-md w-full rounded-xl masonry-item bg-slate-300 mb-8"
                style={{
                  aspectRatio: getAspectRatio(photo.width, photo.height),
                }}
              >
                <img src={photo.urls.regular} alt="" />
              </div>
            );
          });
        })}
      </main>
    </div>
  );
}
