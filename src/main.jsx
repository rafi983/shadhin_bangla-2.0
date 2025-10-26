import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router/dom";
import { router } from "./Router/routes.jsx";
import AuthProvider from "./Auth/Providers/AuthProvider.jsx";
import BackToTop from "./Components/BackToTop/BackToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <BackToTop />
    </AuthProvider>
  </StrictMode>
);
