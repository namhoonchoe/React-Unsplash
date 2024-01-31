import { unsplashApi } from "@components/libs/unsplash";
import ImageCard from "@components/ui/ImageCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";

const getPhoto = async (url: string) => {
  const { data } = await unsplashApi.get(url);
  return data;
};

export default function PhotoDetailPage() {
  const {
    state: { aspectRatio },
  } = useLocation();
  const { photoId } = useParams();
  const navigate = useNavigate();

  const { data: photo, isLoading } = useSWR<any>(`photos/${photoId}`, getPhoto);

  if(isLoading) return (
    <section className="w-[80vw] flex flex-col items-center justify-start gap-4 relative mb-8 ">
      <header className="w-full h-16 flex justify-between items-center shadow-md px-4  sticky top-0 z-[30]  bg-white ">
      
      </header>
      <main className="w-full flex justify-center">
        { aspectRatio >= 1? 
        <></>
        : <></>

        }
      </main>
      <footer className="w-full flex flex-col items-start justify-start p-4 gap-6">
        
      </footer>
    </section>
  )

  return (
    <section className="w-[80vw] flex flex-col items-center justify-start gap-4 relative mb-8 ">
      <header className="w-full h-16 flex justify-between items-center shadow-md px-4  sticky top-0 z-[30]  bg-white ">
        <div className="flex items-center justify-start gap-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={photo?.user.profile_image.medium} />
            </div>
          </div>
          <div>
            <p className="font-semibold">{photo?.user.name} </p>
            <p className="text-sm text-slate-400">{photo?.user.username} </p>
          </div>
        </div>
        <button
          className="btn btn-sm text-slate-400 btn-circle btn-ghost  "
          onClick={() => navigate(-1)}
        >
          ✕
        </button>
      </header>
      <main className="w-full flex justify-center">
        {aspectRatio >= 1 ? (
          <div
            className="w-4/5 -z-10"
            style={{
              aspectRatio: aspectRatio,
            }}
          >
            <ImageCard
              imageUrl={photo?.urls?.regular}
              blurHash={photo?.blur_hash}
            />
          </div>
        ) : (
          <div
            className="w-1/3 "
            style={{
              aspectRatio: aspectRatio,
            }}
          >
            <ImageCard
              imageUrl={photo?.urls?.regular}
              blurHash={photo?.blur_hash}
            />
          </div>
        )}
      </main>
      <footer className="w-full flex flex-col items-start justify-start p-4 gap-6">
        <section className="w-full flex justify-start items-center gap-8 *:capitalize">
          <div className="flex flex-col justify-start gap-1">
            <p className="text-sm text-slate-400 ">views</p>
            <p className="  text-slate-600">{photo?.views}</p>
          </div>
          <div className="flex flex-col justify-start gap-1">
            <p className="text-sm text-slate-400  ">downloads</p>
            <p className="   text-slate-600">{photo?.downloads}</p>
          </div>
          {photo?.topics && photo?.topics.length > 0 && (
            <div className="flex flex-col justify-start gap-1">
              <p className="text-sm text-slate-400 ">topics</p>
              <div className="flex items-center justify-start gap-2">
                {photo?.topics.map((topic: any) => (
                  <p className="   text-slate-600">{topic.title}</p>
                ))}
              </div>
            </div>
          )}
        </section>
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex items-center justify-start gap-1 py-1">
            <svg
              width="16"
              fill={"#94a3b8"}
              height="16"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="false"
            >
              <desc lang="en-US">A map marker</desc>
              <path d="M17.6 4.2C16 2.7 14.1 2 12 2s-4 .7-5.6 2.2C4.8 5.7 4 7.7 4 10.2c0 1.7.7 3.5 2 5.4 1.3 2 3.3 4.1 6 6.4 2.7-2.3 4.7-4.4 6-6.4 1.3-2 2-3.8 2-5.4 0-2.5-.8-4.5-2.4-6zm-1.1 10.1c-1 1.5-2.5 3.2-4.5 5.1-2-1.9-3.5-3.6-4.5-5.1-1-1.5-1.5-2.9-1.5-4.1 0-1.8.6-3.3 1.7-4.5C8.9 4.6 10.3 4 12 4s3.1.6 4.3 1.7c1.2 1.2 1.7 2.6 1.7 4.5 0 1.2-.5 2.5-1.5 4.1zm-2-4.3c0 1.4-1.1 2.5-2.5 2.5S9.5 11.4 9.5 10s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z"></path>
            </svg>
            <p className="text-sm text-slate-400">{photo?.location.name}</p>
          </div>
          <div className="flex items-center justify-start gap-1 py-1">
            <svg
              width="16"
              fill={"#94a3b8"}
              height="16"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="false"
            >
              <desc lang="en-US">Calendar outlined</desc>
              <path d="M21 6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14z"></path>
            </svg>
            <p className="text-sm text-slate-400">{photo?.created_at}</p>
          </div>
          <div className="flex items-center justify-start gap-1 py-1">
            <svg
              width="16"
              fill={"#94a3b8"}
              height="16"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="false"
            >
              <desc lang="en-US">Camera</desc>
              <path d="m14.12 4 1.83 2H20v12H4V6h4.05l1.83-2h4.24ZM15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2Zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Z"></path>
            </svg>
            <p className="text-sm text-slate-400">{photo?.exif.name}</p>
          </div>
        </div>
        <section className="w-full flex flex-wrap items-center justify-start gap-2 ">
          {photo?.tags.map((tag) => (
            <button className="btn btn-sm capitalize text-slate-600 font-medium">{tag.title}</button>
          ))}
        </section>
      </footer>
    </section>
  );
}
