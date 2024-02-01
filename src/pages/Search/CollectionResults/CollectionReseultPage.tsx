import { CollectionResult } from "@/Types/collectionResult";
import { unsplashFetcher } from "@components/libs/unsplash";
import CollectionCard from "@components/ui/CollectionCard";
import LoadingSpinner from "@components/ui/LoadingSpinner";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";

export default function CollectionReseultPage() {
  const { query } = useParams();

  const { data: collectionResult, isLoading } = useSWR<CollectionResult>(
    `search/collections?query=${query}`,
    unsplashFetcher,
  );

  if (isLoading) return <LoadingSpinner />;

  if (collectionResult?.total === 0)
    return (
      <main className="flex h-32 w-full items-center justify-center">
        <p>Cannot find photos</p>
      </main>
    );

  return (
    <main className="grid grid-cols-3 justify-items-center gap-6">
      {collectionResult?.results.map((result) => {
        return (
          <Link to={`/collection/${result.id}`}>
            <CollectionCard
              sourceOne={`${result.preview_photos[0].urls.small}q=50`}
              sourceTwo={`${result.preview_photos[1]?.urls.thumb}q=50`}
              sourceThree={`${result.preview_photos[2]?.urls.thumb}q=50`}
              title={result.title}
              collectionSize={result.total_photos}
              user={result.user.name}
              tags={result.tags.slice(3)}
            />
          </Link>
        );
      })}
    </main>
  );
}
