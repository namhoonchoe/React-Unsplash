import ThemeNavigatior from "@/components/ui/ThemeNavigatior";
import { unsplashApi } from "@components/libs/unsplash";
import { Outlet } from "react-router-dom";
import useSWR from "swr";

export default function HomePage() {
  const getTopicList = async (url: string) => {
    const { data } = await unsplashApi.get(url, {
      params: {
        per_page: 20,
        order_by: "featured",
      },
    });
    return data;
  };

  const { data: topics } = useSWR<Array<Topic>>("/topics", getTopicList,  {
    revalidateOnFocus: false,
  });
  
  return (
    <>
      <ThemeNavigatior topics={topics}/>
      <Outlet />
    </>
  );
}
