import { UserResult } from "@Types/userResult";
import { unsplashFetcher } from "@components/libs/unsplash";
import LoadingSpinner from "@components/ui/LoadingSpinner";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";

export default function UserResultsPage() {
  const { query } = useParams();

  const { data: userResult, isLoading } = useSWR<UserResult>(
    `search/users?query=${query}`,
    unsplashFetcher,
    {
      revalidateOnFocus: false,
    },
  );

  if (isLoading) return <LoadingSpinner />;

  if (userResult && userResult.total === 0)
    return (
      <main className="flex h-32 w-full items-center justify-center">
        <p>Cannot find users</p>
      </main>
    );

  return (
    <section className="mt-4 grid grid-cols-3 justify-items-center gap-6">
      {userResult?.results.map((user) => {
        return (
          <Link to={`/user/${user.username}`}>
            <div className="flex aspect-[3] w-[356px] items-center justify-start gap-4 rounded-xl border p-3">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src={`${user.profile_image.large}`} />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h1 className="overflow-hidden text-clip   text-xl font-semibold capitalize text-slate-600  ">
                  {user.name}
                </h1>

                <p className="overflow-hidden text-ellipsis text-sm capitalize text-slate-400">
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
