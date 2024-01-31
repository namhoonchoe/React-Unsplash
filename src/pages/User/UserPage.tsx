import { unsplashApi } from "@/components/libs/unsplash";
import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import useSWR from "swr";

const getUserDetail = async (url: string) => {
  const { data } = await unsplashApi.get(url);
  return data;
};

export default function UserPage() {
  const { username } = useParams();

  const matchPhotosTab = useMatch("/user/:username");
  const matchLikesTab = useMatch("/user/:username/likes");
  const matchCollectionsTab = useMatch("/user/:username/collections");

  const { data: userDetail } = useSWR(`/users/${username}`, getUserDetail, {
    revalidateOnFocus: false,
  });

  return (
    <div className="w-full flex flex-col items-center justify-start mb-32 gap-10">
     
      <header className="w-full aspect-[5] flex flex-col justify-between items-center shadow-sm pt-12">
       
        <div className="z-10 w-full max-w-[70.5rem] justify-self-center  flex justify-start items-center gap-1">
          <div className="w-1/4 h-full flex items-center justify-center">
            <div className="avatar">
              <div className="w-32 rounded-full">
                <img src={userDetail?.profile_image.large} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/4 max-w-[432px]   self-center justify-start items-start  gap-4">
            <p className="text-4xl font-semibold">{userDetail?.name}</p>
            <p className="text-lg break-normal ">{userDetail?.bio}</p>
            {userDetail?.tags?.custom?.length > 0 && (
              <p className="text-md">Interests</p>
            )}
            <div className="flex items-center justify-start gap-2  ">
              <div className="flex items-center justify-start gap-2  ">
                {userDetail?.tags?.custom?.map((tag: any) => (
                  <button className="btn btn-sm capitalize">{tag.title}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <section className="flex justify-start	items-center gap-3  w-full max-w-[70.5rem] h-12  *:text-slate-500 font-semibold">
          <Link to={`/user/${username}`}>
            <div
              className="h-full flex justify-start items-center gap-2 p-3"
              style={{
                borderBottom: matchPhotosTab ? "solid" : "none",
                borderBottomColor: "#475569",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                fill={matchPhotosTab ? "#475569" : "#e2e8f0"}
                aria-hidden="false"
              >
                <desc lang="en-US">A photo</desc>
                <path d="M20 3H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1ZM5 18l3.5-4.5 2.5 3 3.5-4.5 4.5 6H5Z"></path>
              </svg>
              <p style={{ color: matchPhotosTab ? "#475569" : "#cbd5e1" }}>
                Photos {userDetail?.total_photos}
              </p>
            </div>
          </Link>
          <Link to={`/user/${username}/likes`}>
            <div
              className=" h-full flex justify-start items-center gap-2 p-3"
              style={{
                borderBottom: matchLikesTab ? "solid" : "none",
                borderBottomColor: "#475569",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                fill={matchLikesTab ? "#475569" : "#e2e8f0"}
                aria-hidden="false"
              >
                <desc lang="en-US">A heart</desc>
                <path d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z"></path>
              </svg>
              <p style={{ color: matchLikesTab ? "#475569" : "#cbd5e1" }}>
                likes {userDetail?.total_likes}
              </p>
            </div>
          </Link>
          <Link to={`/user/${username}/collections`}>
            <div
              className=" h-full flex justify-start items-center gap-2 p-3"
              style={{
                borderBottom: matchCollectionsTab ? "solid" : "none",
                borderBottomColor: "#475569",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                fill={matchCollectionsTab ? "#475569" : "#e2e8f0"}
                aria-hidden="false"
              >
                <desc lang="en-US">A stack of photos</desc>
                <path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6Zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7Z"></path>
              </svg>
              <p style={{ color: matchCollectionsTab ? "#475569" : "#cbd5e1" }}>
                Collections  {userDetail?.total_collections}
              </p>
            </div>
          </Link>
        </section>
      </header>
      <Outlet />
    </div>
  );
}
