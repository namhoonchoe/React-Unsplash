import { CollectionInfo } from "@/Types/collection";
import { unsplashFetcher } from "@components/libs/unsplash";
import CollectionCard from "@components/ui/CollectionCard";
import LoadingSpinner from "@components/ui/LoadingSpinner";
import { Link, useOutletContext, useParams } from "react-router-dom";
import useSWR from "swr";
  

export default function UserCollectionsPage() {
  const { username } = useParams();
  const { totalCollections } = useOutletContext<ContextType>();

  const { data: collectionResults, isLoading } = useSWR<Array<CollectionInfo>>(
    `users/${username}/collections`,
    unsplashFetcher,
    {
      revalidateOnFocus: false,
    }
  );

  if (isLoading) return <LoadingSpinner />;

  if (totalCollections === 0)
    return (
      <main className="w-full h-32 flex justify-center items-center">
        <p>Cannot find photos</p>
      </main>
    );

  if (collectionResults && collectionResults.length > 0)
    return (
      <main className="w-full mb-20 grid grid-cols-3 justify-items-center gap-6">
        {collectionResults?.map((collection) => {
          return (
            <Link to={`/collection/${collection.id}`}>
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
        })}
      </main>
    );
}
