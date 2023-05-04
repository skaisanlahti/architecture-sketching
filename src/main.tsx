import React from "react";
import ReactDOM from "react-dom/client";
import { View } from "./features/View.tsx";
import { createApplication } from "./features/createApplication.ts";
import { ViewContextProvider } from "./features/utils/react-adapter.ts";
import "./styles/main.scss";

const app = createApplication();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ViewContextProvider value={app}>
      <View />
    </ViewContextProvider>
  </React.StrictMode>
);
