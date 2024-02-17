import LoadMoreButton from "@/components/ui/LoadMoreButton";
import { getAspectRatio } from "@/utils/utilFunctions";
import { CollectionInfo } from "@Types/collection";
import { Photo } from "@Types/photo";
import { unsplashFetcher } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import LoadingPlaceHolder from "@components/ui/LoadingPlaceHolder";
import Masonry from "@mui/lab/Masonry";
import { Link, Outlet, useParams } from "react-router-dom";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

export default function CollectionPage() {
  const { id } = useParams();

  const { data: collectionInfo } = useSWR<CollectionInfo>(
    `collections/${id}`,
    unsplashFetcher,
  );

  const {
    data: collectionPhotos,
    isLoading,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite<Array<Photo>>(
    (index) => `/collections/${id}/photos?page=${index + 1}`,
    unsplashFetcher,
  );

  if (isLoading)
    return (
      <div className="column-layout gap-0 ">
        <header className="my-10 flex h-20 w-full max-w-[70.5rem] flex-col items-start justify-center gap-4 px-2 ">
          <div className="flex w-full flex-col gap-4">
            <div className="skeleton h-4 w-1/5"></div>
            <div className="skeleton h-4 w-1/5"></div>
          </div>
        </header>
        <main className="masonry-layout">
          <LoadingPlaceHolder />
        </main>
      </div>
    );
  if (collectionPhotos)
    return (
      <div className="column-layout mb-0 gap-10 bg-slate-50 pb-10 ">
        <header className="mt-10 flex h-20 w-full max-w-[70.5rem] flex-col items-start justify-center gap-4 px-2 ">
          <h1 className="text-2xl font-bold">{collectionInfo?.title}</h1>
          <p className="text-pretty text-lg capitalize text-slate-500">
            {collectionInfo?.total_photos} photos
          </p>
        </header>
        <Masonry
          columns={4}
          spacing={4}
          sx={{ width: "100%", maxWidth: "70.5rem" }}>
          {collectionPhotos?.map((collectionPhotos: Array<Photo>) => {
            return collectionPhotos?.map((photo: Photo) => {
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
        </Masonry>
        <Outlet />

        <LoadMoreButton
          isValidating={isValidating}
          ArrayData={collectionPhotos}
          size={size}
          setSize={setSize}
        />
      </div>
    );
}
