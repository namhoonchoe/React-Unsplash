import { User } from "@/Types";
import { scrollToTop } from "@/utils/utilFunctions";
import { unsplashApi } from "@components/libs/unsplash";
import LoadMoreButton from "@components/ui/LoadMoreButton";
import LoadingSpinner from "@components/ui/LoadingSpinner";
import { Link, useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";

const getUserResults = async (url: string) => {
  const {
    data: { results },
  } = await unsplashApi.get(url);
  return results;
};

export default function UserResultsPage() {
  const { query } = useParams();

  const {
    data: userResult,
    isLoading,
    isValidating,
    size,
    setSize,
  } = useSWRInfinite<Array<User>>(
    (index) => `search/users?query=${query}&page=${index + 1}`,
    getUserResults
  );

  if (isLoading) return <LoadingSpinner />;

  if (userResult && userResult[0].length === 0)
    return (
      <main className="flex h-32 w-full items-center justify-center">
        <p className="text-lg font-semibold text-slate-500">
          no results found try different keywords
        </p>
      </main>
    );
  if (userResult)
    return (
      <>
        <section className="my-4 responsive-grid">
          {userResult.map((userFeed) => {
            return userFeed.map((user) => {
              return (
                <Link to={`/user/${user.username}`} onClick={() => scrollToTop}>
                  <div className="flex flex-col sm:flex-row  aspect-[3] w-full max-w-[356px] items-center justify-center sm:justify-start gap-4 rounded-xl border p-3">
                    <div className="avatar">
                      <div className="w-20 rounded-full">
                        <img src={`${user.profile_image.large}`} />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                      <h1 className="overflow-hidden text-clip text-lg   md:text-xl font-semibold capitalize text-slate-600  ">
                        {user.name}
                      </h1>

                      <p className="overflow-hidden text-ellipsis text-sm capitalize text-slate-400">
                        {user.username}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            });
          })}
        </section>
        <LoadMoreButton
          size={size}
          setSize={setSize}
          ArrayData={userResult}
          isValidating={isValidating}
        />
      </>
    );
}
