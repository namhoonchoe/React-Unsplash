/* eslint-disable @typescript-eslint/no-explicit-any */
import { Photo } from "@/Types";
import MasonryContainer from "@/components/ui/MasonryContainer";
import { getAspectRatio } from "@/utils/utilFunctions";
import { unsplashApi } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import LoadMoreButton from "@components/ui/LoadMoreButton";
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
    isValidating,
    isLoading,
  } = useSWRInfinite<Array<Photo>>(
    (index) => `/photos?page=${index + 1}`,
    getEditorials,
  );

  if (isLoading)
    return (
      <div className="column-layout">
        <header className="skeleton aspect-[70/24] w-full overflow-hidden " />
        <main className="masonry-layout">
          <LoadingPlaceHolder />
        </main>
      </div>
    );
  if (homeFeeds)
    return (
      <div className="column-layout">
        <header className="relative flex aspect-[2] w-full items-center justify-center overflow-hidden bg-slate-300 md:aspect-[70/24]">
          <img
            src={imageUrl}
            className="absolute left-0 top-0 h-full w-full object-cover brightness-75"
            alt="hero image"
          />
          <div className="z-10 flex w-full max-w-[70.5rem] items-center justify-start px-4 *:text-white ">
            <div className="flex h-1/3 w-1/2 flex-col gap-4">
              <h1 className="font-bold text-2xl md:text-3xl  lg:text-4xl">
                Unsplash
              </h1>

              <p className="text-pretty  font-semibold text-xs sm:text-sm	 md:text-lg">
                The internet's source for visuals. Powered by creators
                everywhere.
              </p>
            </div>
          </div>
        </header>
        <MasonryContainer>
          {homeFeeds.map((homeFeed: Array<Photo>) => {
            return homeFeed.map((photo: Photo) => {
              return (
                <Link
                  to={`/photo/${photo.id}`}
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
        </MasonryContainer>
        <Outlet />
        <LoadMoreButton
          isValidating={isValidating}
          ArrayData={homeFeeds}
          size={size}
          setSize={setSize}
        />
      </div>
    );
}
