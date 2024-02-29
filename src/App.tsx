import GlobalConfig from "@components/GlobalConfig";
import RootRouter from "@components/Router";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <GlobalConfig>
      <RouterProvider router={RootRouter} />
    </GlobalConfig>
  );
}

export default App;
