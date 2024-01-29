import { unsplashApi } from "@/components/libs/unsplash";
import CollectionCard from "@/components/ui/CollectionCard";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";

const getUserCollections = async (url: string) => {
  const {
    data 
  } = await unsplashApi.get(url);
  return data;
};

export default function UserCollections() {
  const { username } = useParams();

  const { data:collectionResults } = useSWR<Array<any>>(
    `users/${username}/collections`,
    getUserCollections,
    {
      revalidateOnFocus: false,
    }
  );

  return (
    <main className="w-full mb-20 grid grid-cols-3 justify-items-center gap-6">
      { collectionResults?.map((collection:any) =>{
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
      
        )
      })

      }
    </main>
   )
}
