import CollectionResults from "@/pages/Search/CollectionResults";
import PhotoResultsPage from "@/pages/Search/PhotoResults";
import UserResults from "@/pages/Search/UserResults";
import UserPage from "@/pages/User";
import UserCollections from "@/pages/User/UserCollections";
import UserLikes from "@/pages/User/UserLikes";
import UserPhotos from "@/pages/User/UserPhotos";
import Root from "@components/Root";
import Collection from "@pages/Collection";
import Discover from "@pages/Discover";
import Editorial from "@pages/Editorial";
import Home from "@pages/Home";
import Photo from "@pages/Photo";
import Search from "@pages/Search";
import { createBrowserRouter } from "react-router-dom";
import PopupModal from "./ui/PopupModal";

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
            children: [
              {
                path: "photo/:photoId",
                element:<PopupModal>
                  <Photo />
                </PopupModal>
               },
            ],
          },
          {
            path: "discover/:id",
            element: <Discover />,
            children: [
              {
                path: "photo/:photoId",
                element:<PopupModal>
                <Photo />
              </PopupModal>
              },
            ],
          },
        ],
      },

      {
        path: "collection/:id",
        element: <Collection />,
        children: [
          {
            path: "photo/:photoId",
            element:<PopupModal>
            <Photo />
          </PopupModal>
          },
        ],
      },
      {
        path: "user/:username",
        element: <UserPage />,
        children: [
          {
            path: "",
            element: <UserPhotos />,
            children: [
              {
                path: "photo/:photoId",
                element: <PopupModal>
                <Photo />
              </PopupModal>
              },
            ],
          },
          {
            path: "likes",
            element: <UserLikes />,
          },
          {
            path: "collections",
            element: <UserCollections />,
          },
        ],
      },

      {
        path: "s/",
        element: <Search />,
        children: [
          {
            path: "photo/:query",
            element: <PhotoResultsPage />,
            children: [
              {
                path: "photo/:photoId",
                element:<PopupModal>
                <Photo />
              </PopupModal>
              },
            ],
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
