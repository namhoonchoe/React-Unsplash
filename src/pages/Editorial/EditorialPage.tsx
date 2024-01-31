/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAspectRatio } from "@/utils/utilFunctions";
import { unsplashApi } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import LoadingPlaceHolder from "@components/ui/LoadingPlaceHolder";
import { Link, Outlet } from "react-router-dom";
import useSWRInfinite from "swr/infinite";
import imageUrl from "../../../public/assets/masonry image.png";

export default function EditorialPage() {
  const getEditorials = async (url: string) => {
    const { data } = await unsplashApi.get(url, {
      params: {
        order_by: "latest",
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

  if(isLoading) return (
    <main className="masonry-layout">
      <LoadingPlaceHolder/>
    </main>
  )

  return (
    <div className="column-layout">
      <header className="w-full aspect-[70/24] overflow-hidden bg-slate-300 relative flex justify-center items-center">
        <img
          src={imageUrl}
          className="w-full h-full object-cover brightness-75 absolute top-0 left-0"
          alt="hero image"
        />
        <div className="z-10 w-full  max-w-[70.5rem] flex justify-start items-center *:text-white ">
          <div className="flex flex-col gap-4 w-1/2 h-1/3">
            <h1 className="text-4xl font-bold">Unsplash </h1>
            <p className="text-pretty text-lg font-semibold">
              The internet's source for visuals. Powered by creators everywhere.
            </p>
          </div>
        </div>
      </header>
      <main className="masonry-layout">
        {homeFeeds?.map((homeFeed: Array<Photo>) => {
          return homeFeed?.map((photo: Photo) => {
            return (
              <Link to={`/photo/${photo.id}`} state={{ aspectRatio: getAspectRatio(photo.width, photo.height)}}>
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
    </div>
  );
}
