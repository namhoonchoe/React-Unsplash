import LoadMoreButton from "@/components/ui/LoadMoreButton";
import { scrollToTop } from "@/utils/utilFunctions";
import { CollectionInfo } from "@Types/collection";
import { unsplashApi } from "@components/libs/unsplash";
import CollectionCard from "@components/ui/CollectionCard";
import LoadingSpinner from "@components/ui/LoadingSpinner";
import { Link, useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";

const getCollectionResults = async (url: string) => {
  const {
    data: { results },
  } = await unsplashApi.get(url);
  return results;
};

export default function CollectionReseultPage() {
  const { query } = useParams();

  const {
    data: collectionList,
    isLoading,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite<Array<CollectionInfo>>(
    (index) => `search/collections?query=${query}&page=${index + 1}`,
    getCollectionResults,
  );

  if (isLoading) return <LoadingSpinner />;

  if (collectionList && collectionList[0].length === 0)
    return (
      <main className="flex h-32 w-full items-center justify-center">
        <p className="text-lg font-semibold text-slate-500">
          no results found try different keywords
        </p>
      </main>
    );

  if (collectionList) {
    return (
      <>
        <main className="grid grid-cols-3 justify-items-center gap-6">
          {collectionList.map((collection) => {
            return collection.map((collectionInfo) => {
              return (
                <Link
                  to={`/collection/${collectionInfo.id}`}
                  onClick={() => scrollToTop}
                >
                  <CollectionCard
                    sourceOne={`${collectionInfo.preview_photos[0].urls.small}q=50`}
                    sourceTwo={`${collectionInfo.preview_photos[1]?.urls.thumb}q=50`}
                    sourceThree={`${collectionInfo.preview_photos[2]?.urls.thumb}q=50`}
                    title={collectionInfo.title}
                    collectionSize={collectionInfo.total_photos}
                    user={collectionInfo.user.name}
                    tags={collectionInfo.tags.slice(3)}
                  />
                </Link>
              );
            });
          })}
        </main>
        <LoadMoreButton
          ArrayData={collectionList}
          size={size}
          setSize={setSize}
          isValidating={isValidating}
        />
      </>
    );
  }
}
