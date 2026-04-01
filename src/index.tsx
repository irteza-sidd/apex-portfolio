import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FinalWebsite } from "./screens/FinalWebsite";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FinalWebsite />
  </StrictMode>,
);
