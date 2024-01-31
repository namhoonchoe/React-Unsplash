import { getAspectRatio } from "@/utils/utilFunctions";
import { unsplashApi } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import LoadingPlaceHolder from "@components/ui/LoadingPlaceHolder";
import { Link, Outlet, useParams } from "react-router-dom";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

const getCollection = async (url: string) => {
  const { data } = await unsplashApi.get(url);
  return data;
};

const getCollectionPhotos = async (url: string) => {
  const { data } = await unsplashApi.get(url);
  return data;
};

export default function CollectionPage() {
  const { id } = useParams();

  const { data: collection, isLoading: collectionLoading } = useSWR(
    `collections/${id}`,
    getCollection
  );

  const { data: photoPages, isLoading } = useSWRInfinite<Array<any>>(
    (index) => `/collections/${id}/photos?page=${index + 1}`,
    getCollectionPhotos
  );

  if (isLoading)
    return (
      <div className="column-layout gap-0 ">
        <header className="w-full max-w-[70.5rem] h-20 px-2 flex flex-col justify-center items-start gap-4 my-10 ">
          <div className="flex flex-col gap-4 w-full">
            <div className="skeleton h-4 w-1/5"></div>
            <div className="skeleton h-4 w-1/5"></div>
          </div>
        </header>
        <main className="masonry-layout">
          <LoadingPlaceHolder />
        </main>
      </div>
    );

  return (
    <div className="column-layout gap-0 bg-slate-50 ">
      <header className="w-full max-w-[70.5rem] h-20 px-2 flex flex-col justify-center items-start gap-4 my-10 ">
        <h1 className="text-2xl font-bold">{collection?.title}</h1>
        <p className="text-pretty text-lg capitalize text-slate-500">
          {collection?.total_photos} photos
        </p>
      </header>
      <main className="masonry-layout">
        {photoPages?.map((collectionPhotos: Array<any>) => {
          return collectionPhotos?.map((photo: any) => {
            return (
              <Link
                to={`/collection/${id}/photo/${photo.id}`}
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
    </div>
  );
}
