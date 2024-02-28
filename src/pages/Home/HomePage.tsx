import ThemeNavigatior from "@/components/ui/ThemeNavigator";
import { Topic } from "@/Types";
import { unsplashApi } from "@components/libs/unsplash";
import { Outlet } from "react-router-dom";
import useSWR from "swr";


export default function HomePage() {
  const getTopicList = async (url: string) => {
    const { data } = await unsplashApi.get(url, {
      params: {
        order_by: "featured",
      },
    });
    return data;
  };

  const { data: topics } = useSWR<Array<Topic>>("/topics", getTopicList);

  return (
    <>
      <ThemeNavigatior topics={topics} />
      <Outlet />
    </>
  );
}
