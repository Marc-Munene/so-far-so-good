import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { DynamicRendering } from "./DynamicRendering";
import { State } from "./State";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <State />
    <Toaster />
  </StrictMode>
);
