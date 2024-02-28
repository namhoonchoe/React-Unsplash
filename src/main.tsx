import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import "./index.css";

if (import.meta.env.DEV ) {
  const { worker } = await import("./mocks/browser.ts");
  worker.start();
}


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
