import CheckIcon from "@/components/svgIcons/CheckIcon";
import FilterIcon from "@/components/svgIcons/FilterIcon";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Photo } from "@/Types";
import { getAspectRatio } from "@/utils/utilFunctions";
import {
  Orientation,
  queryParamState,
  SearchQueryParams,
} from "@components/libs/recoil-atoms";
import { unsplashApi } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import LoadingPlaceHolder from "@components/ui/LoadingPlaceHolder";
import LoadMoreButton from "@components/ui/LoadMoreButton";
import MasonryContainer from "@components/ui/MasonryContainer";
import { useRef } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import useSWRInfinite from "swr/infinite";

const getPhotoResults = async (url: string) => {
  const {
    data: { results },
  } = await unsplashApi.get(url);
  return results;
};

export default function PhotoResultsPage() {
  const { orientation, isRelevant } =
    useRecoilValue<SearchQueryParams>(queryParamState);
  const { query } = useParams();
  const [queryParams, setQueryParams] = useRecoilState(queryParamState);
  const resetFilter = useResetRecoilState(queryParamState);
  const largerThanMd = useMediaQuery("(min-width: 900px)");
  const modalRef = useRef<HTMLDialogElement>(null);
  const {
    data: photoResult,
    isLoading,
    isValidating,
    size,
    setSize,
  } = useSWRInfinite<Array<Photo>>(
    (index) =>
      `search/photos?query=${query}&page=${index + 1}${
        orientation !== undefined ? `&orientation=${orientation}` : ""
      }${isRelevant ? "" : "&order_by=latest"}`,
    getPhotoResults,
    {
      revalidateOnFocus: false,
    },
  );

  if (isLoading)
    return (
      <main className="masonry-layout">
        <LoadingPlaceHolder />
      </main>
    );

  if (photoResult && photoResult[0].length === 0)
    return (
      <main className="flex h-32 w-full items-center justify-center">
        <p className="text-lg font-semibold text-slate-600">
          no results found try different keywords
        </p>
      </main>
    );

  if (photoResult)
    return (
      <>
        <MasonryContainer>
          {photoResult.map((photoFeed) => {
            return photoFeed.map((photo) => {
              return (
                <Link
                  to={`/s/photo/${query}/photo/${photo.id}`}
                  state={{
                    aspectRatio: getAspectRatio(photo.width, photo.height),
                  }}
                >
                  <div
                    className="masonry-item"
                    style={{
                      aspectRatio: getAspectRatio(photo.width, photo.height),
                    }}
                  >
                    <ImageCard
                      imageUrl={photo.urls.regular}
                      blurHash={photo.blur_hash}
                    />
                  </div>
                </Link>
              );
            });
          })}
        </MasonryContainer>
        <Outlet />

        <LoadMoreButton
          ArrayData={photoResult}
          size={size}
          setSize={setSize}
          isValidating={isValidating}
        />
        {largerThanMd ? (
          <></>
        ) : (
          <>
            <button
              className="btn btn-md fixed bottom-4 rounded-full border bg-white shadow-sm"
              onClick={() => modalRef.current?.showModal()}
            >
              <FilterIcon />
              Filters
            </button>
            <dialog ref={modalRef} className="modal modal-bottom	 ">
              <div className="modal-box h-96">
                <section className="flex w-full flex-col items-start gap-2">
                  <header className="flex w-full justify-between border-b-2 border-slate-200  py-2 text-lg	font-bold">
                    <p className="text-lg	font-bold">Filters</p>
                    {(queryParams.isRelevant === false ||
                      queryParams.orientation !== undefined) && (
                      <div
                        role="button"
                        onClick={resetFilter}
                        className="fade-animation  btn btn-sm  rounded-full border bg-white shadow    "
                      >
                        reset
                      </div>
                    )}
                  </header>

                  <div className="w-full  border-b-2 border-slate-200	pb-2">
                    <h1 className="mb-2 font-semibold text-slate-600">
                      Orientation
                    </h1>

                    <ul className="pl-1 *:capitalize  *:text-slate-400">
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
                  <div className="w-full  border-b-2 border-slate-200	pb-2">
                    <h1 className="mb-2 font-semibold text-slate-600">
                      Order by
                    </h1>

                    <ul className="pl-1     *:capitalize ">
                      <li>
                        <div
                          className="flex items-center justify-start"
                          onClick={() =>
                            setQueryParams({
                              ...queryParams,
                              isRelevant: false,
                            })
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
                </section>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </>
        )}
      </>
    );
}
