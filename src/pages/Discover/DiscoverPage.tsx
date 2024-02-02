import { getAspectRatio } from "@/utils/utilFunctions";
import { Photo } from "@Types/photo";
import { Topic } from "@Types/topic";
import { unsplashFetcher } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import LoadMoreButton from "@components/ui/LoadMoreButton";
import LoadingPlaceHolder from "@components/ui/LoadingPlaceHolder";
import { Link, Outlet, useParams } from "react-router-dom";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

export default function DiscoverPage() {
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: topic } = useSWR<Topic>(`topics/${id}`, unsplashFetcher, {
    revalidateOnFocus: false,
  });

  const {
    data: topicPhotoLists,
    size,
    setSize,
    isLoading: isPhotosLoading,
    isValidating,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useSWRInfinite<Array<Photo>>(
    (index) => `topics/${id}/photos?page=${index + 1}`,
    unsplashFetcher,
    {
      revalidateOnFocus: false,
    },
  );

  if (isPhotosLoading)
    return (
      <div className="column-layout">
        <header className="skeleton  aspect-[2] w-full  " />
        <main className="masonry-layout">
          <LoadingPlaceHolder />
        </main>
      </div>
    );
  if (topicPhotoLists)
    return (
      <div className="column-layout ">
        <header className="relative flex aspect-[2]  w-full items-center justify-center overflow-hidden bg-slate-300">
          <div className="absolute left-0 top-0 h-full w-full brightness-75 ">
            {topic?.cover_photo.urls.full && (
              <ImageCard
                blurHash={topic?.cover_photo.blur_hash}
                imageUrl={topic?.cover_photo.urls.full}
              />
            )}
          </div>
          <div className="z-10 flex  w-full max-w-[70.5rem] items-center justify-start *:text-white ">
            <div className="flex h-1/3 w-1/2 flex-col gap-4">
              <h1 className="text-4xl font-bold">{topic?.title}</h1>
              <p className="text-pretty text-lg">{topic?.description}</p>
            </div>
          </div>
        </header>

        <main className="masonry-layout">
          {topicPhotoLists.map((topicPhotoList: Array<Photo>) => {
            return topicPhotoList.map((photo: Photo) => {
              return (
                <Link
                  to={`/discover/${id}/photo/${photo.id}`}
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
          ArrayData={topicPhotoLists}
          size={size}
          setSize={setSize}
        />
      </div>
    );
}
