import RootRouter from "@components/Router";
import { RouterProvider } from "react-router-dom";
 
function App() {
  return (
    <div className="fit-center">
      <RouterProvider router={RootRouter} />
    </div>
  );
}

export default App;
