import { unsplashApi } from "@/components/libs/unsplash";
import ImageCard from "@/components/ui/ImageCard";
import { getAspectRatio } from "@/utils/utilFunctions";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

export default function DiscoverPage() {
  const { id } = useParams();
 
  const getTopic = async (url: string) => {
    const { data } = await unsplashApi.get(url);
    return data;
  };

  const getTopicPhotos = async (url: string) => {
    const { data } = await unsplashApi.get(url);
    return data;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: topic, isLoading: isAtopicLoading } = useSWR<any>(
    `topics/${id}`,
    getTopic
  );

  const {
    data: topicPhotoLists,
    size,
    setSize,
    isLoading: isPhotosLoading,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useSWRInfinite<Array<any>>(
    (index) => `topics/${id}/photos?page=${index + 1}`,
    getTopicPhotos
  );

  return (
    <div className="column-layout">
      <header className="w-full aspect-[3] bg-slate-300  overflow-hidden relative flex justify-center items-center">
        <div className="w-full h-full brightness-75 absolute top-0 left-0 ">
          {topic?.cover_photo.urls.full && (
            <ImageCard
              blurHash={topic?.cover_photo.blur_hash}
              imageUrl={topic?.cover_photo.urls.full}
            />
          )}
        </div>
        <div className="z-10 w-full  max-w-[70.5rem] flex justify-start items-center *:text-white ">
          <div className="flex flex-col gap-4 w-1/2 h-1/3">
            <h1 className="text-4xl font-bold">{topic?.title}</h1>
            <p className="text-pretty text-lg">{topic?.description}</p>
          </div>
        </div>
      </header>

      <main className="masonry-layout">
        {topicPhotoLists?.map((topicPhotoList: Array<any>) => {
          return topicPhotoList?.map((photo: any) => {
            return (
              <Link to={`/photo/${photo.id}`}  >
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
      </main>
    </div>
  );
}
