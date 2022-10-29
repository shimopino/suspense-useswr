import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./reset.module.scss";

const prepare = async () => {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");
    worker.start();
  }
};

prepare().then(() =>
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <Suspense fallback={"loading..."}>
        <App />
      </Suspense>
    </React.StrictMode>
  )
);
