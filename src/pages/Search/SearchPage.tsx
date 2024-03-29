import CheckIcon from "@/components/svgIcons/CheckIcon";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Orientation, queryParamState } from "@components/libs/recoil-atoms";
import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { scrollToTop } from "utils/utilFunctions";

export default function SearchReseultsPage() {
  const { query } = useParams();
  const matchPhotoTab = useMatch("/s/photo/:query");
  const matchUserTab = useMatch("/s/user/:query");
  const matchCollectionTab = useMatch("/s/collection/:query");
  const largerThanMd = useMediaQuery("(min-width: 900px)");
  const [queryParams, setQueryParams] = useRecoilState(queryParamState);
  const resetFilter = useResetRecoilState(queryParamState);
  return (
    <>
      <header className="sticky top-14 z-[30] flex h-12 w-full  items-center justify-between bg-white px-2 shadow-sm">
        <section className="flex h-full w-1/4  max-w-[360px] items-center  gap-3 font-semibold *:text-sm	   *:text-slate-500 *:md:text-base">
          <Link to={`/s/photo/${query}`} onClick={() => scrollToTop()}>
            <div
              className="flex h-full items-center justify-start gap-2 p-3"
              style={{
                borderBottom: matchPhotoTab ? "solid" : "none",
                borderBottomColor: "#475569",
              }}
            >
              {largerThanMd ? (
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
              ) : (
                <></>
              )}

              <p style={{ color: matchPhotoTab ? "#475569" : "#cbd5e1" }}>
                Photo
              </p>
            </div>
          </Link>
          <Link to={`/s/collection/${query}`} onClick={() => scrollToTop()}>
            <div
              className=" flex h-full items-center justify-start gap-2 p-3"
              style={{
                borderBottom: matchCollectionTab ? "solid" : "none",
                borderBottomColor: "#475569",
              }}
            >
              {largerThanMd ? (
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
              ) : (
                <></>
              )}

              <p style={{ color: matchCollectionTab ? "#475569" : "#cbd5e1" }}>
                Collections
              </p>
            </div>
          </Link>
          <Link to={`/s/user/${query}`} onClick={() => scrollToTop()}>
            <div
              className=" flex h-full items-center justify-start gap-2 p-3"
              style={{
                borderBottom: matchUserTab ? "solid" : "none",
                borderBottomColor: "#475569",
              }}
            >
              {largerThanMd ? (
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
              ) : (
                <></>
              )}

              <p style={{ color: matchUserTab ? "#475569" : "#cbd5e1" }}>
                User
              </p>
            </div>
          </Link>
        </section>
        {matchPhotoTab && largerThanMd && (
          <div className="flex items-center justify-start gap-4 pr-4 font-semibold *:text-slate-400">
            {(queryParams.isRelevant === false ||
              queryParams.orientation !== undefined) && (
              <div
                role="button"
                onClick={resetFilter}
                className="btn  btn-xs border bg-white sm:btn-sm  "
              >
                reset
              </div>
            )}

            <div className="dropdown rounded-lg border">
              <div
                tabIndex={0}
                role="button"
                className="btn  btn-xs bg-white  sm:btn-sm  "
              >
                Orientation
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] mt-2 rounded-box border bg-base-100 p-2 shadow *:capitalize"
              >
                <li>
                        <p
                          onClick={() =>
                            setQueryParams({
                              ...queryParams,
                              orientation: undefined,
                            })
                          }
                          style={{
                            color:
                              queryParams.orientation === undefined
                                ? "black"
                                : "",
                            fontWeight:
                              queryParams.orientation === undefined
                                ? "600"
                                : "",
                          }}
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
                          style={{
                            color:
                              queryParams.orientation === Orientation.Landscape
                                ? "black"
                                : "",
                            fontWeight:
                              queryParams.orientation === Orientation.Landscape
                                ? "600"
                                : "",
                          }}
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
                          style={{
                            color:
                              queryParams.orientation === Orientation.Portrait
                                ? "black"
                                : "",
                            fontWeight:
                              queryParams.orientation === Orientation.Portrait
                                ? "600"
                                : "",
                          }}
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
                          style={{
                            color:
                              queryParams.orientation === Orientation.Squarish
                                ? "black"
                                : "",
                            fontWeight:
                              queryParams.orientation === Orientation.Squarish
                                ? "600"
                                : "",
                          }}
                        >
                          squarish
                        </p>
                      </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end rounded-lg  border">
              <div
                tabIndex={0}
                role="button"
                className="btn  btn-xs border  bg-white sm:btn-sm "
              >
                Order by
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] mt-2 rounded-box border bg-base-100 p-1 shadow *:capitalize "
              >
                <li>
                  <div
                    className="flex items-center justify-start"
                    onClick={() =>
                      setQueryParams({ ...queryParams, isRelevant: false })
                    }
                  >
                    {queryParams.isRelevant === false ? (
                      <CheckIcon />
                    ) : (
                      <div className="h-6 w-6"></div>
                    )}
                    <p>latest</p>
                  </div>
                </li>
                <li>
                  <div
                    className="flex items-center justify-start "
                    onClick={() =>
                      setQueryParams({ ...queryParams, isRelevant: true })
                    }
                  >
                    {queryParams.isRelevant ? (
                      <CheckIcon />
                    ) : (
                      <div className="h-6 w-6"></div>
                    )}
                    <p>relevant</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
      <div className="mb-32 flex w-full flex-col items-center justify-start">
        <header className="flex h-20 w-full max-w-[70.5rem] items-center justify-start px-4">
          <p className="text-lg font-semibold capitalize sm:text-xl md:text-2xl">
            {query}
          </p>
        </header>
        <Outlet />
      </div>
    </>
  );
}
