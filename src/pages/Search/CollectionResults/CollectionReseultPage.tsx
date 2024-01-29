import { unsplashApi } from "@/components/libs/unsplash";
import CollectionCard from "@/components/ui/CollectionCard";
import { Link, useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";

const searchCollections = async (url: string) => {
  const {
    data: { results },
  } = await unsplashApi.get(url);
  return results;
};

export default function CollectionReseultPage() {
  const { query } = useParams();

  const {
    data: collectionResultsArray,
    isLoading,
    size,
    setSize,
  } = useSWRInfinite<Array<Array<any>>>(
    (index) => `search/collections?query=${query}&page=${index + 1}`,
    searchCollections
  );

  return (
    <main className="grid grid-cols-3 justify-items-center gap-6">
      {collectionResultsArray?.map((collectionResults: Array<any>) => {
        return collectionResults?.map((collection: any) => {
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
        });
      })}
    </main>
  );
}
