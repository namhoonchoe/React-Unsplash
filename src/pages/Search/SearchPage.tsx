import { Orientation, queryParamState } from "@components/libs/recoil-atoms";
import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { scrollToTop } from "utils/utilFunctions";

export default function SearchReseultsPage() {
  const { query } = useParams();
  const matchPhotoTab = useMatch("/s/photo/:query");
  const matchUserTab = useMatch("/s/user/:query");
  const matchCollectionTab = useMatch("/s/collection/:query");
  const [queryParams, setQueryParams] = useRecoilState(queryParamState);
  const resetFilter = useResetRecoilState(queryParamState);
  return (
    <>
      <header className="w-full h-12 px-2 flex justify-between items-center  shadow-sm sticky top-16 z-[30] bg-white">
        <section className="flex items-center gap-3  w-1/4 h-full  max-w-[360px]  *:text-slate-500 font-semibold">
          <Link to={`/s/photo/${query}`} onClick={() => scrollToTop()}>
            <div
              className="h-full flex justify-start items-center gap-2 p-3"
              style={{
                borderBottom: matchPhotoTab ? "solid" : "none",
                borderBottomColor: "#475569",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                fill={matchPhotoTab ? "#475569" : "#e2e8f0"}
                aria-hidden="false"
              >
                <desc lang="en-US">A photo</desc>
                <path d="M20 3H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1ZM5 18l3.5-4.5 2.5 3 3.5-4.5 4.5 6H5Z"></path>
              </svg>
              <p style={{ color: matchPhotoTab ? "#475569" : "#cbd5e1" }}>
                Photo
              </p>
            </div>
          </Link>
          <Link to={`/s/collection/${query}`} onClick={() => scrollToTop()}>
            <div
              className=" h-full flex justify-start items-center gap-2 p-3"
              style={{
                borderBottom: matchCollectionTab ? "solid" : "none",
                borderBottomColor: "#475569",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                fill={matchCollectionTab ? "#475569" : "#e2e8f0"}
                aria-hidden="false"
              >
                <desc lang="en-US">A stack of photos</desc>
                <path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6Zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7Z"></path>
              </svg>
              <p style={{ color: matchCollectionTab ? "#475569" : "#cbd5e1" }}>
                Collections
              </p>
            </div>
          </Link>
          <Link to={`/s/user/${query}`} onClick={() => scrollToTop()}>
            <div
              className=" h-full flex justify-start items-center gap-2 p-3"
              style={{
                borderBottom: matchUserTab ? "solid" : "none",
                borderBottomColor: "#475569",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                fill={matchUserTab ? "#475569" : "#e2e8f0"}
                aria-hidden="false"
              >
                <desc lang="en-US">A group of people</desc>
                <path d="M23 17v3h-4v-3c0-1.7-1-2.9-2.3-3.9 2.7.4 6.3 1.7 6.3 3.9ZM9 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Zm6 0c2.2 0 4-1.8 4-4s-1.8-4-4-4c-.5 0-.9.1-1.3.2C14.5 5.3 15 6.6 15 8s-.5 2.7-1.3 3.8c.4.1.8.2 1.3.2Zm-6 1c-2.7 0-8 1.3-8 4v3h16v-3c0-2.7-5.3-4-8-4Z"></path>
              </svg>
              <p style={{ color: matchUserTab ? "#475569" : "#cbd5e1" }}>
                User
              </p>
            </div>
          </Link>
        </section>
        {matchPhotoTab && (
          <div className="flex justify-start items-center gap-4 pr-4 *:text-slate-500 font-semibold">
            {(queryParams.isRelevant === false ||
              queryParams.orientation !== undefined) && (
              <div
                role="button"
                onClick={resetFilter}
                className="btn btn-sm btn-ghost border  "
              >
                reset
              </div>
            )}

            <div className="dropdown border rounded-lg">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-sm btn-ghost   "
              >
                Orientation
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  *:capitalize"
              >
                <li>
                  <p
                    onClick={() =>
                      setQueryParams({ ...queryParams, orientation: undefined })
                    }
                  >
                    ALL
                  </p>
                </li>
                <li>
                  <p
                    onClick={() =>
                      setQueryParams({
                        ...queryParams,
                        orientation: Orientation.Landscape,
                      })
                    }
                  >
                    landscape
                  </p>
                </li>
                <li>
                  <p
                    onClick={() =>
                      setQueryParams({
                        ...queryParams,
                        orientation: Orientation.Portrait,
                      })
                    }
                  >
                    portrait
                  </p>
                </li>
                <li>
                  <p
                    onClick={() =>
                      setQueryParams({
                        ...queryParams,
                        orientation: Orientation.Squarish,
                      })
                    }
                  >
                    squarish
                  </p>
                </li>
              </ul>
            </div>
            <div className="dropdown border rounded-lg">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-sm btn-ghost border "
              >
                Order by
              </div>
              <ul
                tabIndex={0}
                className="p-1 shadow menu dropdown-content z-[1] bg-base-100 rounded-box  *:capitalize "
              >
                <li>
                  <p
                    onClick={() =>
                      setQueryParams({ ...queryParams, isRelevant: false })
                    }
                  >
                    latest
                  </p>
                </li>
                <li>
                  <p
                    onClick={() =>
                      setQueryParams({ ...queryParams, isRelevant: true })
                    }
                  >
                    relevant
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
      <div className="w-full flex flex-col items-center justify-start mb-32">
        <header className="w-full max-w-[70.5rem] h-20 flex justify-start items-center">
          <p className="text-2xl font-semibold capitalize">{query}</p>
        </header>
        <Outlet />
      </div>
    </>
  );
}
