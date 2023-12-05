import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/shared/header/header";
import Footer from "./components/shared/footer/footer";
import IndexPage from "./pages/index.page";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <Header />
        <IndexPage />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
