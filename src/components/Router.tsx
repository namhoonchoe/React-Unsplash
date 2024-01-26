import PhotoResultsPage from "@/pages/PhotoResults";
import Root from "@components/Root";
import Collection from "@pages/Collection";
import CollectionResults from "@pages/CollectionResults";
import Discover from "@pages/Discover";
import Editorial from "@pages/Editorial";
import Home from "@pages/Home";
import Photo from "@pages/Photo";
import Search from "@pages/Search";
import UserResults from "@pages/UserResults";
import { createBrowserRouter } from "react-router-dom";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Editorial />,
          },
          {
            path: "discover/:id",
            element: <Discover />,
          },
        ],
      },

      {
        path: "photo/:id",
        element: <Photo />,
      },
      {
        path: "collection/:id",
        element: <Collection />,
      },
      {
        path: "s/",
        element: <Search />,
        children: [
          {
            path: "photo/:query",
            element: <PhotoResultsPage />,
          },
          {
            path: "collection/:query",
            element: <CollectionResults />,
          },
          {
            path: "user/:query",
            element: <UserResults />,
          },
        ],
      },
    ],
  },
]);

export default RootRouter;
