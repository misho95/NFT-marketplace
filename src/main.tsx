import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Header = lazy(() => import("./components/shared/header/header"));
const Footer = lazy(() => import("./components/shared/footer/footer"));
const Loading = lazy(() => import("./components/shared/loading"));
const IndexPage = lazy(() => import("./pages/index.page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Suspense fallback={<Loading />}>
          <IndexPage />
        </Suspense>
        <Footer />
      </>
    ),
  },
  {
    path: "/marketplace",
    element: (
      <>
        <Header />

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
