import { Outlet } from "react-router-dom";
import Header from "./ui/Header";

export default function Root() {
  return (
    <div className="fit-center">
      <Header />
      <Outlet />
    </div>
  );
}
