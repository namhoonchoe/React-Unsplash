import UserCollections from "@/pages/UserCollection/UserCollectionsPage";
import UserLikes from "@/pages/UserLikes/UserLikesPage";
import UserPhotos from "@/pages/UserPhoto/UserPhotosPage";
import Root from "@components/Root";
import Collection from "@pages/Collection";
import CollectionResults from "@pages/CollectionResults";
import Discover from "@pages/Discover";
import Editorial from "@pages/Editorial";
import Home from "@pages/Home";
import Photo from "@pages/Photo";
import PhotoResultsPage from "@pages/PhotoResults";
import Search from "@pages/Search";
import UserPage from "@pages/User";
import UserResults from "@pages/UserResults";
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
