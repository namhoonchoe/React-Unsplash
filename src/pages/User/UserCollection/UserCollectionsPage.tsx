import { CollectionInfo } from "@/Types";
import { scrollToTop } from "@/utils/utilFunctions";
import { unsplashFetcher } from "@components/libs/unsplash";
import CollectionCard from "@components/ui/CollectionCard";
import LoadingSpinner from "@components/ui/LoadingSpinner";
import LoadMoreButton from "@components/ui/LoadMoreButton";
import { Link, useOutletContext, useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";

export default function UserCollectionsPage() {
  const { username } = useParams();
  const { totalCollections } = useOutletContext<ContextType>();

  const {
    data: collectionResults,
    isLoading,
    isValidating,
    size,
    setSize,
  } = useSWRInfinite<Array<CollectionInfo>>(
    (index) => `users/${username}/collections/${index}`,
    unsplashFetcher,
    {
      revalidateOnFocus: false,
    },
  );

  if (isLoading) return <LoadingSpinner />;

  if (totalCollections === 0)
    return (
      <main className="flex h-32 w-full items-center justify-center">
        <p>There are no collections here yet</p>
      </main>
    );

  if (collectionResults && collectionResults.length > 0)
    return (
      <>
        <main className="mb-20 grid w-full grid-cols-3 justify-items-center gap-6">
          {collectionResults.map((collectionList:Array<CollectionInfo>) => {
            return collectionList.map((collection) => {
              return (
                <Link to={`/collection/${collection.id}`} onClick={() => scrollToTop}>
                  <CollectionCard
                    sourceOne={`${collection.preview_photos[0].urls.small}q=50`}
                    sourceTwo={`${collection.preview_photos[1]?.urls.thumb}q=50`}
                    sourceThree={`${collection.preview_photos[2]?.urls.thumb}q=50`}
                    title={collection.title}
                    collectionSize={collection.total_photos}
                    user={collection.user.name}
                    tags={collection.tags.slice(3)}
                  />
                </Link>
              );
            });
          })}
        </main>
        <LoadMoreButton
          ArrayData={collectionResults}
          isValidating={isValidating}
          size={size}
          setSize={setSize}
        />
      </>
    );
}
