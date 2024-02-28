import RootRouter from "@components/Router";
import { RouterProvider } from "react-router-dom";
import { SWRConfig } from "swr";

function App() {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        onError: (error, key) => {},
      }}
    >
      <div className="fit-center">
        <RouterProvider router={RootRouter} />
      </div>
    </SWRConfig>
  );
}

export default App;
