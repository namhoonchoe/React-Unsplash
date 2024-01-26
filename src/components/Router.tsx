import Root from "@components/Root";
import Collection from "@pages/Collection";
import CollectionResults from "@pages/CollectionResults";
import Discover from "@pages/Discover";
import Editorial from "@pages/Editorial";
import Home from "@pages/Home";
import Photo from "@pages/Photo";
import Search from "@pages/Search";
import { createBrowserRouter } from "react-router-dom";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        children:[
          {
            path: "",
            element: <Editorial />,
          },
          {
            path: "discover/:theme",
            element: <Discover />,
          },
        ]
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
        path: "s/photo/:query",
        element: <Search />,
      },
      {
        path: "s/collection/:query",
        element: <CollectionResults />,
      },
    ],
  },
]);

export default RootRouter;