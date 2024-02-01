import { unsplashFetcher } from "@components/libs/unsplash";
import LoadingSpinner from "@components/ui/LoadingSpinner";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
 

export default function UserResultsPage() {
  const { query } = useParams();

  const { data: userResult, isLoading } = useSWR<any>(
    `search/users?query=${query}`,
    unsplashFetcher,
    {
      revalidateOnFocus: false,
    }
  );
  
  

  if (isLoading) return <LoadingSpinner />;

  if(userResult && userResult.total === 0)
  return (
    <main className="w-full h-32 flex justify-center items-center">
      <p>Cannot find users</p>
    </main>
  )

  return (
    <section className="grid grid-cols-3 justify-items-center gap-6 mt-4">
      {userResult?.results.map((user: any) => {
        return (
          <Link to={`/user/${user.username}`}>
            <div className="flex justify-start items-center gap-4 w-[356px] aspect-[3] p-3 rounded-xl border">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src={`${user.profile_image.large}`} />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start">
                <h1 className="font-semibold capitalize   text-clip text-slate-600 text-xl overflow-hidden  ">
                  {user.name}
                </h1>

                <p className="text-slate-400 text-sm capitalize overflow-hidden text-ellipsis">
                  {user.username}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
